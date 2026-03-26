import chandrayaan from "../assets/blogImages/1chandrayaan.jpg";
import mars from "../assets/blogImages/2mars.jpg";
import satelliteBus from "../assets/blogImages/3satelliteBus.jpg";
import orbit from "../assets/blogImages/4orbit.jpg";

import workshopRocket from "../assets/blogImages/13workshopRocket.jpg";
import integration from "../assets/blogImages/14integration.jpg";
import orbital from "../assets/blogImages/15orbital.jpg";

import reusable from "../assets/blogImages/16reusable.jpg";
import telescope from "../assets/blogImages/17telescope.jpg";
import privateImg from "../assets/blogImages/18private.jpg";

import blackhole from "../assets/blogImages/19blackhole.jpg";
import observe from "../assets/blogImages/20observe.jpg";
import stars from "../assets/blogImages/21stars.jpg";

import career from "../assets/blogImages/22career.jpg";
import internship from "../assets/blogImages/23internship.jpg";
import skills from "../assets/blogImages/24skills.jpg";

export const blogs = [

  /* ================= SPACE MISSIONS ================= */
  {
    id: 1,
    title: "Chandrayaan-3 Landing Mission",
    category: "space-missions",
    image: chandrayaan,
    readTime: "6 min",
    date: "Jan 2025",
    popular: true,
    latest: true,
    level: "beginner",
    tag: "Moon",
    content: [
      { type: "paragraph", text: "Chandrayaan-3 is India's third lunar mission aimed at exploring the Moon's south pole." },
      { type: "paragraph", text: "It successfully landed in 2025, demonstrating India's precision landing capabilities." },
      { type: "blockquote", text: "This mission showcases India's growing space technology prowess." },
      { type: "heading", text: "Mission Objectives" },
      { type: "paragraph", text: "The mission focused on soft landing, rover deployment, and scientific data collection." },
      { type: "image", src: chandrayaan, alt: "Chandrayaan-3 Landing" }
    ]
  },
  {
    id: 2,
    title: "Mars Orbiter Mission Success Story",
    category: "space-missions",
    image: mars,
    readTime: "8 min",
    date: "Dec 2025",
    popular: true,
    latest: false,
    level: "intermediate",
    tag: "Mars",
    content: [
      { type: "paragraph", text: "Mars Orbiter Mission (MOM) was India's first interplanetary mission to Mars." },
      { type: "paragraph", text: "It provided valuable insights into the Martian atmosphere and surface composition." },
      { type: "blockquote", text: "MOM proved that cost-effective space exploration is possible." },
      { type: "heading", text: "Achievements" },
      { type: "paragraph", text: "MOM entered Mars orbit on the first attempt and continues to send data to Earth." },
      { type: "image", src: mars, alt: "Mars Orbiter" }
    ]
  },
  {
    id: 3,
    title: "Satellite Bus Architecture Explained",
    category: "space-missions",
    image: satelliteBus,
    readTime: "5 min",
    date: "Nov 2024",
    popular: false,
    latest: false,
    level: "beginner",
    tag: "Satellite",
    content: [
      { type: "paragraph", text: "A satellite bus is the main structure that supports all satellite components." },
      { type: "paragraph", text: "It includes power, propulsion, communication, and thermal control systems." },
      { type: "blockquote", text: "Understanding the bus architecture is key to satellite design." },
      { type: "heading", text: "Key Components" },
      { type: "paragraph", text: "Modern satellite buses are modular and can support multiple payloads." },
      { type: "image", src: satelliteBus, alt: "Satellite Bus" }
    ]
  },
  {
    id: 4,
    title: "Low Earth Orbit vs Geostationary Orbit",
    category: "space-missions",
    image: orbit,
    readTime: "7 min",
    date: "Oct 2024",
    popular: false,
    latest: false,
    level: "beginner",
    tag: "Orbit",
    content: [
      { type: "paragraph", text: "Low Earth Orbit (LEO) and Geostationary Orbit (GEO) serve different purposes." },
      { type: "paragraph", text: "LEO is closer to Earth, ideal for imaging and communication satellites." },
      { type: "blockquote", text: "Orbit choice impacts satellite performance and coverage." },
      { type: "heading", text: "Comparison" },
      { type: "paragraph", text: "GEO satellites stay fixed relative to Earth, perfect for TV and weather monitoring." },
      { type: "image", src: orbit, alt: "LEO vs GEO Orbit" }
    ]
  },

  /* ================= WORKSHOPS ================= */
  {
    id: 13,
    title: "Rocket Design Workshop Summary",
    category: "workshops",
    image: workshopRocket,
    readTime: "4 min",
    date: "Feb 2025",
    popular: true,
    latest: true,
    level: "beginner",
    tag: "Workshop",
    content: [
      { type: "paragraph", text: "This workshop covered basic rocket design principles and safety protocols." },
      { type: "paragraph", text: "Students built model rockets and learned about aerodynamics and propulsion." },
      { type: "blockquote", text: "Hands-on experience is crucial to understanding rocket science." },
      { type: "heading", text: "Workshop Highlights" },
      { type: "paragraph", text: "Key topics included stability, thrust, and payload integration." },
      { type: "image", src: workshopRocket, alt: "Rocket Workshop" }
    ]
  },
  {
    id: 14,
    title: "Satellite Integration Hands-On",
    category: "workshops",
    image: integration,
    readTime: "5 min",
    date: "Jan 2025",
    popular: false,
    latest: false,
    level: "intermediate",
    tag: "Training",
    content: [
      { type: "paragraph", text: "Participants learned how to assemble and integrate satellite components." },
      { type: "paragraph", text: "Integration ensures all subsystems function together seamlessly." },
      { type: "blockquote", text: "Precision is key during satellite assembly." },
      { type: "heading", text: "Training Outcomes" },
      { type: "paragraph", text: "Students gained practical experience in testing and verification." },
      { type: "image", src: integration, alt: "Satellite Integration" }
    ]
  },
  {
    id: 15,
    title: "Orbital Mechanics Lecture Notes",
    category: "workshops",
    image: orbital,
    readTime: "6 min",
    date: "Dec 2024",
    popular: false,
    latest: false,
    level: "advanced",
    tag: "Lecture",
    content: [
      { type: "paragraph", text: "Orbital mechanics governs the motion of satellites and spacecraft." },
      { type: "paragraph", text: "Understanding orbits is fundamental for mission planning." },
      { type: "blockquote", text: "Precise calculations prevent mission failures." },
      { type: "heading", text: "Lecture Topics" },
      { type: "paragraph", text: "Covered Kepler's laws, transfer orbits, and rendezvous techniques." },
      { type: "image", src: orbital, alt: "Orbital Mechanics" }
    ]
  },

  /* ================= SPACE NEWS ================= */
  {
    id: 16,
    title: "Reusable Rockets Changing Space Industry",
    category: "space-news",
    image: reusable,
    readTime: "5 min",
    date: "Feb 2025",
    popular: true,
    latest: true,
    level: "beginner",
    tag: "Innovation",
    content: [
      { type: "paragraph", text: "Reusable rockets are transforming space launch economics." },
      { type: "paragraph", text: "They reduce costs and increase launch frequency." },
      { type: "blockquote", text: "Reusability is the future of spaceflight." },
      { type: "heading", text: "Impact on Industry" },
      { type: "paragraph", text: "Companies like SpaceX are leading the charge with reusable launchers." },
      { type: "image", src: reusable, alt: "Reusable Rocket" }
    ]
  },
  {
    id: 17,
    title: "New Deep Space Telescope Announced",
    category: "space-news",
    image: telescope,
    readTime: "4 min",
    date: "Jan 2025",
    popular: false,
    latest: true,
    level: "beginner",
    tag: "Telescope",
    content: [
      { type: "paragraph", text: "A new deep space telescope will provide unprecedented views of distant galaxies." },
      { type: "paragraph", text: "It aims to study cosmic formation and dark matter distribution." },
      { type: "blockquote", text: "The telescope will revolutionize astronomy research." },
      { type: "heading", text: "Key Features" },
      { type: "paragraph", text: "Advanced imaging and spectroscopy tools are included." },
      { type: "image", src: telescope, alt: "Deep Space Telescope" }
    ]
  },

  /* ================= ASTRONOMY ================= */
  {
    id: 19,
    title: "Understanding Black Holes",
    category: "astronomy",
    image: blackhole,
    readTime: "7 min",
    date: "Jan 2025",
    popular: true,
    latest: false,
    level: "intermediate",
    tag: "Cosmology",
    content: [
      { type: "paragraph", text: "Black holes are regions of spacetime with extremely strong gravity." },
      { type: "paragraph", text: "They are formed from collapsing massive stars." },
      { type: "blockquote", text: "Nothing, not even light, can escape a black hole." },
      { type: "heading", text: "Observation" },
      { type: "paragraph", text: "Astronomers study black holes indirectly via gravitational effects and radiation." },
      { type: "image", src: blackhole, alt: "Black Hole" }
    ]
  },
  {
    id: 20,
    title: "Basics of Telescope Observation",
    category: "astronomy",
    image: observe,
    readTime: "5 min",
    date: "Dec 2024",
    popular: false,
    latest: false,
    level: "beginner",
    tag: "Observation",
    content: [
      { type: "paragraph", text: "Telescopes allow us to observe distant celestial objects in detail." },
      { type: "paragraph", text: "Different types of telescopes are used depending on the wavelength." },
      { type: "blockquote", text: "Observation is key to understanding the universe." },
      { type: "heading", text: "Techniques" },
      { type: "paragraph", text: "Students learn about optical, radio, and space telescopes." },
      { type: "image", src: observe, alt: "Telescope Observation" }
    ]
  },
  {
    id: 21,
    title: "Life Cycle of Stars",
    category: "astronomy",
    image: stars,
    readTime: "6 min",
    date: "Nov 2024",
    popular: false,
    latest: false,
    level: "beginner",
    tag: "Stars",
    content: [
      { type: "paragraph", text: "Stars form from clouds of gas and dust under gravity." },
      { type: "paragraph", text: "They go through stages: main sequence, red giant, and eventually supernova or white dwarf." },
      { type: "blockquote", text: "The life cycle of stars determines the chemical evolution of the universe." },
      { type: "heading", text: "Key Concepts" },
      { type: "paragraph", text: "Mass and composition influence a star’s evolution and lifespan." },
      { type: "image", src: stars, alt: "Life Cycle of Stars" }
    ]
  },

  /* ================= CAREER ================= */
  {
    id: 22,
    title: "How to Start Career in Aerospace",
    category: "career",
    image: career,
    readTime: "5 min",
    date: "Feb 2025",
    popular: true,
    latest: true,
    level: "beginner",
    tag: "Career",
    content: [
      { type: "paragraph", text: "Aerospace careers require a strong foundation in physics and engineering." },
      { type: "paragraph", text: "Internships and workshops help gain practical knowledge." },
      { type: "blockquote", text: "Practical exposure is as important as theoretical knowledge." },
      { type: "heading", text: "Getting Started" },
      { type: "paragraph", text: "Students should identify their area of interest: aeronautics, astronautics, or space science." },
      { type: "image", src: career, alt: "Aerospace Career" }
    ]
  },
  {
    id: 23,
    title: "Top Space Internships for Students",
    category: "career",
    image: internship,
    readTime: "6 min",
    date: "Jan 2025",
    popular: true,
    latest: false,
    level: "beginner",
    tag: "Internship",
    content: [
      { type: "paragraph", text: "Space agencies and private companies offer internships for hands-on experience." },
      { type: "paragraph", text: "Students can work on real projects and research programs." },
      { type: "blockquote", text: "Internships help students decide their future career paths." },
      { type: "heading", text: "Opportunities" },
      { type: "paragraph", text: "Apply early and check eligibility requirements carefully." },
      { type: "image", src: internship, alt: "Space Internships" }
    ]
  },
  {
    id: 24,
    title: "Skills Needed for Rocket Engineer",
    category: "career",
    image: skills,
    readTime: "7 min",
    date: "Dec 2024",
    popular: false,
    latest: false,
    level: "intermediate",
    tag: "Skills",
    content: [
      { type: "paragraph", text: "Rocket engineers need expertise in propulsion, materials, and avionics." },
      { type: "paragraph", text: "Analytical skills and problem-solving are essential." },
      { type: "blockquote", text: "Technical knowledge combined with creativity leads to innovative solutions." },
      { type: "heading", text: "Core Skills" },
      { type: "paragraph", text: "Knowledge of fluid dynamics, control systems, and thermodynamics is required." },
      { type: "image", src: skills, alt: "Rocket Engineer Skills" }
    ]
  }

];





