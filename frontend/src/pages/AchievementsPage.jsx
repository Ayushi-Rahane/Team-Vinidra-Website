import Navbar from "../components/Navbar";
import AchievementTimeline from "../components/achievements/AchievementTimeline";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { SparklesCore } from "../components/ui/SparklesCore";

export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent overflow-hidden">

      {/* Sparkles Background (lighter on mobile) */}
      <div
        className="absolute left-0 w-full z-[0] pointer-events-none opacity-40 md:opacity-50"
        style={{ top: 0, bottom: 0, minHeight: "100vh" }}
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={window.innerWidth < 768 ? 120 : 300} // 👈 reduce lag on mobile
          className="w-full h-full"
          particleColors={["#FFFFFF", "#FACC15", "#38BDF8"]}
          speed={0.6} // smoother on mobile
          fullScreen={true}
        />
      </div>

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="relative z-[10] flex-grow pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative text-center mb-12 sm:mb-16 md:mb-20"
          >
            {/* Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
              <div className="w-[200px] sm:w-[300px] h-[100px] sm:h-[120px] bg-sky-400/10 blur-3xl rounded-full" />
            </div>

            {/* Title */}
            <h1 className="relative text-2xl sm:text-3xl md:text-5xl font-thin tracking-[0.2em] sm:tracking-[0.3em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text uppercase mb-3 sm:mb-4">
              ACHIEVEMENTS
            </h1>

            {/* Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70px", opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-3 sm:mt-4"
            />

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-md sm:max-w-xl mx-auto leading-relaxed px-2">
              A timeline of our milestones, competitions and recognitions in aerospace innovation.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="px-1 sm:px-0">
            <AchievementTimeline />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}