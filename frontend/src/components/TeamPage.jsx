import React, { useState, useRef, useEffect } from 'react';
import { Cpu, Radio, Zap, Satellite, Settings, Users, GitBranch, ChevronLeft } from 'lucide-react';
import { projectManager, subteams } from '../data/teamData';
import bg3 from '../assets/background3.webp';

// ── Helpers ────────────────────────────────────────────────────────────────────
const avatarUrl = (name) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=050a15&textColor=a0c4ff&fontSize=36&radius=50`;

const Avatar = ({ name, image, size = 64, className = '' }) => (
  <img
    src={image || avatarUrl(name)}
    alt={name}
    width={size}
    height={size}
    className={`rounded-full object-cover ${className}`}
    style={{ width: size, height: size, minWidth: size }}
  />
);

const subteamIcons = {
  adcs: Satellite,
  st: GitBranch,
  admin: Settings,
  payload: Cpu,
  obc: Radio,
  ttc: Radio,
  power: Zap,
};

// Radial positions for nodes (degrees)
const NODE_ANGLES = [-90, -38, 25, 81, 141, 198, 257];

function polarToPercent(angle, rx, ry) {
  const rad = (angle * Math.PI) / 180;
  return { x: 50 + rx * Math.cos(rad), y: 50 + ry * Math.sin(rad) };
}

// ── Animated star canvas ───────────────────────────────────────────────────────
const StarCanvas = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const w = canvas.parentElement.offsetWidth || window.innerWidth;
    const h = canvas.parentElement.offsetHeight || window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2, o: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.4 + 0.1, phase: Math.random() * Math.PI * 2,
    }));
    let frame, t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.01;
      stars.forEach((s) => {
        const opacity = s.o * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${opacity})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
};

// ── Orbit ring SVG ─────────────────────────────────────────────────────────────
const OrbitRings = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 2 }}>
    <ellipse cx="500" cy="500" rx="360" ry="295" fill="none" stroke="rgba(100,180,255,0.12)" strokeWidth="1" strokeDasharray="6 10" />
    <ellipse cx="500" cy="500" rx="200" ry="160" fill="none" stroke="rgba(100,180,255,0.07)" strokeWidth="1.5" strokeDasharray="3 8" />
    <line x1="488" y1="478" x2="512" y2="478" stroke="rgba(100,180,255,0.25)" strokeWidth="1" />
    <line x1="488" y1="522" x2="512" y2="522" stroke="rgba(100,180,255,0.25)" strokeWidth="1" />
    <line x1="478" y1="488" x2="478" y2="512" stroke="rgba(100,180,255,0.25)" strokeWidth="1" />
    <line x1="522" y1="488" x2="522" y2="512" stroke="rgba(100,180,255,0.25)" strokeWidth="1" />
    {[0, 51.4, 102.8, 154.3, 205.7, 257.1, 308.6].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      return <circle key={i} cx={500 + 360 * Math.cos(rad)} cy={500 + 295 * Math.sin(rad)} r="3.5" fill="rgba(100,180,255,0.45)" />;
    })}
  </svg>
);

// ── Sub-team orbit node ────────────────────────────────────────────────────────
const SubteamNode = ({ subteam, index, isSelected, onClick }) => {
  const Icon = subteamIcons[subteam.id] || Users;
  const totalMembers = subteam.members.length + 1 + (subteam.deputy ? 1 : 0);
  const { x, y } = polarToPercent(NODE_ANGLES[index], 38, 30);
  return (
    <button onClick={onClick} className="absolute transform -translate-x-1/2 -translate-y-1/2 group" style={{ left: `${x}%`, top: `${y}%`, zIndex: 10 }}>
      <div className={`relative w-36 md:w-44 rounded-2xl p-4 text-left backdrop-blur-md transition-all duration-500 cursor-pointer border ${isSelected ? 'bg-[rgba(10,40,90,0.88)] border-[rgba(100,180,255,0.8)] shadow-[0_0_30px_rgba(100,180,255,0.45),0_0_70px_rgba(50,100,200,0.2)] scale-110' : 'bg-[rgba(5,15,35,0.75)] border-[rgba(100,180,255,0.2)] hover:border-[rgba(100,180,255,0.55)] hover:shadow-[0_0_22px_rgba(100,180,255,0.3)] hover:scale-105'}`}>
        <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[rgba(100,180,255,0.5)]" />
        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[rgba(100,180,255,0.5)]" />
        <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[rgba(100,180,255,0.5)]" />
        <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[rgba(100,180,255,0.5)]" />
        <Icon className={`w-5 h-5 mb-2 transition-colors ${isSelected ? 'text-[#60c0ff]' : 'text-[#4a90e2]/70 group-hover:text-[#60c0ff]'}`} />
        <p className={`font-[family-name:--font-heading] text-sm font-bold tracking-wider ${isSelected ? 'text-white' : 'text-white/80'}`}>{subteam.label}</p>
        <p className={`text-[9px] mt-0.5 leading-tight ${isSelected ? 'text-[#60c0ff]' : 'text-[#4a90e2]/55'}`}>{subteam.fullName}</p>
        <p className="text-white/30 text-[9px] mt-1.5">{totalMembers} Members</p>
        {isSelected && <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#60c0ff] shadow-[0_0_8px_rgba(100,200,255,0.9)]" />}
      </div>
    </button>
  );
};

// ── Central PM node ────────────────────────────────────────────────────────────
const PMNode = ({ dimmed }) => (
  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${dimmed ? 'scale-90 opacity-50' : 'scale-100 opacity-100'}`}>
    <div className="absolute inset-0 rounded-full border border-[rgba(100,180,255,0.18)] animate-ping" style={{ animationDuration: '3s' }} />
    <div className="absolute -inset-3 rounded-full border border-[rgba(100,180,255,0.08)]" style={{ animation: 'spin 20s linear infinite' }} />
    <div className="relative w-52 md:w-64 rounded-2xl p-5 bg-[rgba(3,12,40,0.92)] backdrop-blur-xl border border-[rgba(100,180,255,0.3)] shadow-[0_0_50px_rgba(50,100,200,0.35),0_0_100px_rgba(30,60,150,0.15)] text-center">
      {['top-2 left-2 border-t border-l', 'top-2 right-2 border-t border-r', 'bottom-2 left-2 border-b border-l', 'bottom-2 right-2 border-b border-r'].map((cls, i) => (
        <span key={i} className={`absolute w-3 h-3 ${cls} border-[rgba(100,180,255,0.5)]`} />
      ))}
      <div className="relative mx-auto mb-3" style={{ width: 84, height: 84 }}>
        <div className="absolute inset-0 rounded-full border border-[rgba(100,180,255,0.3)] animate-spin" style={{ animationDuration: '9s' }} />
        <Avatar name={projectManager.name} image={projectManager.image} size={84} className="border-2 border-[rgba(100,180,255,0.45)] shadow-[0_0_22px_rgba(100,180,255,0.3)]" />
      </div>
      <h2 className="font-[family-name:--font-heading] text-lg text-white font-bold tracking-wider">{projectManager.name}</h2>
      <p className="text-[#60c0ff] text-[10px] tracking-widest uppercase mt-1">{projectManager.role}</p>
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(100,180,255,0.35)] to-transparent my-2" />
      <p className="text-white/40 text-[10px]">Lead · · {projectManager.classYear}</p>
    </div>
  </div>
);

