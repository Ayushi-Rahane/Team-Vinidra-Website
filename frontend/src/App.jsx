import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import KnowledgeHub from './components/KnowledgeHub';
import Contact from './components/Contact';
import CanvasContainer from './components/CanvasContainer';

import bg1 from './assets/background1.png';
import bg2 from './assets/background2.png';
import bgAlt from './assets/background.png';

// Shared style factory for alternating background segments
const bgSegment = (image, top, flip = false) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: '100% auto',
  backgroundPosition: flip ? 'bottom center' : 'top center',
  backgroundRepeat: 'no-repeat',
  top,
  height: '120vh',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
  maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
});


function App() {
  return (
    <div className="relative w-full bg-[#030514]">
      {/* Background 1 — full viewport hero image */}
      <div
        className="absolute top-0 left-0 w-full z-[0] pointer-events-none float-bg"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          height: '130vh',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      />

      {/* Alternating backgrounds below hero — bg2 → bgAlt → bg2 → bgAlt */}
      <div className="absolute left-0 w-full z-[0] pointer-events-none float-bg" style={bgSegment(bg2,    '100vh')} />
      <div className="absolute left-0 w-full z-[0] pointer-events-none float-bg" style={bgSegment(bgAlt, '230vh', true)} />
      <div className="absolute left-0 w-full z-[0] pointer-events-none float-bg" style={bgSegment(bg2,   '360vh')} />
      <div className="absolute left-0 w-full z-[0] pointer-events-none float-bg" style={bgSegment(bgAlt, '490vh', true)} />

      <CanvasContainer />
      <Navbar />

      <main className="relative z-[5]">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="team"><Team /></section>
        <section id="achievements"><Achievements /></section>
        <section id="gallery"><Gallery /></section>
        <section id="knowledge-hub"><KnowledgeHub /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
