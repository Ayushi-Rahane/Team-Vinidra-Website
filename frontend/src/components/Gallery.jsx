import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/gallary/img1.png';
import img2 from '../assets/gallary/img2.png';
import img3 from '../assets/gallary/img3.png';
import img4 from '../assets/gallary/img4.png';

const galleryItems = [
  {
    id: 1,
    category: 'CanSat India 2022',
    description: "We proudly won 'Best Teamwork' at the CanSat India Competition 2022 by ASI and IN-SPACe. Our CanSat was deployed via drone from 800m altitude and successfully maintained telemetry with perfect structural integrity upon landing.",
    image: img1,
    tag: 'Award',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    accent: '#10b981',
  },
  {
    id: 2,
    category: 'IETE Inauguration',
    description: "Honored to represent Vinidra at the IETE student branch inauguration. We attended an inspiring talk by Former ISRO Group Director Shri. Suresh Naik, highlighting India's monumental achievements in space exploration.",
    image: img2,
    tag: 'Event',
    tagColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    accent: '#8b5cf6',
  },
  {
    id: 3,
    category: 'STEM School Outreach',
    description: "Visited a school in Yerwada to spark students' interest in STEM and Space Science. With hands-on interaction featuring our past CanSat hardware, their enthusiasm and curiosity were truly inspiring for our team.",
    image: img3,
    tag: 'Outreach',
    tagColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    accent: '#0ea5e9',
  },
  {
    id: 4,
    category: 'National Space Day',
    description: "On India's maiden National Space Day, we were deeply honored to present our CanSat capabilities at the exhibition in New Delhi, in the esteemed presence of the Hon'ble President of India and distinguished ISRO dignitaries.",
    image: img4,
    tag: 'Exhibition',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    accent: '#f59e0b',
  },
];

// How many px of scroll is allocated to each card reveal
const SCROLL_PER_CARD = 400;
// Extra scroll padding after the last card reveals
const TAIL_SCROLL = 200;

