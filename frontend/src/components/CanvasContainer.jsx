import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./ParticleRingUtils";

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      const scrollY = window.scrollY || 0;
      // It rotates slowly over time, and scrolling accelerates the rotation
      ref.current.rotation.z = clock.getElapsedTime() * 0.05 + scrollY * 0.002;
      ref.current.rotation.y = scrollY * 0.001;
      ref.current.rotation.x = scrollY * 0.001;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={`inner-${point.idx}`} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={`outer-${point.idx}`} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.035, 8, 8]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={2.5}
        roughness={0.1}
        color={color}
        transparent={true}
        opacity={1}
      />
    </Sphere>
  );
};

const CanvasContainer = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[1] pointer-events-none">
      <Canvas
        camera={{ position: [10, -7.5, -5] }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <directionalLight intensity={0.5} />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
