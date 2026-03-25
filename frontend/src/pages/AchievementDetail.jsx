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
      <div className="font-sans text-white text-center mt-20">
        Achievement not found
      </div>
    );

  return (
    <div className="relative min-h-screen bg-[#030514] text-white flex flex-col overflow-hidden">

      {/* Sparkles Background */}
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

      <main className="relative z-[10] flex-grow max-w-6xl mx-auto px-6 py-20 space-y-16">

        {/* Back Button */}
        <button
          onClick={() => navigate("/achievements")}
          className="flex items-center gap-2 text-white font-sans bg-gray-800/40 backdrop-blur-md hover:bg-gray-800/60 px-4 py-2 rounded-xl font-semibold transition-all duration-300"
        >
          ← Back
        </button>

        {/* Hero Section: Info Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-start"
        >
          {/* Right: Image */}
          <div className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Left: Info Panel */}
          <motion.div
            className="group relative flex-1 flex flex-col gap-4 
                       bg-gradient-to-br from-sky-400/10 via-white/5 to-transparent
                       backdrop-blur-md rounded-3xl p-8 shadow-lg
                       transition-all duration-500 hover:shadow-2xl"
          >
            {/* Hover radial glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100
                         transition duration-700
                         bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.15),transparent_60%)] rounded-3xl"
            />

            <div className="relative flex flex-col gap-3">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text uppercase mb-2">{achievement.title}</h1>

              {/* Category */}
              <span className="font-sans w-fit px-4 py-1.5 text-sm rounded-full
                 bg-white/10 text-white/80 border border-white/10
                 tracking-wide capitalize
                 hover:bg-sky-300/50 hover:text-white transition-all duration-300">
  {achievement.category}
</span>

              {/* Year / Time */}
              <span className="font-sans text-sky-400 text-sm font-semibold px-1">
  {achievement.year}
</span>

              {/* Highlight */}
              {achievement.highlight && (
                <p className="font-sans italic text-gray-300">{achievement.highlight}</p>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10
                     bg-gradient-to-br from-sky-400/10 via-white/5 to-transparent
                     hover:from-sky-400/30 hover:via-sky-400/10
                     transition-all duration-500 backdrop-blur-md p-10 shadow-lg"
        >
          {/* Hover radial effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100
                       transition duration-700
                       bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.15),transparent_60%)] rounded-3xl"
          />

          <div className="relative space-y-6 text-gray-200">

  {achievement.detailedDescription.map((para, index) => (
    <p
      key={index}
      className="font-sans text-base md:text-lg leading-relaxed"
    >
      {para}
    </p>
  ))}

  {achievement.highlight && (
    <p className="italic font-sans text-gray-300 border-l-2 border-sky-300 pl-4">
      {achievement.highlight}
    </p>
  )}

</div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}