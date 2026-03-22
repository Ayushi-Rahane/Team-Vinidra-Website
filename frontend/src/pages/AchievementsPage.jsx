import Navbar from "../components/Navbar";
import AchievementTimeline from "../components/achievements/AchievementTimeline";
import AchievementStats from "../components/achievements/AchievementStats";
import { Trophy } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function AchievementsPage() {

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-28 pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <div className="flex justify-center items-center gap-3 mb-4">
              <Trophy className="text-yellow-400" size={42} />
              <h1 className="text-5xl font-bold text-white">
                Achievements
              </h1>
            </div>

            <div className="w-28 h-[3px] bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6 rounded-full"></div>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our journey of milestones, competitions and recognition in space research.
            </p>
          </motion.div>

          <AchievementTimeline />
          <AchievementStats />

        </div>

      </main>

      {/* FOOTER OUTSIDE */}
      <Footer />

    </div>
  );
}