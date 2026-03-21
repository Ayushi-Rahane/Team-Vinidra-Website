import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center items-center text-center px-[5%] pt-20">
      <div className="max-w-[900px] animate-[fadeIn_2s_ease-out_forwards]">
        <h1 className="font-[family-name:--font-heading] text-5xl md:text-7xl lg:text-8xl font-black tracking-widest mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span className="text-[#4a90e2] drop-shadow-[0_0_15px_rgba(74,144,226,0.6)]">TEAM</span> VINIDRA
        </h1>
        <h2 className="font-[family-name:--font-subheading] text-2xl md:text-3xl font-medium text-[#e0e5ff] mb-6 tracking-widest">
          Space Research and Engineering Group
        </h2>
        <p className="text-lg md:text-xl text-[#a0a5b8] italic mb-12 max-w-[700px] mx-auto">
          “Women-driven, hands-on space engineering initiative shaping future space leaders.”
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#team" className="bg-transparent text-white border border-white px-8 py-3 font-[family-name:--font-subheading] text-lg tracking-widest rounded-full uppercase transition-all duration-300 hover:bg-white hover:text-[#030514] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            Explore Team
          </a>
          <a href="#contact" className="bg-[#4a90e2] text-white px-8 py-3 font-[family-name:--font-subheading] text-lg tracking-widest rounded-full uppercase transition-all duration-300 shadow-[0_0_15px_rgba(74,144,226,0.6)] hover:bg-[#357abd] hover:shadow-[0_0_25px_rgba(74,144,226,0.8)]">
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
