import React, { useState } from 'react';

const teamData = {
  core: [
    { id: 1, name: 'Aditi Sant', role: 'Overall Lead', bio: 'Leading Team Vinidra with a focus on comprehensive aerospace engineering.', image: 'https://via.placeholder.com/150/1c2b4d/ffffff?text=Aditi' }
  ],
  subteams: [
    { id: 2, name: 'Satellite Subteam', role: 'Avionics & Payload', bio: 'Designing the brains and instruments for Project KarveSat.', image: 'https://via.placeholder.com/150/1c2b4d/ffffff?text=Satellite' },
    { id: 3, name: 'Rocketry Subteam', role: 'Propulsion & Aerodynamics', bio: 'Building and testing model rockets for high-altitude missions.', image: 'https://via.placeholder.com/150/1c2b4d/ffffff?text=Rocketry' }
  ],
  alumni: [
    { id: 4, name: 'Jane Doe', role: '2023 Lead', bio: 'Pioneered the CanSat project.', image: 'https://via.placeholder.com/150/1c2b4d/ffffff?text=Alumni' }
  ]
};

const Team = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="min-h-screen relative z-10 flex flex-col justify-center px-[5%] pt-24 pb-12">
      <h2 className="font-[family-name:--font-heading] text-4xl text-center mb-12 tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Meet The Team</h2>

      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-12">
          <h3 className="font-[family-name:--font-heading] text-white my-8 pb-2 text-2xl border-b border-white/10 w-full">Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.core.map(member => (
              <div key={member.id} className="text-center cursor-pointer p-6 bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(74,144,226,0.3)] hover:border-[#4a90e2]" onClick={() => setActiveMember(member)}>
                <img src={member.image} alt={member.name} className="w-[100px] h-[100px] rounded-full object-cover mx-auto mb-4 border-2 border-[#4a90e2]" />
                <h4 className="text-white text-lg font-bold">{member.name}</h4>
                <p className="text-[#4a90e2] text-sm font-[family-name:--font-subheading] mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-[family-name:--font-heading] text-white my-8 pb-2 text-2xl border-b border-white/10 w-full">Subteams</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.subteams.map(member => (
              <div key={member.id} className="text-center cursor-pointer p-6 bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(74,144,226,0.3)] hover:border-[#4a90e2]" onClick={() => setActiveMember(member)}>
                <div className="text-5xl mb-4">🛰️</div>
                <h4 className="text-white text-lg font-bold">{member.name}</h4>
                <p className="text-[#4a90e2] text-sm font-[family-name:--font-subheading] mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-[family-name:--font-heading] text-white my-8 pb-2 text-2xl border-b border-white/10 w-full">🏆 Hall of Fame</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.alumni.map(member => (
              <div key={member.id} className="text-center cursor-pointer p-6 bg-[rgba(15,20,45,0.6)] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(74,144,226,0.3)] hover:border-[#4a90e2]" onClick={() => setActiveMember(member)}>
                <img src={member.image} alt={member.name} className="w-[100px] h-[100px] rounded-full object-cover mx-auto mb-4 border-2 border-[#4a90e2]" />
                <h4 className="text-white text-lg font-bold">{member.name}</h4>
                <p className="text-[#4a90e2] text-sm font-[family-name:--font-subheading] mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeMember && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm z-[2000] flex items-center justify-center p-8" onClick={() => setActiveMember(null)}>
          <div className="relative max-w-[600px] w-full p-12 bg-[#0b1021] border border-[#4a90e2] shadow-[0_0_40px_rgba(74,144,226,0.4)] rounded-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-6 bg-transparent border-none text-white text-3xl cursor-pointer transition-colors duration-300 hover:text-[#4a90e2]" onClick={() => setActiveMember(null)}>×</button>
            <div className="flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left">
              {activeMember.image ? (
                <img src={activeMember.image} alt={activeMember.name} className="w-[150px] h-[150px] shrink-0 rounded-full border-[3px] border-[#4a90e2] object-cover" />
              ) : (
                <div className="text-8xl shrink-0">🚀</div>
              )}
              <div>
                <h3 className="font-[family-name:--font-heading] text-3xl text-white mb-2">{activeMember.name}</h3>
                <h4 className="text-[#4a90e2] font-[family-name:--font-subheading] mb-6 text-xl">{activeMember.role}</h4>
                <p className="text-[#a0a5b8] text-base">{activeMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
