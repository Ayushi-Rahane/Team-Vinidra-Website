import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Cpu,
  Monitor,
  Zap,
  Settings,
  Database,
  Satellite,
  Rocket,
  Wrench,
  Wifi,
  Users,
  PenTool,
  FileText,
  DollarSign,
  Megaphone,
  Code,
  Calendar,
  Layers,
  Activity,
  User,
  Star
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SparklesCore } from './ui/SparklesCore';

// --- DATA STRUCTURE ---
const pmDataList = [
  { name: "Arshia Singh", role: "Project Manager / Systems Engineer", designation: "Lead" },
  { name: "Nandini Pathak", role: "Project Manager / Systems Engineer", designation: "Lead" }
];

const teamStructure = {
  id: "root",
  title: "Mission Command",
  children: [
    {
      id: "tech",
      title: "Technical Team",
      icon: "cpu",
      children: [
        {
          id: "karvesat",
          title: "Tech Team - KarveSat",
          icon: "satellite",
          children: [
            { id: "karvesat-avionics", title: "Avionics", icon: "activity", members: [{ name: "Tarini More", role: "Lead Engineer" }] },
            { id: "karvesat-electrical", title: "Electrical", icon: "zap", members: [{ name: "Janhavi Laturkar", role: "Lead Engineer" }, { name: "Rashmi Apte", role: "Deputy Engineer" }] },
            { id: "karvesat-mechanical", title: "Mechanical", icon: "settings", members: [{ name: "Shreya Dhumal", role: "Lead Engineer" }, { name: "Gargi Rajput", role: "Deputy Engineer" }] },
            { id: "karvesat-payload", title: "Payload", icon: "database", members: [{ name: "Ketaki Patil", role: "Lead Engineer" }] },
            { id: "karvesat-software", title: "Software", icon: "monitor", members: [{ name: "Dnyanda Patil", role: "Lead Engineer" }] }
          ]
        },
        {
          id: "cansat",
          title: "Tech Team - CanSat",
          icon: "layers",
          head: { name: "Sphurti Thombare", role: "Head" },
          children: [
            { id: "cansat-obc", title: "OBC", icon: "cpu", members: [{ name: "Sphurti Thombare" }, { name: "Isha Darade" }] },
            { id: "cansat-payload", title: "Payload", icon: "database", members: [{ name: "Shruti Sinkar" }] },
            { id: "cansat-adcs", title: "ADCS", icon: "activity", members: [{ name: "Dhanashree Deshmukh" }] },
            { id: "cansat-power", title: "Power", icon: "zap", members: [{ name: "Harshada Sonje" }] },
            { id: "cansat-st", title: "S&T", icon: "wrench", members: [{ name: "Sharay Chintal" }, { name: "Aditi Chitode" }] }
          ]
        },
        {
          id: "rocketry",
          title: "Tech Team - Rocketry",
          icon: "rocket",
          head: { name: "Gargi Joshi", role: "Head" },
          children: [
            { id: "rocketry-design", title: "Rocket Design", icon: "pen-tool", members: [{ name: "Vaibhavi Bandgar" }, { name: "Rutuja Deshmukh" }, { name: "Raavi Barve" }] },
            { id: "rocketry-avionics", title: "Avionics", icon: "wifi", members: [{ name: "Hrushita Mulaokar" }, { name: "Siddhali Burande" }, { name: "Maitreyi Joshi" }] },
            { id: "rocketry-software", title: "Flight Software", icon: "code", members: [{ name: "Shreeya Malu" }] }
          ]
        }
      ]
    },
    {
      id: "nontech",
      title: "Non-Technical Team",
      icon: "users",
      children: [
        { id: "nontech-graphics", title: "Graphic Design", icon: "pen-tool", members: [{ name: "Shubhangi Kokate" }, { name: "Soniya Rathod" }, { name: "Sejal Badugu" }, { name: "Srushti Desai" }] },
        { id: "nontech-content", title: "Content & Editing", icon: "file-text", members: [{ name: "Karishma Chidgopkar" }, { name: "Minal Chaudhari" }] },
        { id: "nontech-finance", title: "Finance", icon: "dollar-sign", members: [{ name: "Swarali Rake" }, { name: "Anushka Bora" }, { name: "Sweta Jagtap" }] },
        { id: "nontech-pr", title: "Public Relations", icon: "megaphone", members: [{ name: "Aditi Shivapurkar" }, { name: "Bhumika Chaudhari" }] },
        { id: "nontech-web", title: "Web Development", icon: "code", members: [{ name: "Sanskruti Patil" }, { name: "Ayushi Rahane" }] },
        { id: "nontech-events", title: "Events & Outreach", icon: "calendar", members: [{ name: "Preeti Tarle" }, { name: "Kanchan Jadhav" }] }
      ]
    }
  ]
};

