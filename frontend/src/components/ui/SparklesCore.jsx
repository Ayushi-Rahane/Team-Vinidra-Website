"use client";
import React, { useId, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
    fullScreen = false,
  } = props;

  const [start, setStart] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);
  const generatedId = useId();

  useEffect(() => {
    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);
    initCanvas();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    ctx.scale(scale, scale);

    particlesRef.current = [];
    const density = particleDensity || 900;
    for (let i = 0; i < density; i++) {
      particlesRef.current.push(spawnParticle(rect.width, rect.height, true));
    }

    setStart(true);
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    animationFrameId.current = null;
    animate();
  };

  // SEMI-CIRCLE or FULL SCREEN
  const spawnParticle = (width, height, randomY = false) => {
    if (fullScreen) {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * ((maxSize || 1.5) - (minSize || 0.3)) + (minSize || 0.3),
        speedX: (Math.random() - 0.5) * (speed || 0.2),
        speedY: (Math.random() - 0.5) * (speed || 0.2),
        opacity: Math.random() * 0.7 + 0.15,
        fadeSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      };
    }

    const radius = width / 2;
    const cx = width / 2;
    const cy = 0; // Top center

    // To spawn within semi-circle (curving downwards):
    const angle = Math.random() * Math.PI;
    const dist = Math.sqrt(Math.random()) * radius;

    const x = cx + dist * Math.cos(angle);
    const y = cy + dist * Math.sin(angle) * (randomY ? 1 : 0.2);

    return {
      x,
      y,
      size: Math.random() * ((maxSize || 1.5) - (minSize || 0.3)) + (minSize || 0.3),
      speedX: (Math.random() - 0.5) * (speed || 0.2),
      speedY: (Math.random() * 0.4 + 0.1) * (speed || 1), // downward drift
      opacity: Math.random() * 0.7 + 0.15,
      fadeSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
    };
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const radius = rect.width / 2;
    const cx = rect.width / 2;
    const cy = 0;

    particlesRef.current = particlesRef.current.map((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Pulse opacity
      p.opacity += p.fadeSpeed;
      if (p.opacity > 0.95) { p.opacity = 0.95; p.fadeSpeed *= -1; }
      if (p.opacity < 0.05) { p.opacity = 0.05; p.fadeSpeed *= -1; }

      let edgeFade = 1;

      if (fullScreen) {
        // Full screen boundary check
        if (p.x < 0 || p.x > rect.width || p.y < 0 || p.y > rect.height) {
          return spawnParticle(rect.width, rect.height, true);
        }
      } else {
        // Semi-circle boundary check
        const dx = p.x - cx;
        const dy = p.y - cy;
        const distSq = dx * dx + dy * dy;

        if (distSq > radius * radius || p.y < cy || p.y > rect.height) {
          return spawnParticle(rect.width, rect.height, false);
        }

        // Brightness fade near edge of circle
        const dist = Math.sqrt(distSq);
        edgeFade = Math.max(0, 1 - (dist / radius));
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = particleColor || "#FFFFFF";
      ctx.globalAlpha = p.opacity * edgeFade;
      ctx.fill();

      return p;
    });

    ctx.globalAlpha = 1;
    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <motion.div
      animate={{ opacity: start ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      className={className}
    >
      <canvas
        ref={canvasRef}
        id={id || generatedId}
        className="w-full h-full"
        style={{ background: background || "transparent" }}
      />
    </motion.div>
  );
};
