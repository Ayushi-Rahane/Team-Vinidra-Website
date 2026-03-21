import React from 'react';

const milestones = [
  { year: '2021', title: 'Team Founded', desc: 'Team Vinidra was officially established as a satellite research group.' },
  { year: '2022', title: 'Initial Project Concept', desc: 'Began conceptualizing space engineering frameworks.' },
  { year: '2023', title: 'CanSat Competitions', desc: 'Participated in national CanSat development competitions.' },
  { year: '2024', title: 'Best Teamwork Award', desc: 'Recognized for outstanding collaborative engineering efforts in the national aerospace workshop.' },
  { year: '2025', title: 'Project KarveSat Milestones', desc: 'Development and testing phase of the flagship CubeSat.' },
];

const Achievements = () => {
  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center px-[5%] pt-24 pb-12">
      <h2 className="font-[family-name:--font-heading] text-4xl text-center mb-12 tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Achievements</h2>
      <div className="relative max-w-[800px] mx-auto py-8 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[20px] before:w-[2px] before:bg-white/10 w-full">
        {milestones.map((item, index) => (
          <div key={index} className="relative pl-[60px] mb-10 w-full">
            {/* Timeline Dot with Pulse Effect */}
            <div className="absolute left-[14px] top-[10px] w-[14px] h-[14px] rounded-full bg-[#4a90e2] shadow-[0_0_15px_rgba(74,144,226,0.6)] z-[2] before:content-[''] before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before:rounded-full before:border before:border-[#4a90e2] before:opacity-50 before:animate-[pulseSlow_2s_infinite]"></div>
            
            {/* Timeline Content */}
            <div className="relative bg-[rgba(15,20,45,0.6)] backdrop-blur-md p-6 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <span className="inline-block bg-[#4a90e2]/20 text-[#4a90e2] border border-[#4a90e2]/30 px-3 py-1 rounded-full font-[family-name:--font-heading] text-sm mb-2">
                {item.year}
              </span>
              <h3 className="font-[family-name:--font-subheading] text-[1.4rem] mb-2 text-white">{item.title}</h3>
              <p className="text-[#a0a5b8] text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
