// import { motion } from "framer-motion";
// import { Calendar } from "lucide-react";
// import { categoryMap } from "./categoryStyles";

// export default function AchievementCard({ achievement, index }) {

//   const category = categoryMap[achievement.category];
//   const Icon = category.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: false, amount: 0.4 }}
//       transition={{ duration: 0.6, delay: index * 0.08 }}
//       className={`relative flex items-center ${
//         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//       }`}
//     >

//       {/* Timeline Dot */}
//       <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-950 z-10"></div>

//       {/* Desktop Floating Year */}
//       <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-10">
//         <div className="flex items-center gap-2 bg-gray-800/90 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
//           <Calendar size={15} className="text-blue-400" />
//           <span className="text-white font-semibold text-sm">
//             {achievement.year}
//           </span>
//         </div>
//       </div>

//       {/* Card */}
//       <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
//         index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
//       }`}>
//         <div className={`bg-gradient-to-br ${category.gradient}
//           backdrop-blur-md rounded-2xl p-6 border
//           hover:scale-105 hover:shadow-[0_0_50px_rgba(0,0,0,0.6)]
//           transition duration-300`}>

//           {/* Mobile Year */}
//           <div className="flex items-center gap-2 mb-4 md:hidden">
//             <Calendar size={16} className="text-blue-400" />
//             <span className="text-white font-semibold">
//               {achievement.year}
//             </span>
//           </div>

//           <div className="flex gap-4">
//             <Icon size={30} className={category.iconColor} />
//             <div>
//               <h3 className="text-xl font-bold text-white mb-2 leading-tight">
//                 {achievement.title}
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 {achievement.description}
//               </p>

//               <span className="inline-block mt-4 px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 capitalize">
//                 {achievement.category}
//               </span>

//             </div>
//           </div>

//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { categoryMap } from "./categoryStyles";

export default function AchievementCard({ achievement, index }) {

  const category = categoryMap[achievement.category];
  const Icon = category.icon;

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

      {/* ⭐ Glowing Timeline Node */}
      <div className="absolute left-8 md:left-1/2 -ml-2 z-20">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

          <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 blur-md opacity-70 animate-pulse"></div>
        </div>
      </div>

      {/* ⭐ Floating Year Bubble */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-12">
        <div className="flex items-center gap-2 bg-gray-900/80 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl shadow-lg">
          <Calendar size={14} className="text-blue-400" />
          <span className="text-white font-semibold text-sm tracking-wide">
            {achievement.year}
          </span>
        </div>
      </div>

      {/* ⭐ Card Wrapper */}
      <div
        className={`w-full md:w-5/12 ml-20 md:ml-0 ${
          index % 2 === 0 ? "md:mr-auto md:pr-14" : "md:ml-auto md:pl-14"
        }`}
      >
        <motion.div
          whileHover={{ y: -10 }}
          className={`group relative overflow-hidden bg-gradient-to-br ${category.gradient}
          backdrop-blur-xl rounded-3xl p-7 border ${category.border}
          transition duration-500
          hover:shadow-[0_20px_80px_rgba(0,0,0,0.7)]`}
        >

          {/* ⭐ Light Sweep Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute -left-40 top-0 w-40 h-full bg-white/10 blur-2xl rotate-12 animate-[shine_1.8s_linear]"></div>
          </div>

          {/* ⭐ Mobile Year */}
          <div className="flex items-center gap-2 mb-4 md:hidden">
            <Calendar size={16} className="text-blue-400" />
            <span className="text-white font-semibold">
              {achievement.year}
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex items-start">
              <Icon
                size={34}
                className={`${category.iconColor} group-hover:scale-110 transition duration-300`}
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                {achievement.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {achievement.description}
              </p>

              {/* ⭐ Impact Highlight */}
              {achievement.highlight && (
                <p className="mt-3 text-sm italic text-white/70">
                  {achievement.highlight}
                </p>
              )}

              {/* ⭐ Category Badge */}
              <span className="inline-block mt-5 px-4 py-1.5 text-xs rounded-full bg-white/10 text-white/80 border border-white/10 tracking-wide capitalize">
                {achievement.category}
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}