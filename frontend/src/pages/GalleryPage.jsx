import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SparklesCore } from '../components/ui/SparklesCore';

// Dynamically import all images from the gallary folder using Vite's glob import
const imageModules = import.meta.glob('../assets/gallary/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.values(imageModules).map((module) => module.default);

const GalleryPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Ensure we start at the top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedIdx(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
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
        
        {/* Header Section — Floating */}
        <div className="text-center mb-24 gallery-float" style={{ animationDelay: '0s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-[0.35em] bg-gradient-to-r from-white via-sky-200 to-white text-transparent bg-clip-text uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-6">
            Gallery Orbit
          </h1>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent mx-auto mb-8 opacity-60" />
          <p className="text-white/40 tracking-[0.25em] font-light max-w-2xl mx-auto uppercase text-xs md:text-sm leading-relaxed">
            Glimpses into our journey, missions, and the defining moments of Team Vinidra.
          </p>
        </div>

        {/* Masonry Image Grid — Pure CSS, no Framer Motion on grid items */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid mb-6 md:mb-8 gallery-card-enter gallery-float group cursor-pointer"
              style={{ 
                animationDelay: `${(idx % 4) * 0.15}s`,
                // Each card gets a unique float delay for organic movement
                '--float-delay': `${(idx * 0.7) % 3}s`
              }}
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="relative w-full bg-[#060c1a] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(56,189,248,0.3)] group-hover:-translate-y-2">
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
                  
                  {/* Tag text sliding up */}
                  <span className="text-white/90 font-mono text-[10px] md:text-xs tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 uppercase mb-2">
                    Record {String(idx + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Click to expand cue */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-sky-300 font-mono text-[9px] tracking-widest uppercase font-bold">
                      Click to Expand
                    </span>
                  </div>
                </div>
                
                {/* Premium Borders and Inner Glows */}
                <div className="absolute inset-0 border border-white/5 rounded-[20px] transition-colors duration-500 group-hover:border-white/20 pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(56, 189, 248, 0.15)' }} />
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer placed sequentially at the bottom */}
      <div className="relative z-10 mt-auto bg-black/50 border-t border-white/5 backdrop-blur-md">
        <Footer />
      </div>

      {/* Lightbox Overlay — Click to expand */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-auto h-auto rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8),_0_0_80px_rgba(56,189,248,0.3)] bg-[#02040a] border border-white/20 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIdx]} 
                alt={`Expanded Vinidra Moment ${selectedIdx + 1}`}
                className="w-full h-full max-h-[85vh] object-contain rounded-[32px]"
              />
              
              {/* Overlay data inside the expanded view */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex justify-between items-end pointer-events-none"
              >
                <div>
                  <div className="w-12 h-[2px] bg-sky-400 mb-4 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
                  <h3 className="text-white font-mono tracking-[0.4em] text-sm md:text-base uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                    Archive Record {String(selectedIdx + 1).padStart(2, '0')}
                  </h3>
                </div>
                
                <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest hidden sm:block">
                  Click anywhere to close · ESC
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All animations via pure CSS — no Framer Motion conflicts */}
      <style>{`
        /* Entrance animation for gallery cards */
        .gallery-card-enter {
          animation: cardEnter 0.8s ease-out both;
        }
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Subtle floating animation */
        .gallery-float {
          animation: galleryFloat 5s ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
        }
        @keyframes galleryFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Pause the float when hovered so it stays still */
        .gallery-float:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default GalleryPage;
