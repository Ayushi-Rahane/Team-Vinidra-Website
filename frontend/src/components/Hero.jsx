import React from 'react';
import SplitText from './SplitText';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-end px-6 lg:px-16 pt-24 pb-40 lg:pb-52">
      {/* Left-aligned content block — positioned in the lower-left like the template */}
      <div className="max-w-4xl float-container">
        <SplitText
          tag="h1"
          text="TEAM VINIDRA"
          className="text-glowing-sparkle font-[family-name:--font-title] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.2em] uppercase leading-tight mb-4 whitespace-nowrap"
          startDelay={0.5}
          delay={120} // Slower character stagger
          duration={2.5} // Slower character fade
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />
        <SplitText
          tag="h2"
          text="Space Research and Engineering Group"
          className="font-[family-name:--font-subheading] text-xl md:text-2xl font-medium text-slate-300 mb-6 leading-snug tracking-wide"
          startDelay={2.5} // Wait for H1
          delay={50} // Word stagger
          duration={2.0}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />
        <SplitText
          tag="p"
          text="Innovative, women-driven aerospace group developing CubeSats, CanSats, and Model Rockets. Contributing to India's space ecosystem."
          className="text-[15px] md:text-base text-slate-400 mb-10 leading-relaxed max-w-md tracking-wide"
          startDelay={4.0} // Wait for H2
          delay={80} // Line/word stagger
          duration={2.5}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />
        <div 
          className="flex items-center gap-6 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]"
          style={{ animationDelay: '6.5s' }}
        >
          <a
            href="#team"
            className="btn-space-extra px-8 py-3.5 text-sm font-[family-name:--font-heading] font-bold tracking-[0.15em] uppercase text-white rounded-xl"
          >
            <span>Explore Team</span>
          </a>
          <a
            href="#contact"
            className="btn-space-extra px-8 py-3.5 text-sm font-[family-name:--font-heading] font-bold tracking-[0.15em] uppercase text-white rounded-xl"
          >
            <span>Join Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