// ── Member card ────────────────────────────────────────────────────────────────
const MemberCard = ({ member, index, isLead = false }) => (
  <div
    className="card-glow bg-[rgba(3,12,35,0.88)] backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center gap-2 card-float"
    style={{ animationDelay: `${(index % 6) * 0.5}s` }}
  >
    <Avatar name={member.name} image={member.image} size={isLead ? 84 : 62}
      className={`border-2 ${isLead ? 'border-[rgba(100,180,255,0.55)] shadow-[0_0_16px_rgba(100,180,255,0.3)]' : 'border-white/15'}`} />
    {isLead && <span className="text-[#60c0ff] text-[9px] tracking-[0.25em] uppercase font-[family-name:--font-heading]">{member.role}</span>}
    <p className="text-white text-sm font-semibold leading-tight">{member.name}</p>
    {!isLead && <p className="text-[#60c0ff] text-[10px]">{member.role}</p>}
    <p className="text-white/35 text-[10px]">{member.classYear}</p>
  </div>
);

// ── Admin sub-groups ───────────────────────────────────────────────────────────
const AdminGroup = ({ title, members }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(100,180,255,0.3)]" />
      <span className="text-[#60c0ff] text-[9px] tracking-[0.35em] uppercase font-[family-name:--font-heading]">{title}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(100,180,255,0.3)]" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {members.map((m, i) => <MemberCard key={m.name} member={m} index={i} />)}
    </div>
  </div>
);

