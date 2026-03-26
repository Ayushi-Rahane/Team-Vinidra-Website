import React from "react";
import { motion } from "framer-motion";

const reveal = (dir = 1) => ({
  hidden: { opacity: 0, y: 60 * dir },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const About = () => {
  return (
    <section className="relative py-28 md:py-32 px-[8%] text-white">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em]
        bg-gradient-to-r from-white via-sky-300 to-white 
        text-transparent bg-clip-text">
          ABOUT US
        </h2>

        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-4" />
      </motion.div>

      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-12 max-w-[1100px] mx-auto mb-16">

        {/* WHO */}
        {/* VISION */}
<motion.div
  variants={reveal(1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.35 }}
  whileHover={{ y: -6 }}
  className="will-change-transform"
>
  <div className="group relative overflow-hidden rounded-3xl border border-white/15 
  bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
  hover:from-sky-400/30 hover:via-sky-400/10
  transition-all duration-500 backdrop-blur-md p-8 shadow-lg">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
            transition duration-700
            bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_60%)]" />

            <div className="relative">
              <div className="mb-5">
                <div className="w-10 h-[1px] bg-sky-300 mb-3" />
                <h3 className="tracking-[0.35em] text-lg text-white/90">
                  WHO WE ARE
                </h3>
              </div>

              <p className="text-white/80 leading-relaxed text-[15px]">
                Team Vinidra is a student-driven aerospace innovation group
                focused on CubeSat missions, rocket systems and applied space
                research. Members gain real engineering exposure through
                collaborative mission development.
              </p>
            </div>

          </div>
        </motion.div>

        {/* VISION */}
        {/* VISION */}
<motion.div
  variants={reveal(1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.35 }}
  whileHover={{ y: -6 }}
  className="will-change-transform h-full"  
>
  <div className="group relative overflow-hidden rounded-3xl border border-white/15 
  bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
  hover:from-sky-400/30 hover:via-sky-400/10
  transition-all duration-500 backdrop-blur-md p-8 shadow-lg h-full"> 

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
            transition duration-700
            bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.25),transparent_60%)]" />

            <div className="relative">
              <div className="mb-5">
                <div className="w-10 h-[1px] bg-sky-300 mb-3" />
                <h3 className="tracking-[0.35em] text-lg text-white/90">
                  OUR VISION
                </h3>
              </div>

              <p className="text-white/80 leading-relaxed text-[15px]">
                We aim to build a strong ecosystem of aerospace innovation while
                contributing to impactful student space missions and inspiring
                more engineers to explore careers in space technology.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* CENTER */}
      <motion.div
        variants={reveal(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="max-w-[720px] mx-auto will-change-transform"
      >
        <div className="group relative overflow-hidden rounded-3xl border border-white/15 
        bg-gradient-to-b from-sky-400/15 via-white/5 to-transparent
        hover:from-sky-400/30 hover:via-sky-400/10
        transition-all duration-500 backdrop-blur-md p-10 text-center shadow-lg">

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
          transition duration-700
          bg-[radial-gradient(circle_at_50%_10%,rgba(56,189,248,0.25),transparent_60%)]" />

          <div className="relative">
            <div className="w-14 h-[1px] bg-sky-300 mx-auto mb-5" />

            <h3 className="tracking-[0.4em] text-lg text-white/90 mb-4">
              WHAT WE DO
            </h3>

            <p className="text-white/80 leading-relaxed text-[15px]">
              The team actively works on satellite development, rocket engineering
              projects, aerospace competitions and technical workshops that help
              members build strong engineering and leadership capabilities.
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default About;