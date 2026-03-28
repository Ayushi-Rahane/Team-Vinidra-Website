import { motion } from "framer-motion";
import { Trophy, Calendar, Award, Newspaper } from "lucide-react";
import { achievements } from "./achievementData";

export default function AchievementStats() {

  const years = new Set(achievements.map(a => a.year)).size;
  const awards = achievements.filter(a => a.category === "competition").length;
  const projects = achievements.filter(a => a.category === "project").length;
  const media = achievements.filter(a => a.category === "media").length;

  const stats = [
    {
      label: "Years Active",
      value: `${years}+`,
      icon: Calendar,
      glow: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400"
    },
    {
      label: "Awards Won",
      value: `${awards}+`,
      icon: Trophy,
      glow: "from-yellow-500/20 to-yellow-500/5",
      iconColor: "text-yellow-400"
    },
    {
      label: "Projects Completed",
      value: `${projects}+`,
      icon: Award,
      glow: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400"
    },
    {
      label: "Media Features",
      value: `${media}+`,
      icon: Newspaper,
      glow: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-400"
    },
  ];

  return (
    <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="relative group rounded-3xl overflow-hidden"
          >

            {/* Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition duration-500`} />

            {/* Card */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 text-center transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.12)]">

              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-4"
              >
                <Icon className={`mx-auto ${stat.iconColor}`} size={32} />
              </motion.div>

              {/* Number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight"
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <div className="text-gray-400 text-sm uppercase tracking-widest">
                {stat.label}
              </div>

            </div>

          </motion.div>
        );
      })}
    </div>
  );
}