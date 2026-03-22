import { achievements } from "./achievements/achievementData";
import { Link } from "react-router-dom";

export default function AchievementsPreview() {

  const preview = achievements.slice(0, 3);

  return (
    <div className="py-24 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">
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