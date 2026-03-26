import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { categories } from "../../data/knowledgeCategories";

const OtherCategories = ({ current }) => {
  const navigate = useNavigate();

  const others = categories.filter((c) => c.slug !== current);
  const loopData = [...others, ...others]; // duplicate

  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const speed = 40; // pixels per second

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;

    const width = containerRef.current.scrollWidth / 2;

    let moveBy = (speed * delta) / 1000;

    let currentX = x.get() - moveBy;

    // modulo loop (NO reset jump)
    if (Math.abs(currentX) >= width) {
      currentX = 0;
    }

    x.set(currentX);
  });

  return (
    <section className="py-24 text-white overflow-hidden">

      <h2 className="text-center text-3xl md:text-4xl font-thin tracking-[0.35em] mb-14
      bg-gradient-to-r from-white via-sky-300 to-white 
      text-transparent bg-clip-text">
        EXPLORE MORE
      </h2>

      <div className="relative">

        {/* side fades */}
        <div className="absolute left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-black to-transparent" />

        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-6"
        >
          {loopData.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(`/knowledge-hub?type=${cat.slug}`)}
              className="min-w-[240px] md:min-w-[260px] h-64 rounded-3xl overflow-hidden 
              relative group cursor-pointer flex-shrink-0"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />

              <div className="absolute bottom-0 p-5">
                <p className="text-white font-semibold text-lg leading-snug">
                  {cat.title}
                </p>

                <div className="w-0 group-hover:w-16 h-[2px] bg-sky-300 mt-2 transition-all duration-500" />
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default OtherCategories;