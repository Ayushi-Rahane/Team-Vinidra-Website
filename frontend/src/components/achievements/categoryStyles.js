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