// ── Sub-team detail panel ──────────────────────────────────────────────────────
const SubteamPanel = ({ subteam, onClose }) => {
  const isAdmin = subteam.id === 'admin';
  const groups = {};
  if (isAdmin) subteam.members.forEach(m => { if (!groups[m.role]) groups[m.role] = []; groups[m.role].push(m); });

  return (
    <div className="w-full animate-[fadeIn_0.4s_ease-out_forwards]">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onClose} className="flex items-center gap-2 text-[#60c0ff]/60 hover:text-[#60c0ff] text-xs font-[family-name:--font-heading] tracking-widest uppercase transition-colors border border-[rgba(100,180,255,0.2)] hover:border-[rgba(100,180,255,0.55)] rounded-full px-4 py-2">
          <ChevronLeft className="w-3 h-3" /> Back to Overview
        </button>
        <div className="h-px flex-1 bg-gradient-to-r from-[rgba(100,180,255,0.3)] to-transparent" />
      </div>
      <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text uppercase mb-1">{subteam.label}</h2>
      <p className="text-[#60c0ff] text-sm mb-1">{subteam.fullName}</p>
      <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-2xl">{subteam.description}</p>
      <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase font-[family-name:--font-heading] mb-4">Leadership</p>
      <div className="flex flex-wrap gap-5 mb-12">
        <MemberCard member={subteam.coordinator} index={0} isLead />
        {subteam.deputy && <MemberCard member={subteam.deputy} index={1} isLead />}
      </div>
      {isAdmin ? (
        <>
          <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase font-[family-name:--font-heading] mb-5">Departments</p>
          {Object.entries(groups).map(([title, mems]) => <AdminGroup key={title} title={title} members={mems} />)}
        </>
      ) : (
        <>
          <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase font-[family-name:--font-heading] mb-4">Members</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {subteam.members.map((m, i) => <MemberCard key={m.name} member={m} index={i} />)}
          </div>
        </>
      )}
    </div>
  );
};

// ── Main TeamPage ──────────────────────────────────────────────────────────────
const TeamPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const selectedSubteam = subteams.find(s => s.id === selectedId);

  const handleNodeClick = (id) => {
    if (selectedId === id && !showPanel) { setShowPanel(true); }
    else { setSelectedId(id); setShowPanel(false); }
  };

  const handleBack = () => {
    setShowPanel(false);
    setTimeout(() => setSelectedId(null), 300);
  };

  return (
    <div className="relative text-white overflow-x-hidden">
      {/* ── Single masked background wrapper — fades top & bottom together ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          maskImage:        'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        <div className="absolute inset-0 bg-[rgba(1,4,18,0.65)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(30,60,150,0.22)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(80,0,120,0.15)_0%,transparent_70%)]" />
      </div>

      {/* content */}
      <div className="relative z-10">
        {/* OVERVIEW — Orbital */}
        {!showPanel && (
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text text-center uppercase mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Team Structure</h2>
            <p className="text-[#60c0ff]/50 text-xs tracking-widest mb-8 text-center font-[family-name:--font-subheading]">
              {selectedId ? `${selectedSubteam?.label} selected — click again or use button below` : 'Select a sub-system to explore'}
            </p>
            <div className="relative w-full max-w-4xl" style={{ paddingBottom: '84%' }}>
              <StarCanvas />
              <OrbitRings />
              {subteams.map((st, i) => (
                <SubteamNode key={st.id} subteam={st} index={i} isSelected={selectedId === st.id} onClick={() => handleNodeClick(st.id)} />
              ))}
              <PMNode dimmed={!!selectedId} />
            </div>
            {selectedId && (
              <button onClick={() => setShowPanel(true)} className="mt-6 btn-space-extra px-10 py-3 text-sm font-[family-name:--font-heading] font-bold tracking-[0.2em] uppercase text-white rounded-xl">
                <span>Explore {selectedSubteam?.label} →</span>
              </button>
            )}
          </div>
        )}

        {/* DETAIL — Sub-team panel */}
        {showPanel && selectedSubteam && (
          <div className="px-6 lg:px-[6%] py-16 max-w-[1400px] mx-auto">
            <SubteamPanel subteam={selectedSubteam} onClose={handleBack} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
