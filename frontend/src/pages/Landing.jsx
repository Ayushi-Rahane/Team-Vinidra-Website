import { lazy, Suspense } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { SparklesCore } from "../components/ui/SparklesCore";
import LiquidEther from "../components/ui/LiquidEther";

// Lazy load below-fold components for faster initial page load
const About = lazy(() => import("../components/About"));
const Team = lazy(() => import("../components/Team"));
const Gallery = lazy(() => import("../components/Gallery"));
const KnowledgeHub = lazy(() => import("../components/KnowledgeHub"));
const Contact = lazy(() => import("../components/Contact"));
const AchievementsPreview = lazy(() => import("../components/AchievementsPreview"));
const Footer = lazy(() => import("../components/Footer"));

import bg1 from "../assets/image.png";

export default function Landing() {
  return (
    <div className="relative w-full bg-black overflow-hidden">

      {/* Backgrounds */}
      <div
        className="absolute top-0 left-0 w-full z-[0] pointer-events-none animate-zoom-in-out"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          height: "110vh",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />

      {/* Global Moving Stars Background — starts BELOW the hero section */}
      <div
        className="absolute left-0 w-full z-[1] pointer-events-none opacity-50"
        style={{ top: '100vh', bottom: 0, minHeight: '100vh' }}
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={300}
          className="w-full h-full"
          particleColors={["#FFFFFF", "#FACC15", "#38BDF8"]}
          speed={1}
          fullScreen={true}
        />
      </div>

      {/* Liquid Ether Effect — starts BELOW the hero section */}
      <div
        className="absolute left-0 w-full z-[1] opacity-60"
        style={{ top: '100vh', height: '100%', minHeight: '500vh', pointerEvents: 'auto' }}
      >
        <LiquidEther
          colors={['#1ea2ef', '#0d5dfc', '#18b5ea']}
          mouseForce={45}
          cursorSize={50}
          isViscous
          viscous={15}
          iterationsViscous={4}
          iterationsPoisson={8}
          resolution={0.2}
          isBounce={false}
          autoDemo
          autoSpeed={0.7}
          autoIntensity={2.8}
          takeoverDuration={0.08}
          autoResumeDelay={1000}
          autoRampDuration={0.3}
        />
      </div>

      <Navbar />

      <main className="relative z-[10]">
        <section id="home">
          <Hero />
        </section>
        <Suspense fallback={<div className="min-h-screen" />}>
          <section id="about"><About /></section>
          <section id="team"><Team /></section>

          {/* ⭐ ONLY PREVIEW HERE */}
          <section id="achievements">
            <AchievementsPreview />
          </section>

          <section id="gallery"><Gallery /></section>
          <section id="knowledge-hub"><KnowledgeHub /></section>
          <section id="contact"><Contact /></section>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </div>
  );
}