const Gallery = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const counterRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const n = galleryItems.length;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      // scrolled = how far we are into the sticky phase (in px)
      // rect.top drops from 0 toward -(totalHeight - viewportHeight) as the user scrolls
      const scrolled = -rect.top;

      const clamped = Math.max(0, Math.min(scrolled, n * SCROLL_PER_CARD));
      const continuousIdx = clamped / SCROLL_PER_CARD;

      // Update counter strictly to nearest active center
      const activeIdx = Math.min(n - 1, Math.floor(continuousIdx + 0.5));
      if (counterRef.current) {
        counterRef.current.textContent = `${activeIdx + 1} / ${n}`;
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // p represents how far 'past' this card we have scrolled
        const p = continuousIdx - i;

        if (p >= 0) {
          // It's covered by newer cards: push back & up smoothly
          const scale = Math.max(0.85, 1 - p * 0.04);
          const translateY = -p * 20;
          const opacity = Math.max(0.15, 1 - p * 0.35);

          card.style.transform = `translateY(${translateY}px) scale(${scale})`;
          card.style.opacity = opacity.toString();
        } else {
          // It's arriving from below
          const incoming = Math.max(0, 1 + p); // 0 (far below) to 1 (arrived)

          // Apply a smoothstep easing to entry so it settles softly
          const ease = incoming * incoming * (3 - 2 * incoming);

          const translateY = 180 * (1 - ease);
          const scale = 0.88 + 0.12 * ease;
          const opacity = ease;

          card.style.transform = `translateY(${translateY}px) scale(${scale})`;
          card.style.opacity = opacity.toString();
        }
        card.style.zIndex = (i + 1).toString();
      });

      // Show/Fade button toward the end of the scroll sequence
      if (buttonRef.current) {
        // Start showing button after the 3rd card (at continuousIdx 2.5) 
        // and reach full opacity by the end (continuousIdx 4)
        const btnStart = n - 1.5;
        const btnProgress = Math.max(0, Math.min(1, (continuousIdx - btnStart) / (n - btnStart)));
        
        buttonRef.current.style.opacity = (btnProgress * btnProgress).toString(); // ease-in
        buttonRef.current.style.transform = `translateY(${(1 - btnProgress) * 30}px) scale(${0.9 + 0.1 * btnProgress})`;
        buttonRef.current.style.pointerEvents = btnProgress > 0.5 ? 'auto' : 'none';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const n = galleryItems.length;
  const totalScrollHeight = n * SCROLL_PER_CARD + TAIL_SCROLL;
  // Use 100vh = window.innerHeight equivalent via CSS, container height in px
  const containerHeight = totalScrollHeight + (typeof window !== 'undefined' ? window.innerHeight : 900);

  return (
    <div className="relative z-10 py-10">
      {/* Outer container: tall enough to drive the animation */}
      <div
        ref={containerRef}
        className="relative mx-auto"
        style={{ height: `${containerHeight}px` }}
      >
        {/* Sticky viewport */}
        <div
          className="sticky top-0 flex flex-col items-center justify-center overflow-hidden w-full"
          style={{ height: '100vh', paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Section Title — Inside sticky so it scrolls as ONE group with cards */}
          <div className="flex flex-col items-center mb-8 w-full px-4" style={{ marginTop: '-4vh' }}>
            <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text text-center mb-4 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              Gallery
            </h2>
            <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto mb-4" />
            <p className="text-center text-white/40 text-sm tracking-[0.2em] uppercase">
              Scroll to explore
            </p>
          </div>

          {/* Card Stack */}
          <div className="relative w-full max-w-[1024px] px-[6%] sm:px-10 flex-shrink-0" style={{ height: '420px' }}>
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                ref={el => (cardRefs.current[i] = el)}
                className="absolute inset-0 w-full rounded-[28px] overflow-hidden border border-white/10"
                style={{
                  background: '#060c1a',
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.6)`,
                  transformOrigin: 'center bottom',
                  willChange: 'transform, opacity',
                  transition: 'transform 0.05s linear, opacity 0.05s linear',
                  opacity: 0,
                  transform: 'translateY(120px) scale(0.88)',
                }}
              >
                {/* Accent glow ring */}
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 60px 0 ${item.accent}18`,
                  }}
                />

                <div className="flex h-full animate-card-float-breath">
                  {/* Image side */}
                  <div className="relative w-3/5 h-full overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Gradient fade to right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060c1a]" />
                    {/* Subtle top gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col justify-center px-10 py-8 flex-1 min-w-0">
                    {/* Card number */}
                    <span
                      className="text-xs font-mono mb-5 tracking-widest"
                      style={{ color: item.accent + 'aa' }}
                    >
                      {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
                    </span>

                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border self-start mb-5 tracking-widest uppercase ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>

                    <h3 className="text-2xl lg:text-3xl font-thin tracking-wider text-white mb-4 leading-tight">
                      {item.category}
                    </h3>

                    <p className="text-white/55 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative line */}
                    <div
                      className="mt-8 h-[1px] w-16 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${item.accent}88, transparent)` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button — Now inside sticky viewport and animated */}
          <div 
            ref={buttonRef}
            className="flex justify-center mt-12 mb-4 w-full relative z-20 transition-all duration-75"
            style={{ opacity: 0, transform: 'translateY(30px) scale(0.9)', pointerEvents: 'none' }}
          >
            <button
              onClick={() => navigate('/gallery')}
              className="btn-space-extra px-8 py-4 rounded-full text-white font-thin tracking-[0.2em] uppercase text-sm group flex items-center gap-3 cursor-pointer"
            >
              <span>Open the Gallery Orbit</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Scroll counter — bottom center */}
          <div className="absolute bottom-0 sm:bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none select-none">
            <span
              ref={counterRef}
              className="text-white/30 text-xs font-mono tracking-[0.3em]"
            >
              1 / {n}
            </span>
            {/* Animated scroll indicator */}
            <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden rounded-full">
              <div
                className="absolute top-0 left-0 w-full bg-white/60 rounded-full"
                style={{
                  height: '40%',
                  animation: 'scrollDot 1.6s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-card-float-breath {
          animation: floatBreath 4s ease-in-out infinite;
        }

        @keyframes floatBreath {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.015); }
        }

        @keyframes scrollDot {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(280%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
