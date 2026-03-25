import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SparklesCore } from '../components/ui/SparklesCore';

// Dynamically import all images from the gallary folder using Vite's glob import
const imageModules = import.meta.glob('../assets/gallary/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules).map((module) => module.default);

const GalleryPage = () => {
  // Ensure we start at the top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#02040a] overflow-x-hidden flex flex-col">
      {/* Background Animated Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <SparklesCore
          id="gallery-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={120}
          className="w-full h-full"
          particleColors={["#FFFFFF", "#38BDF8", "#FACC15"]}
          speed={0.4}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% -20%, rgba(14, 30, 60, 0.4) 0%, transparent 60%), radial-gradient(circle at 50% 120%, rgba(20, 10, 40, 0.4) 0%, transparent 60%)'
          }}
        />
      </div>

      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow pt-36 pb-32 px-6 md:px-12 xl:px-20 max-w-[1600px] mx-auto w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-[0.35em] bg-gradient-to-r from-white via-sky-200 to-white text-transparent bg-clip-text uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-6">
            Gallery Orbit
          </h1>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent mx-auto mb-8 opacity-60" />
          <p className="text-white/40 tracking-[0.25em] font-light max-w-2xl mx-auto uppercase text-xs md:text-sm leading-relaxed">
            Glimpses into our journey, missions, and the defining moments of Team Vinidra.
          </p>
        </motion.div>

        {/* Masonry Image Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid relative group rounded-[20px] overflow-hidden cursor-pointer"
            >
              {/* Image Container with subtle inner shadow */}
              <div className="relative w-full h-full bg-[#060c1a]">
                <img 
                  src={img} 
                  alt={`Vinidra Moment ${idx + 1}`} 
                  className="w-full h-auto object-cover transform transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Cinematic Overlay (Fades in on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  {/* Expanding line indicator */}
                  <div className="w-8 h-[2px] bg-sky-400 mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  
                  {/* Tagtext sliding up */}
                  <span className="text-white/90 font-mono text-[10px] md:text-xs tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 uppercase">
                    Record {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Premium Borders and Inner Glows */}
                <div className="absolute inset-0 border border-white/5 rounded-[20px] transition-colors duration-500 group-hover:border-white/20 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(56, 189, 248, 0.15)' }} />
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      {/* Footer placed sequentially at the bottom */}
      <div className="relative z-10 mt-auto bg-black/50 border-t border-white/5 backdrop-blur-md">
        <Footer />
      </div>

    </div>
  );
};

export default GalleryPage;
