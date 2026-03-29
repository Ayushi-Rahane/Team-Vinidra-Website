import { achievements } from "./achievements/achievementData";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Rocket, Box, Star, CircuitBoard } from "lucide-react";

/* SAME AS ABOUT SECTION */
const reveal = (dir = 1) => ({
  hidden: { opacity: 0, y: 60 * dir },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const ICON_MAP = {
  trophy: Trophy,
  rocket: Rocket,
  cube: Box,
  circuit: CircuitBoard,
  star: Star,
};

function useCountUp(target, duration = 1800, trigger = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return val;
}

/* 🔥 UPDATED CARD (ABOUT STYLE) */
function FeatureCard({ achieve }) {
  return (
    <motion.div
      variants={reveal(1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      whileHover={{ y: -6 }}
      className="will-change-transform"
    >
      <div
        className="group relative overflow-hidden rounded-3xl border border-white/15 
        bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
        hover:from-sky-400/30 hover:via-sky-400/10
        transition-all duration-500 backdrop-blur-md p-7 shadow-lg"
      >
        {/* glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 
          transition duration-700
          bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_60%)]"
        />

        <div className="relative">
          {/* 🔥 TOP ACCENT (replaces icon) */}
          <div className="w-10 h-[2px] bg-sky-300 mb-5 opacity-80" />

          <h3
            className="text-xl md:text-2xl text-white mb-3"
            style={{ fontFamily: "Orbitron", letterSpacing: "0.06em" }}
          >
            {achieve.title}
          </h3>

          <p className="text-white/75 text-sm mb-5 leading-relaxed">
            {achieve.shortDescription}
          </p>

          <span className="text-sky-400 text-xs tracking-[0.25em]">
            {achieve.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
export default function AchievementPreview() {
  const statsRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  const awards = useCountUp(12, 1800, statsInView);
  const projects = useCountUp(8, 1800, statsInView);
  const members = useCountUp(47, 2000, statsInView);
  const years = useCountUp(5, 1600, statsInView);

  /* BUTTON ANIMATION */
  useEffect(() => {
    if (!buttonRef.current) return;

    const el = buttonRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
          el.style.pointerEvents = "auto";
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
  }, []);

  return (
    <section className="relative py-28 text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute w-[600px] h-[600px] bg-sky-500/10 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-10" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2
          className="text-4xl md:text-5xl font-thin tracking-[0.3em]
        bg-gradient-to-r from-white via-sky-300 to-white 
        text-transparent bg-clip-text"
        >
          ACHIEVEMENTS
        </h2>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-5" />
      </motion.div>

      {/* STATS */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-20 px-[8%] max-w-3xl mx-auto"
      >
        {[
          { val: awards, label: "Awards", suffix: "+" },
          { val: projects, label: "Projects", suffix: "" },
          { val: members, label: "Members", suffix: "+" },
          { val: years, label: "Years", suffix: "" },
        ].map((s, i) => (
          <div
            key={i}
            className="flex-1 text-center"
            style={{
              padding: "16px 8px",
              borderLeft: i === 0 ? "none" : "1px solid rgba(56,189,248,0.12)",
            }}
          >
            <span className="block font-black text-2xl md:text-3xl text-sky-200">
              {s.val}
              {s.suffix}
            </span>

            <span className="block text-white/40 uppercase mt-2 text-[10px] tracking-[0.25em]">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* 🔥 CARDS WITH ABOUT MOTION */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {achievements.slice(0, 2).map((a, i) => (
          <FeatureCard key={i} achieve={a} />
        ))}
      </div>

      {/* BUTTON */}
      {/* 🔥 MOTION BUTTON */}
      <motion.div
        variants={reveal(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="flex justify-center mt-20 mb-6 w-full relative z-20"
      >
        <motion.button
          onClick={() => navigate("/achievements")}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="relative px-8 py-4 rounded-full text-white 
    font-thin tracking-[0.2em] uppercase text-sm 
    group flex items-center gap-3 cursor-pointer overflow-hidden"
          style={{
            border: "1px solid rgba(56,189,248,0.25)",
            background: "rgba(2,6,23,0.55)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* glow */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.25), transparent 70%)",
            }}
          />

          <span className="relative z-10">EXPLORE ALL ACHIEVEMENTS</span>

          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
