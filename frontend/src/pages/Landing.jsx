import { lazy, Suspense } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { SparklesCore } from "../components/ui/SparklesCore";
import useIsMobile from "../utils/useMobile";

// Lazy load below-fold components for faster initial page load
const About = lazy(() => import("../components/About"));
const Team = lazy(() => import("../components/Team"));
const Gallery = lazy(() => import("../components/Gallery"));
const Contact = lazy(() => import("../components/Contact"));
const AchievementsPreview = lazy(() => import("../components/AchievementsPreview"));
const KnowledgePreview = lazy(() => import("../components/KnowledgePreview"));
const Footer = lazy(() => import("../components/Footer"));
const FacultyCoordinator = lazy(() => import("../components/FacultyCoordinator"));


import bg1 from "../assets/image.png";

export default function Landing() {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full bg-black overflow-clip">

      {/* Backgrounds */}
      <div
        className={`absolute top-0 left-0 w-full z-[0] pointer-events-none ${isMobile ? '' : 'animate-zoom-in-out'}`}
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
      {/* On mobile: skip this entirely — the hero already has sparkles, 
          and a second full-page instance with 300 particles is wasteful */}
      {!isMobile && (
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
      )}

      <Navbar />

      <main className="relative z-[10]">
        <section id="home">
          <Hero />
        </section>
        <Suspense fallback={<div className="min-h-screen" />}>
          <section id="about"><About /></section>

          {/* Faculty Coordinator Section */}
          <section id="faculty-coordinator"><FacultyCoordinator /></section>


          <section id="team"><Team /></section>

          {/* ⭐ ONLY PREVIEW HERE */}
          <section id="achievements">
            <AchievementsPreview />
          </section>

          <section id="gallery"><Gallery /></section>
          {/* ⭐ ONLY PREVIEW HERE */}
          <section id="knowledge-hub">
            <KnowledgePreview />
          </section>

          {/* <section id="knowledge-hub"><KnowledgeHub /></section> */}
          <section id="contact"><Contact /></section>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </div>
  );
}