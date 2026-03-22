// import { Trophy, Award, Newspaper } from "lucide-react";

// export const categoryMap = {
//   competition: {
//     gradient: "from-yellow-900/30 to-orange-900/30 border-yellow-700/50",
//     icon: Trophy,
//     iconColor: "text-yellow-400",
//   },
//   project: {
//     gradient: "from-blue-900/30 to-cyan-900/30 border-blue-700/50",
//     icon: Award,
//     iconColor: "text-blue-400",
//   },
//   media: {
//     gradient: "from-purple-900/30 to-pink-900/30 border-purple-700/50",
//     icon: Newspaper,
//     iconColor: "text-purple-400",
//   },
//   milestone: {
//     gradient: "from-green-900/30 to-emerald-900/30 border-green-700/50",
//     icon: Award,
//     iconColor: "text-green-400",
//   },
// };

import { Trophy, Rocket, Newspaper } from "lucide-react";

export const categoryMap = {
  competition: {
    icon: Trophy,
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    iconColor: "text-yellow-400",
    border: "border-yellow-400/20",
  },
  project: {
    icon: Rocket,
    gradient: "from-purple-500/20 via-blue-500/10 to-transparent",
    iconColor: "text-purple-400",
    border: "border-purple-400/20",
  },
  media: {
    icon: Newspaper,
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    iconColor: "text-green-400",
    border: "border-green-400/20",
  },
};