import React from 'react';
import { BookOpen, Rocket, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center px-[5%] pt-24 pb-12">
      <h2 className="font-[family-name:--font-heading] text-4xl text-center mb-12 tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Mission & Vision</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        <div className="bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(74,144,226,0.2)] hover:border-[#4a90e2]/50">
          <h3 className="font-[family-name:--font-subheading] text-[#4a90e2] text-2xl mb-4 flex items-center gap-3"><BookOpen className="w-7 h-7" /> Team Story</h3>
          <p className="text-[#a0a5b8] text-base">Founded in 2021 as a satellite team, Team Vinidra expanded in 2024–25 into a multi-project aerospace group focusing on cutting-edge space technology.</p>
        </div>

        <div className="bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(74,144,226,0.2)] hover:border-[#4a90e2]/50">
          <h3 className="font-[family-name:--font-subheading] text-[#4a90e2] text-2xl mb-4 flex items-center gap-3"><Rocket className="w-7 h-7" /> Mission</h3>
          <ul className="text-[#a0a5b8] text-base space-y-2">
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-[#4a90e2]">Develop CubeSats, CanSats, and Model Rockets</li>
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-[#4a90e2]">Provide hands-on aerospace research opportunities</li>
            <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-[#4a90e2]">Build leadership & technical skills among women engineers</li>
          </ul>
        </div>

        <div className="bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(74,144,226,0.2)] hover:border-[#4a90e2]/50">
          <h3 className="font-[family-name:--font-subheading] text-[#4a90e2] text-2xl mb-4 flex items-center gap-3"><Star className="w-7 h-7" /> Flagship Project</h3>
          <h4 className="font-[family-name:--font-heading] text-[1.8rem] my-2 text-white uppercase tracking-widest">Project KarveSat</h4>
          <p className="text-[#a0a5b8] text-base">A student-built CubeSat named after Maharshi Karve, focusing on scientific and commercial contributions to space technology.</p>
        </div>

        <div className="bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(74,144,226,0.2)] hover:border-[#4a90e2]/50">
          <h3 className="font-[family-name:--font-subheading] text-[#4a90e2] text-2xl mb-4 flex items-center gap-3"><Users className="w-7 h-7" /> Leadership</h3>
          <div className="flex justify-between gap-4 mt-4">
            <div>
              <h4 className="text-white mb-2 font-[family-name:--font-subheading]">Faculty Coordinators</h4>
              <p className="text-[#a0a5b8]">Dr. Dipti D. Patil</p>
              <p className="text-[#a0a5b8]">Dr. Seema Rajput</p>
            </div>
            <div>
              <h4 className="text-white mb-2 font-[family-name:--font-subheading]">Founders</h4>
              <p className="text-[#a0a5b8]">Prerna Burande</p>
              <p className="text-[#a0a5b8]">Kanchan Bhale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
