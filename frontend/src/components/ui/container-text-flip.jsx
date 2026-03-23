"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ContainerTextFlip = ({
  words,
  duration = 2500,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = currentIndex === words.length - 1 ? 0 : currentIndex + 1;
        return words[nextIndex];
      });
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden ${className || ""}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15, position: "absolute" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="whitespace-nowrap"
        >
          {currentWord}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
