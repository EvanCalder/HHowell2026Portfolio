import React, { useMemo } from "react";

const ShootingStars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        top: `${5 + Math.random() * 70}%`,
        left: `${-20 + Math.random() * 60}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${1.2 + Math.random() * 2.2}s`,
        warm: i % 3 === 0,
        length: 80 + Math.random() * 100,
      })),
    []
  );

  return (
    <div className="intro-stars-layer" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className={`shooting-star ${star.warm ? "shooting-star-warm" : ""}`}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.length}px`,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
