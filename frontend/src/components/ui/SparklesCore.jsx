"use client";
import React, { useId, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import useIsMobile from "../../utils/useMobile";

// Pre-render a glowing star sprite — cached per hex color
// Creates a bright core with soft halo, like real stars in space
const glowSpriteCache = new Map();
const SPRITE_PX = 32; // fixed sprite resolution for cache efficiency

function hexToRgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function getStarSprite(hexColor) {
  if (glowSpriteCache.has(hexColor)) return glowSpriteCache.get(hexColor);

  const size = SPRITE_PX;
  const off = document.createElement("canvas");
  off.width = size * 2;
  off.height = size * 2;
  const ctx = off.getContext("2d");
  const cx = size;
  const cy = size;

  // Outer soft glow halo — tight and subtle
  const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, size);
  outerGlow.addColorStop(0, hexToRgba(hexColor, 1));
  outerGlow.addColorStop(0.08, hexToRgba(hexColor, 0.7));
  outerGlow.addColorStop(0.2, hexToRgba(hexColor, 0.2));
  outerGlow.addColorStop(0.4, hexToRgba(hexColor, 0.04));
  outerGlow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = outerGlow;
  ctx.fillRect(0, 0, off.width, off.height);

  // Bright white-hot core — sharp and prominent
  const coreSize = size * 0.35;
  const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreSize);
  coreGlow.addColorStop(0, "rgba(255,255,255,1)");
  coreGlow.addColorStop(0.4, "rgba(255,255,255,0.9)");
  coreGlow.addColorStop(0.7, "rgba(255,255,255,0.3)");
  coreGlow.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = coreGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, coreSize, 0, Math.PI * 2);
  ctx.fill();

  glowSpriteCache.set(hexColor, off);
  return off;
}

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleColors,
    particleDensity,
    fullScreen = false,
  } = props;

  const isMobile = useIsMobile();
  const [start, setStart] = useState(false);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);
  const lastFrameTime = useRef(0);
  const generatedId = useId();

  useEffect(() => {
    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);
    initCanvas();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isMobile]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    // On mobile: skip devicePixelRatio scaling — render at 1x for performance
    const scale = isMobile ? 1 : (window.devicePixelRatio || 1);
    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    ctx.scale(scale, scale);

    particlesRef.current = [];
    const baseDensity = particleDensity || 900;
    // On mobile: reduce particle count to 25% for much less GPU load
    const density = isMobile ? Math.max(20, Math.round(baseDensity * 0.25)) : baseDensity;
    for (let i = 0; i < density; i++) {
      particlesRef.current.push(spawnParticle(rect.width, rect.height, true));
    }

    setStart(true);
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    animationFrameId.current = null;
    lastFrameTime.current = 0;
    animate();
  };

  const spawnParticle = (width, height, randomY = false) => {
    const color = particleColors
      ? particleColors[Math.floor(Math.random() * particleColors.length)]
      : particleColor || "#FFFFFF";

    if (fullScreen) {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * ((maxSize || 1.5) - (minSize || 0.3)) + (minSize || 0.3),
        speedX: (Math.random() - 0.5) * (speed || 0.2) * 0.1,
        speedY: (Math.random() - 0.5) * (speed || 0.2) * 0.1,
        opacity: Math.random() * 0.7 + 0.15,
        fadeSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        color,
      };
    }

    const radius = width / 2;
    const cx = width / 2;
    const cy = 0;

    const angle = Math.random() * Math.PI;
    const dist = Math.sqrt(Math.random()) * radius;

    return {
      x: cx + dist * Math.cos(angle),
      y: cy + dist * Math.sin(angle) * (randomY ? 1 : 0.2),
      size: Math.random() * ((maxSize || 1.5) - (minSize || 0.3)) + (minSize || 0.3),
      speedX: (Math.random() - 0.5) * (speed || 0.2),
      speedY: (Math.random() * 0.4 + 0.1) * (speed || 1),
      opacity: Math.random() * 0.7 + 0.15,
      fadeSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      color,
    };
  };

  const animate = (timestamp) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // On mobile: throttle to ~30fps (skip frames if <33ms elapsed)
    if (isMobile && lastFrameTime.current) {
      const delta = timestamp - lastFrameTime.current;
      if (delta < 33) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }
    }
    lastFrameTime.current = timestamp;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const scale = isMobile ? 1 : (window.devicePixelRatio || 1);
    const w = canvas.width / scale;
    const h = canvas.height / scale;
    ctx.clearRect(0, 0, w, h);

    const radius = w / 2;
    const cx = w / 2;
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
        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          return spawnParticle(w, h, true);
        }

        // Draw glowing star using pre-rendered sprite (zero-cost glow!)
        const sprite = getStarSprite(p.color);
        const drawSize = p.size * 5;
        ctx.globalAlpha = p.opacity;
        ctx.drawImage(sprite, p.x - drawSize, p.y - drawSize, drawSize * 2, drawSize * 2);
      } else {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const distSq = dx * dx + dy * dy;

        if (distSq > radius * radius || p.y < cy || p.y > h) {
          return spawnParticle(w, h, false);
        }

        const dist = Math.sqrt(distSq);
        edgeFade = Math.max(0, 1 - (dist / radius));

        // Semi-circle particles: simple clean dots
        ctx.globalAlpha = p.opacity * edgeFade;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

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