// import rocket from "../assets/blogImages/rocket.jpg";
// import engine from "../assets/blogImages/engine.jpg";
// import cubesat from "../assets/blogImages/cubesat.jpg";
// import avionics from "../assets/blogImages/avionics.jpg";

// import microgravity from "../assets/blogImages/microgravity.jpg";
// import plants from "../assets/blogImages/plants.jpg";
// import thermal from "../assets/blogImages/thermal.jpg";
// import radiation from "../assets/blogImages/radiation.jpg";






/* ================= SPACE TECHNOLOGY ================= */

// {
// id:5,
// title:"Basics of Rocket Propulsion",
// category:"space-technology",
// image:rocket,
// readTime:"7 min",
// date:"Feb 2025",
// popular:true,
// latest:true,
// level:"beginner",
// tag:"Propulsion"
// },
// {
// id:6,
// title:"Solid vs Liquid Fuel Engines",
// category:"space-technology",
// image:engine,
// readTime:"9 min",
// date:"Jan 2025",
// popular:false,
// latest:false,
// level:"intermediate",
// tag:"Engine"
// },
// {
// id:7,
// title:"Introduction to CubeSat Systems",
// category:"space-technology",
// image:cubesat,
// readTime:"6 min",
// date:"Dec 2024",
// popular:true,
// latest:false,
// level:"beginner",
// tag:"CubeSat"
// },
// {
// id:8,
// title:"Avionics Design in Launch Vehicles",
// category:"space-technology",
// image:avionics,
// readTime:"10 min",
// date:"Oct 2024",
// popular:false,
// latest:false,
// level:"advanced",
// tag:"Avionics"
// },

// /* ================= SPACE EXPERIMENTS ================= */

// {
// id:9,
// title:"Microgravity Fluid Experiment",
// category:"space-experiments",
// image:microgravity,
// readTime:"6 min",
// date:"Jan 2025",
// popular:false,
// latest:true,
// level:"intermediate",
// tag:"Research"
// },
// {
// id:10,
// title:"Plant Growth in Space Station",
// category:"space-experiments",
// image:plants,
// readTime:"5 min",
// date:"Dec 2024",
// popular:true,
// latest:false,
// level:"beginner",
// tag:"Biology"
// },
// {
// id:11,
// title:"Thermal Control Experiment Payload",
// category:"space-experiments",
// image:thermal,
// readTime:"8 min",
// date:"Nov 2024",
// popular:false,
// latest:false,
// level:"advanced",
// tag:"Thermal"
// },
// {
// id:12,
// title:"Radiation Measurement Devices",
// category:"space-experiments",
// image:radiation,
// readTime:"7 min",
// date:"Oct 2024",
// popular:false,
// latest:false,
// level:"intermediate",
// tag:"Radiation"
// },

