import Navbar from "../components/Navbar";
import AchievementTimeline from "../components/achievements/AchievementTimeline";
import AchievementStats from "../components/achievements/AchievementStats";
import { Trophy } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { SparklesCore } from "../components/ui/SparklesCore"; // import sparkles


export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent">

      <div
  className="absolute left-0 w-full z-[0] pointer-events-none opacity-50"
  style={{ top: 0, bottom: 0, minHeight: '100vh' }}
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

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="relative z-[10] flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="relative text-center mb-20"
>

  {/* Soft Glow */}
  <div className="absolute inset-0 flex justify-center pointer-events-none">
    <div className="w-[300px] h-[120px] bg-sky-400/10 blur-3xl rounded-full" />
  </div>

  {/* Title */}
  <h1 className="relative text-4xl md:text-5xl font-light tracking-[0.14em]
     bg-gradient-to-r from-white via-sky-300 to-white
     text-transparent bg-clip-text">

    ACHIEVEMENTS

  </h1>

  {/* Animated Line */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "90px", opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.7 }}
    className="h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-4"
  />

  {/* Subtitle */}
  <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
    A timeline of our milestones, competitions and recognitions in aerospace innovation.
  </p>

</motion.div>

          {/* Timeline */}
          <AchievementTimeline />

          {/* Stats */}
          <AchievementStats />

        </div>
      </main>

      <Footer />

    </div>
  );
}