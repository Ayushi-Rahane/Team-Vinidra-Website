import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import KnowledgeHub from "../components/KnowledgeHub";
import Contact from "../components/Contact";
import AchievementsPreview from "../components/AchievementsPreview";
import Footer from "../components/Footer";
import { SparklesCore } from "../components/ui/SparklesCore";


import bg1 from "../assets/image.png";

export default function Landing() {
  return (
    <div className="relative w-full bg-[#030514] overflow-hidden">

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

      {/* Global Moving Stars Background */}
      <div className="fixed inset-0 z-[1] w-full h-full pointer-events-none opacity-50">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={250}
          className="w-full h-full"
          particleColor="#A0A5B8"
          speed={0.5}
          fullScreen={true}
        />
      </div>

      <Navbar />

      <main className="relative z-[10]">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="team"><Team /></section>

        {/* ⭐ ONLY PREVIEW HERE */}
        <section id="achievements">
          <AchievementsPreview />
        </section>

        <section id="gallery"><Gallery /></section>
        <section id="knowledge-hub"><KnowledgeHub /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />

    </div>
  );
}