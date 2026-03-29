import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { categories } from "../data/knowledgeCategories";
import { blogs } from "../data/knowledgeBlogs";

const reveal = (dir = 1) => ({
  hidden: { opacity: 0, y: 60 * dir },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const KnowledgePreview = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const handleClick = (index) => setActiveIndex(index);

  // ⭐ Memoized preview items for performance
  const previewItems = useMemo(
    () =>
      categories.map((cat) => ({
        ...cat,
        blogs: blogs.filter((b) => b.category === cat.slug).length,
      })),
    [],
  );

  // Scroll effect
  const { scrollY } = useViewportScroll();
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY);
      setSectionHeight(rect.height);
    }
  }, [sectionRef]);

  const yOffset = useTransform(
    scrollY,
    [sectionTop - 600, sectionTop + sectionHeight],
    [50, -50],
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card positioning logic
  const getPositionStyle = (idx) => {
    let offset = idx - activeIndex;
    const len = previewItems.length;

    if (offset < -Math.floor(len / 2)) offset += len;
    if (offset > Math.floor(len / 2)) offset -= len;

    if (Math.abs(offset) > 1) {
      return {
        transform: "scale(0) translateX(0px) rotateY(0deg)",
        opacity: 0,
        zIndex: 0,
      };
    }

    const isActive = offset === 0;
    // RESPONSIVE translateX
    // RESPONSIVE translateX & scale
    // RESPONSIVE translateX & scale for mobile
    let baseOffset, scale, rotateY;

    if (window.innerWidth < 400) {
      baseOffset = 80; // smaller spacing on mobile
      scale = isActive ? 1 : 0.75; // side cards slightly bigger
      rotateY = offset * 5; // gentle rotation
    } else if (window.innerWidth < 768) {
      baseOffset = 150;
      scale = isActive ? 1 : 0.7;
      rotateY = offset * 10;
    } else {
      baseOffset = 250;
      scale = isActive ? 1 : 0.7;
      rotateY = offset * 20;
    }

    const translateX = offset * baseOffset;

    const opacity = isActive ? 1 : 0.6;
    const zIndex = isActive ? 20 : 10;

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      willChange: "transform, opacity",
      transition: "transform 0.7s ease, opacity 0.7s ease",
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-[8%] text-white perspective-1000"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center mb-2 md:mb-20"
      >
        <h2
          className="text-4xl md:text-5xl font-thin tracking-[0.32em]
              bg-gradient-to-r from-white via-sky-300 to-white 
              text-transparent bg-clip-text"
        >
          KNOWLEDGE HUB
        </h2>

        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-4" />
      </motion.div>
      {/* <motion.div
        variants={reveal(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        whileHover={{ y: -6 }}
        className="will-change-transform"
      > */}
        {/* CARDS */}
        <div className="relative flex justify-center items-center h-[28rem] md:h-[30rem] overflow-hidden">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.slug}
              onClick={() => handleClick(idx)}
              className="absolute cursor-pointer"
              style={getPositionStyle(idx)}
            >
              <div className="relative w-62 md:w-80 h-[75vw] md:h-[24rem] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col gap-3">
                  <h3 className="text-white font-semibold text-xl md:text-2xl">
                    {item.title}
                  </h3>

                  <div className="flex justify-between items-center w-full">
                    <p className="text-white/70 text-sm md:text-base">
                      {item.blogs} Blogs
                    </p>

                    <ArrowRight
                      size={24}
                      className="text-white hover:text-sky-400 transition-colors"
                      onClick={() =>
                        navigate(`/knowledge-hub?type=${item.slug}`)
                      }
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      {/* </motion.div> */}
    </section>
  );
};

export default KnowledgePreview;