// --- HELPERS ---
const IconMap = {
  "cpu": Cpu,
  "monitor": Monitor,
  "zap": Zap,
  "settings": Settings,
  "database": Database,
  "satellite": Satellite,
  "rocket": Rocket,
  "wrench": Wrench,
  "wifi": Wifi,
  "users": Users,
  "pen-tool": PenTool,
  "file-text": FileText,
  "dollar-sign": DollarSign,
  "megaphone": Megaphone,
  "code": Code,
  "calendar": Calendar,
  "layers": Layers,
  "activity": Activity
};

const getIcon = (name) => {
  const IconComponent = IconMap[name] || Users;
  return <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-sky-300/80 group-hover:text-sky-300 group-hover:opacity-100 transition-all duration-300" />;
};

// Find node in tree
const findNode = (id, tree) => {
  if (tree.id === id) return tree;
  if (tree.children) {
    for (let child of tree.children) {
      let res = findNode(id, child);
      if (res) return res;
    }
  }
  return null;
};

// --- COMPONENTS ---

// Animated Particles Background (CSS based for performance)
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-300/30"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default function TeamPage() {
  const [path, setPath] = useState(['root']);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const currentId = path[path.length - 1];
  const currentNode = findNode(currentId, teamStructure);
  
  // Handlers
  const handleNavigate = (id) => {
    setDirection(1);
    setPath([...path, id]);
  };

  const handleBack = () => {
    if (path.length > 1) {
      setDirection(-1);
      setPath(path.slice(0, -1));
    }
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      scale: direction > 0 ? 0.9 : 1.1,
      opacity: 0,
      y: direction > 0 ? 20 : -20
    }),
    center: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      scale: direction < 0 ? 0.9 : 1.1,
      opacity: 0,
      y: direction < 0 ? 20 : -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  // Render Functions
  const renderPM = () => (
    <div className="flex flex-wrap justify-center gap-8 mb-16 relative w-full items-stretch">
      <div className="absolute inset-0 bg-sky-400/10 blur-[60px] rounded-full w-full max-w-2xl h-64 mx-auto pointer-events-none" />
      {pmDataList.map((pm, i) => (
        <div key={i} className="relative w-full sm:w-[calc(50%-1rem)] max-w-[320px]">
          <div className="group relative h-full overflow-hidden rounded-3xl border border-white/15
            bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
            backdrop-blur-md p-8 shadow-lg flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
              transition duration-700
              bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
            <div className="relative w-20 h-20 mb-4 rounded-full border-2 border-sky-300/50 flex items-center justify-center bg-sky-900/20 text-sky-300 flex-shrink-0">
              <User className="w-10 h-10" />
              <div className="absolute inset-0 rounded-full border border-sky-300/20 animate-ping opacity-50" style={{ animationDuration: '3s' }} />
            </div>
            <div className="flex-1 flex flex-col justify-center w-full">
              <h2 className="relative text-2xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text uppercase">{pm.name}</h2>
              <p className="relative text-sky-300/80 text-xs mt-2 tracking-[0.25em] uppercase">{pm.role}</p>
              <div>
                <div className="relative mt-4 inline-block px-3 py-1 border border-white/15 rounded-full text-sky-200/80 text-[10px] tracking-widest uppercase">
                  {pm.designation}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCards = (nodes) => (
    <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl mx-auto">
      {nodes.map((node, i) => (
        <motion.button
          key={node.id}
          className="group relative text-left outline-none w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[320px]"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavigate(node.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <div className="relative h-full overflow-hidden rounded-3xl border border-white/15
            bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
            hover:from-sky-400/30 hover:via-sky-400/10
            transition-all duration-500 backdrop-blur-md p-8 shadow-lg">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
              transition duration-700
              bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]" />

            <div className="relative flex flex-col items-center text-center justify-center h-full gap-4 py-4">
              <div className="p-4 rounded-full bg-sky-400/10 border border-white/10 group-hover:bg-sky-400/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-300">
                {getIcon(node.icon || "users")}
              </div>
              <div>
                <h3 className="text-lg tracking-[0.25em] text-white/90 group-hover:text-white uppercase mb-1">
                  {node.title}
                </h3>
                <p className="text-sky-300/50 text-xs tracking-[0.2em] group-hover:text-sky-300/70 uppercase">
                  Explore
                </p>
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );

  const renderMembers = (members, head = null) => (
    <div className="w-full max-w-5xl mx-auto">
      {head && (
        <div className="mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-300/50" />
            <span className="text-sky-300/60 text-xs tracking-[0.3em] uppercase">Division Head</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-sky-300/50" />
          </div>
          <div className="flex justify-center">
             <div className="group relative overflow-hidden rounded-3xl border border-white/15
               bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
               backdrop-blur-md p-6 flex flex-col items-center w-64 shadow-lg">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-700
                  bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
                <Star className="relative w-6 h-6 text-sky-300 mb-2" />
                <h4 className="relative text-lg tracking-[0.2em] text-white/90 uppercase text-center">{head.name}</h4>
                <p className="relative text-sky-300/70 text-[10px] tracking-widest uppercase mt-1">Head</p>
             </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 justify-center mb-6">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-300/50" />
        <span className="text-sky-300/60 text-xs tracking-[0.3em] uppercase">Members</span>
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-sky-300/50" />
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] max-w-[280px]
              group relative overflow-hidden rounded-3xl border border-white/15
              bg-gradient-to-bl from-sky-400/15 via-white/5 to-transparent
              hover:from-sky-400/30 hover:via-sky-400/10
              transition-all duration-500 backdrop-blur-md p-6 shadow-lg
              flex flex-col items-center text-center"
          >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100
               transition duration-700
               bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
             <User className="relative w-8 h-8 text-sky-300/50 mb-3 group-hover:text-sky-300 transition-colors" />
             <h4 className="relative text-sm tracking-[0.15em] text-white/90">
               {member.name}
             </h4>
             {(member.role || "Engineer") && (
               <p className="relative text-sky-300/60 text-[10px] tracking-widest uppercase mt-2">
                 {member.role || "Engineer"}
               </p>
             )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30 font-[family-name:--font-body] bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Star Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="team-page-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={250}
          className="w-full h-full"
          particleColors={["#FFFFFF", "#FACC15", "#38BDF8"]}
          speed={0.8}
        />
        {/* Subtle glowing orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(30,80,180,0.10)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(40,120,200,0.07)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-4 min-h-screen flex flex-col">
        {/* Navigation Breadcrumb & Back */}
        <div className="w-full max-w-6xl mx-auto mb-8 h-10 flex items-center">
          <AnimatePresence>
            {path.length > 1 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={handleBack}
                className="group flex items-center gap-2 text-sky-300/60 hover:text-sky-300 transition-colors uppercase text-xs tracking-[0.2em] border border-white/15 hover:border-sky-300/50 backdrop-blur-md px-4 py-2 rounded-full"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Return to {findNode(path[path.length - 2], teamStructure).title || "Base"}
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Content Area with Framer Motion AnimatePresence */}
        <div className="flex-1 flex flex-col items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentId}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              <div className="text-center mb-10 w-full max-w-4xl px-4">
                <div className="inline-block px-3 py-1 mb-4 border border-white/15 rounded-full text-sky-300/70 text-[10px] tracking-[0.3em] uppercase">
                  System Level {path.length}
                </div>
                <h1 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text uppercase mb-4">
                  {currentNode.title}
                </h1>
                <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mt-4" />
              </div>

              {currentId === 'root' && renderPM()}

              {currentNode.children ? (
                renderCards(currentNode.children)
              ) : (
                renderMembers(currentNode.members, currentNode.head)
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
