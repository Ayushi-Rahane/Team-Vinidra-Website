
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { categoryMap } from "./categoryStyles";
import { useNavigate } from "react-router-dom";

export default function AchievementCard({ achievement, index }) {
  const category = categoryMap[achievement.category];
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`relative flex items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 -ml-2 z-20">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 blur-md opacity-70 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Year Bubble */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-12">
        <div className="flex items-center gap-2 bg-gray-900/80 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl shadow-lg">
          <Calendar size={14} className="text-blue-400" />
          <span className="text-white font-semibold text-sm tracking-wide">
            {achievement.year}
          </span>
        </div>
      </div>

      {/* Card Wrapper */}
      <div
        className={`w-full md:w-5/12 ml-20 md:ml-0 ${
          index % 2 === 0 ? "md:mr-auto md:pr-14" : "md:ml-auto md:pl-14"
        }`}
      >
        <motion.div
          whileHover={{ y: -8 }}
          className={`group relative overflow-hidden rounded-3xl border ${category.border}
            bg-gray-900/60 backdrop-blur-md shadow-lg transition-all duration-500 cursor-pointer`}
        >
          {/* Image */}
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-48 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
          />

          {/* Content */}
          <div className="p-6 flex flex-col gap-3">
            <h3 className="font-sans text-xl md:text-2xl font-bold text-white">
              {achievement.title}
            </h3>

            <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed">
              {achievement.shortDescription}
            </p>

            {/* See More Button */}
            <button
              onClick={() => navigate(`/achievements/${achievement.id}`)}
              className="mt-4 self-start bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600
             hover:scale-105 hover:shadow-lg font-sans
             text-white px-5 py-2.5 rounded-2xl font-semibold
             flex items-center gap-2 transition-all duration-300"
            >
              See Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
