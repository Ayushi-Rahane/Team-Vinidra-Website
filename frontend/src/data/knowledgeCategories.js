import satellite from "../assets/knowledgeHub/1satellites.jpg";
import Engineering from "../assets/knowledgeHub/2Engineering.jpg";
import experiment from "../assets/knowledgeHub/3space_experiment.jpg";
import workshops from "../assets/knowledgeHub/4workshops.jpg";
import future from "../assets/knowledgeHub/5future.jpg";
import Astronomy from "../assets/knowledgeHub/6Astronomy.jpg";
import career from "../assets/knowledgeHub/7career.jpg";

export const categories = [
  {
    title: "Space Missions & Satellites",
    slug: "space-missions",
    image: satellite,
    description:
      "Explore historic launches, satellite systems and future deep space missions.",
  },
  {
    title: "Workshops & Learning Resources",
    slug: "workshops",
    image: workshops,
    description:
      "Learning guides, recorded sessions and technical workshops.",
  },
  {
    title: "Career & Student Opportunities",
    slug: "career",
    image: career,
    description:
      "Internships, fellowships and guidance for aerospace careers.",
  },
  {
    title: "Space News & Innovations",
    slug: "space-news",
    image: future,
    description:
      "Latest updates, innovations and breakthroughs in global space sector.",
  },
  {
    title: "Astronomy & Space Science",
    slug: "astronomy",
    image: Astronomy,
    description:
      "Cosmology, telescopes, planetary science and observational astronomy.",
  },
  {
    title: "Space Technology & Engineering",
    slug: "space-technology",
    image: Engineering,
    description:
      "Rocket propulsion, avionics, spacecraft structures and engineering design.",
  },
  {
    title: "Scientific Experiments in Space",
    slug: "space-experiments",
    image: experiment,
    description:
      "Microgravity research, payload experiments and orbital science studies.",
  }
];