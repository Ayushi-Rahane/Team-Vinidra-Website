import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import KnowledgeHub from "../components/KnowledgeHub";
import Contact from "../components/Contact";
import CanvasContainer from "../components/CanvasContainer";
import AchievementsPreview from "../components/AchievementsPreview";
import Footer from "../components/Footer";


import bg1 from "../assets/background1.webp";
import bg2 from "../assets/background2.webp";
import bgAlt from "../assets/background.webp";

const bgSegment = (image, top, flip = false) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "100% auto",
  backgroundPosition: flip ? "bottom center" : "top center",
  backgroundRepeat: "no-repeat",
  top,
  height: "120vh",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
});

export default function Landing() {
  return (
    <div className="relative w-full bg-[#030514] overflow-hidden">
      
      {/* Backgrounds */}
      <div
        className="absolute top-0 left-0 w-full z-[0] pointer-events-none float-bg"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          height: "130vh",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />

      <div
        className="absolute left-0 w-full z-[0] pointer-events-none float-bg"
        style={bgSegment(bg2, "100vh")}
      />
      <div
        className="absolute left-0 w-full z-[0] pointer-events-none float-bg"
        style={bgSegment(bgAlt, "230vh", true)}
      />
      <div
        className="absolute left-0 w-full z-[0] pointer-events-none float-bg"
        style={bgSegment(bg2, "360vh")}
      />
      <div
        className="absolute left-0 w-full z-[0] pointer-events-none float-bg"
        style={bgSegment(bgAlt, "490vh", true)}
      />

      <CanvasContainer />
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