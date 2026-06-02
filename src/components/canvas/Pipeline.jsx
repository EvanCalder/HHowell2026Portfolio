import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Text, Float } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

/* ── Glowing sphere node with ring and label ── */
function PipelineNode({ position, label, color = "#915EFF", radius = 0.35, pulse = true }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (meshRef.current && pulse) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.5 + position[0] * 2) * 0.06;
      meshRef.current.scale.setScalar(s);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3 + position[0];
    }
  });

  return (
    <group position={position}>
      {/* Outer glow ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius + 0.15, 0.02, 8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[radius + 0.08, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} />
      </mesh>
      {/* Label */}
      <Text
        position={[0, -(radius + 0.28), 0]}
        fontSize={0.17}
        color="#aaa6c3"
        anchorX="center"
        anchorY="middle"
        font={undefined}
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </group>
  );
}

/* ── Central hub — larger with double ring ── */
function HubNode({ position, label, color = "#f6821f", radius = 0.5 }) {
  const meshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.25;
  });

  return (
    <group position={position}>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius + 0.2, 0.015, 8, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2.5, 0.3, 0]}>
        <torusGeometry args={[radius + 0.35, 0.01, 8, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[radius, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
          roughness={0.15}
          metalness={0.8}
          flatShading
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[radius + 0.12, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} />
      </mesh>
      <Text
        position={[0, -(radius + 0.35), 0]}
        fontSize={0.19}
        color="#e0dcd5"
        anchorX="center"
        anchorY="middle"
        font={undefined}
        outlineWidth={0.005}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </group>
  );
}

/* ── Animated particles flowing along a curve ── */
function FlowParticles({ start, end, color = "#915EFF", count = 14, speed = 0.4, arcHeight = 0.4 }) {
  const ref = useRef();

  const curve = useMemo(() => {
    const mid = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + arcHeight,
      (start[2] + end[2]) / 2 - 0.2,
    ];
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      new THREE.Vector3(...mid),
      new THREE.Vector3(...end),
    ]);
  }, [start, end, arcHeight]);

  const offsets = useMemo(
    () => Array.from({ length: count }, (_, i) => i / count),
    [count]
  );

  const initialPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const point = curve.getPoint(offsets[i]);
      arr[i * 3] = point.x;
      arr[i * 3 + 1] = point.y;
      arr[i * 3 + 2] = point.z;
    }
    return arr;
  }, [curve, count, offsets]);

  useFrame((state) => {
    if (!ref.current) return;
    const positions = ref.current.geometry.attributes.position;
    const time = state.clock.elapsedTime * speed;
    for (let i = 0; i < count; i++) {
      const t = (offsets[i] + time) % 1;
      const point = curve.getPoint(t);
      positions.setXYZ(i, point.x, point.y, point.z);
    }
    positions.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={initialPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color={color}
        transparent
        opacity={0.95}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Faint line showing the path ── */
function FlowLine({ start, end, color = "#915EFF", arcHeight = 0.4 }) {
  const geometry = useMemo(() => {
    const mid = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + arcHeight,
      (start[2] + end[2]) / 2 - 0.2,
    ];
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      new THREE.Vector3(...mid),
      new THREE.Vector3(...end),
    ]);
    return new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
  }, [start, end, arcHeight]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.12} />
    </line>
  );
}

/* ── Floating background particles ── */
function BackgroundParticles({ count = 80 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#915EFF" transparent opacity={0.3} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ── The full pipeline scene ── */
function PipelineScene() {
  const groupRef = useRef();

  // Compact layout — everything fits without cutoff
  const sources = [
    { pos: [-3.2, 0.9, 0], label: "Data Sources", color: "#3b82f6" },
    { pos: [-3.2, -0.1, 0], label: "Features", color: "#5f9ea0" },
    { pos: [-3.2, -1.1, 0], label: "Embeddings", color: "#e07040" },
  ];

  const hubPos = [0, 0, 0];
  const cachePos = [0, -1.4, 0.5];

  const outputs = [
    { pos: [3.2, 0.9, 0], label: "ML APIs", color: "#915EFF" },
    { pos: [3.2, -0.1, 0], label: "RAG Answers", color: "#7c3aed" },
    { pos: [3.2, -1.1, 0], label: "Insights", color: "#a78bfa" },
  ];

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 3, 5]} intensity={0.6} color="#915EFF" />
      <pointLight position={[-4, 1, 3]} intensity={0.3} color="#96BF48" />
      <pointLight position={[4, 1, 3]} intensity={0.3} color="#915EFF" />
      <pointLight position={[0, -2, 3]} intensity={0.2} color="#f6821f" />

      <BackgroundParticles />

      {/* Source nodes */}
      {sources.map((s, i) => (
        <Float key={`src-${i}`} speed={1.5} rotationIntensity={0} floatIntensity={0.3} floatingRange={[-0.05, 0.05]}>
          <PipelineNode position={s.pos} label={s.label} color={s.color} radius={0.28} />
        </Float>
      ))}

      {/* Central processing hub */}
      <HubNode position={hubPos} label="ML Platform" color="#f6821f" radius={0.45} />

      {/* KV Cache — smaller, offset forward */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.2} floatingRange={[-0.03, 0.03]}>
        <PipelineNode position={cachePos} label="Vector DB" color="#3b82f6" radius={0.28} />
      </Float>

      {/* Output nodes */}
      {outputs.map((o, i) => (
        <Float key={`out-${i}`} speed={1.5} rotationIntensity={0} floatIntensity={0.3} floatingRange={[-0.05, 0.05]}>
          <PipelineNode position={o.pos} label={o.label} color={o.color} radius={0.28} />
        </Float>
      ))}

      {/* Flow: Sources → Hub */}
      {sources.map((s, i) => (
        <React.Fragment key={`in-${i}`}>
          <FlowLine start={s.pos} end={hubPos} color={s.color} arcHeight={0.3} />
          <FlowParticles start={s.pos} end={hubPos} color={s.color} count={10} speed={0.3 + i * 0.04} arcHeight={0.3} />
        </React.Fragment>
      ))}

      {/* Flow: Hub → KV Cache */}
      <FlowLine start={hubPos} end={cachePos} color="#f6821f" arcHeight={0.15} />
      <FlowParticles start={hubPos} end={cachePos} color="#f6821f" count={6} speed={0.5} arcHeight={0.15} />

      {/* Flow: Hub → Outputs */}
      {outputs.map((o, i) => (
        <React.Fragment key={`out-${i}`}>
          <FlowLine start={hubPos} end={o.pos} color={o.color} arcHeight={0.3} />
          <FlowParticles start={hubPos} end={o.pos} color={o.color} count={10} speed={0.32 + i * 0.04} arcHeight={0.3} />
        </React.Fragment>
      ))}
    </group>
  );
}

const PipelineCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7.5], fov: 32 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
        <PipelineScene />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PipelineCanvas;
