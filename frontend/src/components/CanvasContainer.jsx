import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
      starsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const CanvasContainer = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,#0a0b1a_0%,#020308_100%)]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
