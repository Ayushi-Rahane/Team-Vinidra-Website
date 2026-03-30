import React from "react";
import { motion } from "framer-motion";
import diptiImg from "../assets/dipti.jpeg";
import { Star, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const reveal = (dir = 1) => ({
  hidden: { opacity: 0, y: 60 * dir },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FacultyCoordinator = () => {
  return (
    <section className="relative py-16 md:py-28 px-5 sm:px-[8%] text-white bg-black overflow-hidden">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center mb-12 md:mb-20 z-10 relative"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-[0.32em]
          bg-gradient-to-r from-white via-sky-300 to-white 
          text-transparent bg-clip-text"
        >
          FACULTY COORDINATOR
        </h2>

        <div className="w-20 h-[1px] sm:w-28 bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-3" />
      </motion.div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-500/20 via-white/10 to-sky-500/20 blur-3xl" />
      </div>

      {/* CONTENT */}
      <motion.div
        variants={reveal(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10"
      >
        {/* IMAGE */}
        <motion.div
          className="flex justify-center"
          variants={float}
          animate="animate"
        >
          <div
            className="relative group rounded-3xl border border-white/20 
            bg-gradient-to-bl from-sky-400/20 via-white/5 to-transparent p-1 shadow-[0_0_50px_rgba(56,189,248,0.35)]
            max-w-[300px] sm:max-w-[350px] w-full"
          >
            {/* Inner wrapper keeps glow border separate from image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={diptiImg}
                alt="Dr. Dipti D. Patil"
                className="w-full h-auto rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Hover Glow only on border */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-sky-400 transition duration-500" />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={reveal(1)}
          className="text-white/90 leading-relaxed text-[14px] sm:text-[15px] 
                     text-center md:text-left"
        >
          <p className="mb-4">
            <strong>Dr. Dipti D. Patil</strong> is the Dean of Student Affairs
            and IT Professor at Cummins College of Engineering for Women, Pune,
            with 22+ years of academic and research experience. She is Member
            Secretary of the National Committee for Space Technology Courses
            (NC-STC) under IN-SPACe, DoS, Government of India, and a registered
            Patent Consultant.
          </p>

<div className="space-y-3">
  <div className="flex flex-row items-start gap-3">
    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 mt-1" />
    <span className="flex-1 text-left text-[14px] sm:text-[15px]">
      Recipient of Best Teacher, Best Innovation, Most Influential Professor (2024), and Best Professor in IT; holds six granted patents.
    </span>
  </div>

  <div className="flex flex-row items-start gap-3">
    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 flex-shrink-0 mt-1" />
    <span className="flex-1 text-left text-[14px] sm:text-[15px]">
      Expertise: patenting and innovation, mobile healthcare, data science, AI, IoT, autonomous space missions.
    </span>
  </div>

  <div className="flex flex-row items-start gap-3">
    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 flex-shrink-0 mt-1" />
    <span className="flex-1 text-left text-[14px] sm:text-[15px]">
      Collaborated with ISRO on pioneering research in Autonomous Space Missions.
    </span>
  </div>

  <div className="flex flex-row items-start gap-3">
    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 flex-shrink-0 mt-1" />
    <span className="flex-1 text-left text-[14px] sm:text-[15px]">
      Member of CSI, ISTE, IETE, IEEE, ASI; contributes to journals, conferences, and professional committees.
    </span>
  </div>
</div>

          <p className="mt-4">
            Her vision is to inspire students and faculty toward innovative
            research that promotes societal well-being.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FacultyCoordinator;
