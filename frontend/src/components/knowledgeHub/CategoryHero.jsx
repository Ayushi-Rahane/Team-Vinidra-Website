import React from "react";
import { motion } from "framer-motion";

// Reveal animation similar to BlogDetail
const revealUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CategoryHero = ({ category, count }) => {
  if (!category) return null;

  return (
    <section
      className="relative h-[78vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK + GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

      {/* SUBTLE RADIAL GLOW */}
      <div
        className="absolute inset-0 opacity-40
        bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]"
      />

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={revealUp}
        className="relative text-center max-w-[820px] px-6"
      >
        {/* CATEGORY TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-thin tracking-[0.34em]
          bg-gradient-to-r from-white via-sky-300 to-white 
          text-transparent bg-clip-text mb-6 leading-tight"
        >
          {category.title}
        </motion.h1>

        {/* GLOW SEPARATOR */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-28 h-[2px] mx-auto mb-6 
          bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-[0.5px]"
        />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white/70 text-[15px] md:text-[17px] leading-relaxed mb-6"
        >
          {category.description}
        </motion.p>

        {/* META PILL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
          border border-white/15 backdrop-blur-md 
          bg-gradient-to-r from-sky-400/20 via-white/5 to-transparent
          shadow-lg cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-sm tracking-wider text-white/80">
            {count} ARTICLES AVAILABLE
          </span>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-[0.3em]">SCROLL</span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default CategoryHero;