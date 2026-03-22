import AchievementCard from "./AchievementCard";
import { achievements } from "./achievementData";

export default function AchievementTimeline() {
  return (
    <div className="relative space-y-12">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

      {achievements.map((ach, index) => (
        <AchievementCard key={ach.id} achievement={ach} index={index} />
      ))}
    </div>
  );
}