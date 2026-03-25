import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import SplitText from './SplitText';
import { SparklesCore } from './ui/SparklesCore';
import { Button } from './ui/moving-border';
import { ContainerTextFlip } from './ui/container-text-flip';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start pt-44 overflow-hidden">

      {/* Title */}

      <div
        className="max-w-5xl float-container text-center relative z-20 transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(56,189,248,1)] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SplitText
          tag="h1"
          text="TEAM VINIDRA"
          className={`font-thin tracking-[0.32em] text-white text-5xl md:text-6xl lg:text-7xl uppercase leading-tight mb-4 whitespace-nowrap transition-all duration-300 ${isHovered ? 'text-glowing-sparkle' : ''}`}
          startDelay={0}
          delay={80}
          duration={1.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      {/* Sparkle shower container — inverted triangle, full-width top, fades at globe */}
      <div
        className="w-full max-w-3xl relative mx-auto"
        style={{
          height: '55vh',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        }}
      >

        {/* Gradients — top blue glow line, ensured perfect centering */}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm z-10" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px z-10" />
        <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm z-10" />
        <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 z-10" />

        {/* Sparkle canvas — semi-circle container */}
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1.5}
          particleDensity={400}
          className="absolute inset-x-0 top-0 w-full h-full z-0"
          particleColors={["#FFFFFF", "#E2E8F0", "#CBD5E1"]}
        />

        {/* ── Tagline with heavy animations ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 z-20 pointer-events-none gap-4 px-6">

          {/* Main tagline */}
          <div className="float-container" style={{ animationDelay: '0.5s' }}>
            <motion.p
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="text-center font-thin tracking-[0.35em] text-lg md:text-2xl lg:text-3xl text-white/90"
              style={{
                textShadow: '0 0 20px rgba(100, 160, 255, 0.9), 0 0 50px rgba(100, 160, 255, 0.5)',
              }}
            >
              Scripting the Unknown
            </motion.p>
          </div>

          {/* Sub tagline - Moving Border & Text Flip */}
          <div className="float-container pointer-events-auto" style={{ animationDelay: '1s' }}>
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 0.9, letterSpacing: '0.25em' }}
              transition={{ delay: 0.5, duration: 1.0, ease: 'easeOut' }}
              className="mt-2"
            >
              <Button
                borderRadius="2rem"
                className="bg-black/20 border-slate-800/40 backdrop-blur-sm px-8 py-3 font-thin tracking-[0.35em] text-white/80 text-[15px] md:text-base leading-relaxed"
                containerClassName="h-auto w-auto"
              >
                <ContainerTextFlip
                  words={["CubeSats", "CanSats", "Model Rockets"]}
                  className="w-[180px] text-center font-semibold"
                />
              </Button>
            </motion.div>
          </div>

          {/* Animated Rocket Icon */}
          <motion.div
            className="text-sky-400 mt--2"
            animate={{
              scale: [1, 1, 1],
              opacity: [0.8, 0.4, 0.8],
              filter: [
                'drop-shadow(0 0 2px rgba(56, 189, 248, 0.4))',
                'drop-shadow(0 0 20px rgba(56, 189, 248, 0.9))',
                'drop-shadow(0 0 2px rgba(56, 189, 248, 0.4))',
              ],
            }}
            transition={{ delay: 2.0, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Rocket size={32} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
