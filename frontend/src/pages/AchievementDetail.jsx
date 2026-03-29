import { useParams, useNavigate } from "react-router-dom";
import { achievements } from "../components/achievements/achievementData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SparklesCore } from "../components/ui/SparklesCore";

export default function AchievementDetail() {
  const { id } = useParams();
  const achievement = achievements.find(a => a.id === parseInt(id));
  const navigate = useNavigate();

  if (!achievement)
    return (
      <div className="text-white text-center mt-20">Not found</div>
    );

  return (
    <div className="relative min-h-screen bg-[#030514] text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={180}
          className="w-full h-full"
          particleColors={["#FFFFFF", "#38BDF8", "#FACC15"]}
          speed={0.6}
          fullScreen={true}
        />
      </div>

      <Navbar />

      {/* HEADER */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20">

        {/* BACK BUTTON */}
        <motion.button
          onClick={() => navigate("/achievements")}
          whileHover={{ scale: 1.05, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6 sm:mb-10 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 w-fit
                     rounded-full bg-white/5 border border-white/10
                     backdrop-blur-md text-gray-300 hover:text-white
                     hover:border-sky-400/40 transition-all duration-300 text-sm sm:text-base"
        >
          ← Back to Achievement
        </motion.button>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-white"
        >
          {achievement.title}
        </motion.h1>

        {/* META */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400"
        >
          <span className="capitalize">{achievement.category}</span>
          <span className="text-gray-600">•</span>
          <span>{achievement.year}</span>
        </motion.div>
      </section>

      {/* IMAGE */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-white/10 shadow-md"
        >
          <motion.img
            src={achievement.image}
            alt=""
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full h-[180px] sm:h-[240px] md:h-[320px] object-cover"
          />
        </motion.div>
      </section>

      {/* CONTENT CARD */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="p-5 sm:p-8 md:p-10 rounded-2xl 
                     bg-white/5 backdrop-blur-xl border border-white/10
                     shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        >

          {achievement.highlight && (
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {achievement.highlight}
            </p>
          )}

          <div className="space-y-4 sm:space-y-6">
            {achievement.detailedDescription.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 3 }}
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
