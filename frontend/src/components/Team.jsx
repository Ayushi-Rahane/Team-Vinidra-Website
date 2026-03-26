import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Satellite, Rocket, Users, ChevronRight } from 'lucide-react';

// Animated orbit rings canvas
const OrbitCanvas = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let frame;
    let t = 0;

    const nodes = [
      { angle: 0,        r: 110, speed: 0.4,  color: 'rgba(96,192,255,0.85)',  size: 4 },
      { angle: 2.1,      r: 110, speed: 0.4,  color: 'rgba(96,192,255,0.5)',   size: 3 },
      { angle: 4.2,      r: 110, speed: 0.4,  color: 'rgba(96,192,255,0.65)',  size: 3.5 },
      { angle: 0.7,      r: 68,  speed: -0.6, color: 'rgba(150,210,255,0.7)',  size: 3 },
      { angle: 3.5,      r: 68,  speed: -0.6, color: 'rgba(150,210,255,0.45)', size: 2.5 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      // Outer orbit ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, 110, 110, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(96,192,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner orbit ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, 68, 68, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(96,192,255,0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Nodes
      nodes.forEach(n => {
        const angle = n.angle + t * n.speed;
        const x = cx + n.r * Math.cos(angle);
        const y = cy + n.r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(96,192,255,0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Center pulse
      const pulse = 0.5 + 0.5 * Math.sin(t * 2);
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28 + pulse * 8);
      grad.addColorStop(0, `rgba(96,192,255,${0.18 + pulse * 0.08})`);
      grad.addColorStop(1, 'rgba(96,192,255,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 28 + pulse * 8, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// Division preview cards data
const divisions = [
  {
    icon: Satellite,
    label: 'KarveSat',
    desc: 'Avionics · Electrical · Mechanical · Payload · Software',
    count: '5 Subteams',
  },
  {
    icon: Rocket,
    label: 'Rocketry',
    desc: 'Rocket Design · Avionics · Flight Software',
    count: '3 Subteams',
  },
  {
    icon: Cpu,
    label: 'CanSat',
    desc: 'OBC · Payload · ADCS · Power · S&T',
    count: '5 Subteams',
  },
  {
    icon: Users,
    label: 'Operations',
    desc: 'Graphic Design · Finance · PR · Web · Events',
    count: '6 Departments',
  },
];

export default function Team() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden">

      {/* Subtle section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(30,80,180,0.13)_0%,transparent_70%)]" />
      </div>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-300/50" />
        <span className="text-sky-300/60 text-[10px] tracking-[0.35em] uppercase">Mission Personnel</span>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-sky-300/50" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text uppercase mb-4">
          Meet The Team
        </h2>
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mb-4" />
        <p className="text-white/50 text-sm max-w-xl mx-auto tracking-wide leading-relaxed">
          A collective of engineers, designers, and innovators — united under one mission. Explore the full hierarchy of Team Vinidra.
        </p>
      </motion.div>

      {/* Center orbit visualization + PM card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative w-[260px] h-[260px] mb-20 flex-shrink-0"
      >
        <OrbitCanvas />
        {/* Central PM card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[120px] text-center overflow-hidden rounded-2xl border border-white/15
            bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
            backdrop-blur-md p-4 shadow-lg">
            <div className="w-10 h-10 rounded-full border border-sky-300/50 bg-sky-900/20 flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-sky-300" />
            </div>
            <p className="text-white text-[10px] tracking-[0.15em] uppercase leading-tight">Aditi Sant</p>
            <p className="text-sky-300/70 text-[8px] tracking-wider mt-1 uppercase">Project Manager</p>
          </div>
        </div>
      </motion.div>

      {/* Division preview grid */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mb-16">
        {divisions.map((div, i) => {
          const Icon = div.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="group relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] overflow-hidden rounded-3xl border border-white/15
                bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
                hover:from-sky-400/30 hover:via-sky-400/10
                transition-all duration-500 backdrop-blur-md p-5 text-center shadow-lg
                cursor-pointer"
              onClick={() => navigate('/team')}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-700
                bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
              <Icon className="relative w-7 h-7 text-sky-300/60 group-hover:text-sky-300 mx-auto mb-3 transition-colors" />
              <p className="relative text-white/90 text-xs tracking-[0.2em] uppercase mb-1">{div.label}</p>
              <p className="relative text-white/35 text-[9px] tracking-wide leading-relaxed mb-2">{div.desc}</p>
              <span className="relative inline-block px-2 py-0.5 border border-white/10 rounded-full text-sky-300/60 text-[8px] tracking-widest uppercase">{div.count}</span>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: false, amount: 0.5 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate('/team')}
        className="group relative flex items-center gap-3 px-10 py-4 overflow-hidden rounded-full border border-white/15
          bg-gradient-to-r from-sky-400/10 via-white/5 to-sky-400/10
          hover:from-sky-400/25 hover:via-sky-400/10 hover:to-sky-400/25
          text-white text-sm tracking-[0.2em] uppercase
          transition-all duration-500 hover:-translate-y-0.5 backdrop-blur-md"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-700
          bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.2),transparent_70%)]" />
        <span className="relative">Explore Full Team</span>
        <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Hint text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-6 flex items-center gap-2 text-white/20 text-[10px] tracking-widest uppercase"
      >
        <ChevronRight className="w-3 h-3" />
        <span>Step-by-step hierarchy explorer</span>
        <ChevronRight className="w-3 h-3" />
      </motion.div>
    </section>
  );
}
