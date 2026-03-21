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

function App() {
  return (
    <div className="relative">
      <CanvasContainer />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="knowledge-hub">
          <KnowledgeHub />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
