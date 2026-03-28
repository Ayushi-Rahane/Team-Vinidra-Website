import React, { useEffect, useState } from "react";
import useIsMobile from "../../utils/useMobile";

const ShootingStars = ({ starCount = 10, starColor = "#38BDF8", trailColor = "rgba(2, 132, 199, 0.4)" }) => {
  const [stars, setStars] = useState([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Reduce animated elements on mobile for better performance
    const count = isMobile ? Math.min(starCount, 5) : starCount;
    // Generate static parameters for stars
    const newStars = Array.from({ length: count }).map((_, i) => {
      const angle = 25 + Math.random() * 20; // 25 to 45 degrees
      return {
        id: i,
        x: Math.random() * 100, // horizontal start position percentage
        y: Math.random() * -50, // start above the screen
        length: Math.random() * 100 + 100, // length of the star tail
        delay: Math.random() * 8, // Random initial delay
        duration: Math.random() * 3 + 2, // Animation duration
        angle: angle,
      };
    });
    setStars(newStars);
  }, [starCount, isMobile]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[0] opacity-70">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.length}px`,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${trailColor}, ${starColor})`,
            transform: `rotate(${star.angle}deg)`,
            opacity: 0,
            animation: `shooting-star ${star.duration}s linear infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 10px 1px ${starColor}`,
            borderTopRightRadius: '100%',
            borderBottomRightRadius: '100%',
          }}
        />
      ))}
      <style>{`
        @keyframes shooting-star {
          0% {
            transform: rotate(var(--angle, 35deg)) translateX(0) scaleX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
            transform: rotate(var(--angle, 35deg)) translateX(50px) scaleX(1);
          }
          100% {
            transform: rotate(var(--angle, 35deg)) translateX(1500px) scaleX(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
