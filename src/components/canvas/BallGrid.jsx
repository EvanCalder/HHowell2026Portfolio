import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.6} floatIntensity={1}>
      <mesh castShadow receiveShadow scale={0.9} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallGridCanvas = ({ technologies }) => {
  // Arrange balls in a grid: figure out columns based on count
  const cols = Math.min(technologies.length, 6);
  const spacing = 2.4;

  const positions = technologies.map((_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const totalCols = Math.min(technologies.length - row * cols, cols);
    const offsetX = -(totalCols - 1) * spacing / 2;
    return [offsetX + col * spacing, -row * spacing, 0];
  });

  // Center vertically
  const totalRows = Math.ceil(technologies.length / cols);
  const yOffset = ((totalRows - 1) * spacing) / 2;

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 12], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: totalRows * 120 + 40 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 5]} intensity={0.8} />
        <group position={[0, yOffset, 0]}>
          {technologies.map((tech, i) => (
            <Ball key={tech.name} imgUrl={tech.icon} position={positions[i]} />
          ))}
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallGridCanvas;
