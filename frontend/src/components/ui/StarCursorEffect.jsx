import React, { useEffect, useRef } from "react";
import useIsMobile from "../../utils/useMobile";

const StarCursorEffect = () => {
  const isMobile = useIsMobile();
  const canvasRef = useRef(null);

  useEffect(() => {
    // On mobile/touch devices there's no cursor — skip entirely
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 100;
        // Cyan / SkyBlue colors matching the theme
        const colors = ["#38BDF8", "#7DD3FC", "#BAE6FD", "#FFFFFF"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1.5;
        this.size = Math.max(0.1, this.size - 0.015);
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 100;
        
        ctx.beginPath();
        const spikes = 4;
        const outerRadius = this.size * 2;
        const innerRadius = this.size;
        
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI / spikes) * i;
          ctx.lineTo(this.x + Math.cos(angle) * radius, this.y + Math.sin(angle) * radius);
        }
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const unscaledHandleMouseMove = (e) => {
      // Create a few particles on mouse move
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", unscaledHandleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", unscaledHandleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  // Don't render the canvas at all on mobile — no cursor to track
  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[9999]"
    />
  );
};

export default StarCursorEffect;
