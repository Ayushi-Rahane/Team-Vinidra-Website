import React from "react";
import { motion } from "framer-motion";

const tabs = [
  { label: "All", value: "all" },
  { label: "Latest", value: "latest" },
  { label: "Popular", value: "popular" },
  { label: "Beginner", value: "beginner" },
];

const CategoryTabs = ({ active, setActive, isEmpty }) => {
  return (
    <div className={`${isEmpty ? "py-2" : "py-10"} flex justify-center`}>
      <div className="relative flex gap-3 p-2 rounded-full 
      border border-white/15 backdrop-blur-md
      bg-gradient-to-r from-sky-400/10 via-white/5 to-transparent shadow-lg">

        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className="relative px-6 py-2 text-sm tracking-wide transition"
          >
            {active === tab.value && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full
                bg-gradient-to-r from-sky-400/30 via-sky-300/20 to-transparent
                border border-sky-300/30"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <span
              className={`relative z-10 ${
                active === tab.value
                  ? "text-white"
                  : "text-white/60 hover:text-sky-300"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;