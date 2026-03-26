// import { achievements } from "./achievements/achievementData";
// import { Link } from "react-router-dom";
// import { Trophy } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContinuousTimelinePreview() {
//   const previewAchievements = achievements; // Use all or slice as needed

//   return (
//     <section className="relative py-28 px-[8%] text-white overflow-hidden bg-transparent">

//       {/* SECTION TITLE */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false, amount: 0.6 }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em]
//           bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text">
//           ACHIEVEMENTS
//         </h2>
//         <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-4" />
//         <p className="text-gray-400 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
//           A glimpse of our milestones and innovations over the years.
//         </p>
//       </motion.div>

//       {/* CONTINUOUS SCROLLING TIMELINE */}
//       <div className="relative w-full overflow-hidden">
//         <motion.div
//           className="flex gap-16 min-w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//         >
//           {/* Duplicate items for seamless loop */}
//           {[...previewAchievements, ...previewAchievements].map((achieve, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.08, y: -8 }}
//               className="flex flex-col items-center min-w-[240px] cursor-pointer"
//             >
//               {/* Milestone Dot */}
//               <div className="w-6 h-6 rounded-full bg-sky-400 mb-5 relative">
//                 <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-sky-400 via-white to-sky-400 animate-pulse" />
//               </div>

//               {/* Achievement Card */}
//               <div className="group relative overflow-hidden rounded-3xl border border-white/15
//                 bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
//                 backdrop-blur-md p-6 text-center shadow-2xl transition-all duration-500
//                 hover:from-sky-400/30 hover:via-sky-400/10 w-full"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100
//                   transition duration-700
//                   bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.15),transparent_60%)]" />
//                 <Trophy className="mx-auto text-sky-300 w-8 h-8 mb-2" />
//                 <h4 className="font-semibold text-white/90 text-sm">{achieve.title}</h4>
//                 <p className="text-xs text-gray-400">{achieve.year}</p>
//                 <p className="text-[13px] text-white/80 mt-2 line-clamp-3">{achieve.shortDescription}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* CTA BUTTON */}
//       <div className="mt-12 text-center">
//         <Link
//           to="/achievements"
//           className="inline-block bg-gradient-to-r from-sky-400 to-sky-300 px-6 py-3 rounded-2xl text-white font-medium shadow-lg hover:scale-105 transition-all duration-500"
//         >
//           See All Achievements
//         </Link>
//       </div>
//     </section>
//   );
// }


import { achievements } from "./achievements/achievementData";
import { Link } from "react-router-dom";

export default function AchievementsPreview() {

  const preview = achievements.slice(0, 3);

  return (
    <div className="py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text text-center mb-12 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        Achievements
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {preview.map((a) => (
          <div
            key={a.id}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-white font-semibold mb-2">
              {a.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {a.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/achievements"
        className="inline-block mt-12 px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
      >
        Explore More
      </Link>
    </div>
  );
}