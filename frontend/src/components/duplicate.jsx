// import { useEffect, useRef, useState } from "react";

 
// /* ===================== MOCK DATA ===================== */
// const achievements = [
//   {
//     title: "Founded TechVenture",
//     year: "2018",
//     description: "Launched our first product with a team of 5, securing seed funding of $2M from top-tier investors.",
//     icon: "💡",
//     color: "#38bdf8",
//   },
//   {
//     title: "Series A Funding",
//     year: "2019",
//     description: "Raised $15M Series A, expanding operations to 3 new markets and growing the team to 40 members.",
//     icon: "🚀",
//     color: "#10b981",
//   },
//   {
//     title: "1 Million Users",
//     year: "2020",
//     description: "Crossed the 1M user milestone, recognized as the fastest growing SaaS platform of the year.",
//     icon: "🧩",
//     color: "#8b5cf6",
//   },
//   {
//     title: "Global Expansion",
//     year: "2021",
//     description: "Launched in 12 countries, partnering with Fortune 500 companies and winning Product of the Year.",
//     icon: "🌍",
//     color: "#3b82f6",
//   },
//   {
//     title: "AI Integration",
//     year: "2022",
//     description: "Pioneered AI-driven analytics, reducing customer churn by 40% and doubling revenue.",
//     icon: "📈",
//     color: "#ec4899",
//   },
//   {
//     title: "IPO & Beyond",
//     year: "2023",
//     description: "Successfully went public at a $1.2B valuation, cementing our position as an industry leader.",
//     icon: "🏆",
//     color: "#f97316",
//   },
// ];
 
// /* ===================== TRACK CONFIG ===================== */
// const VW = 1200;   // wider canvas

// const MID = 600;
// const LEFT = 120;  
// const RIGHT = 1080;

// const SEG = 260;   // vertical depth
// const CR = 80;     // corner smoothness

// const VH = 800; 
// /* ===================== GRADIENT STOPS ===================== */
// const GRADIENT_COLORS = [
//   "#38bdf8",   // sky-400
//   "#7dd3fc",   // sky-300
//   "#e0f2fe",   // light
// ];

// /* ===================== BUILD TRACK ===================== */
// function buildTrack() {
//   let d = `M ${MID} 80`;
//   const nodes = [];

//   const topY = 80;
//   const midY = topY + SEG;
//   const bottomY = midY + SEG;

//   // 👉 1. Move RIGHT (top horizontal)
//   d += ` L ${RIGHT - CR} ${topY}`;

//   // 👉 2. Top-right corner (curve down)
//   d += ` A ${CR} ${CR} 0 0 1 ${RIGHT} ${topY + CR}`;

//   // 👉 3. Go DOWN (right vertical)
//   d += ` L ${RIGHT} ${midY - CR}`;

//   // 👉 4. Curve LEFT
//   d += ` A ${CR} ${CR} 0 0 1 ${RIGHT - CR} ${midY}`;

//   // 👉 5. Long LEFT horizontal (middle)
//   d += ` L ${LEFT + CR} ${midY}`;

//   // 👉 6. Bottom-left corner (curve down)
//   d += ` A ${CR} ${CR} 0 0 0 ${LEFT} ${midY + CR}`;

//   // 👉 7. Go DOWN (left vertical)
//   d += ` L ${LEFT} ${bottomY - CR}`;

//   // 👉 8. Curve RIGHT
//   d += ` A ${CR} ${CR} 0 0 0 ${LEFT + CR} ${bottomY}`;

//   // 👉 9. Final RIGHT horizontal
//   d += ` L ${RIGHT} ${bottomY}`;

//   // 👉 Node positions (center of each segment)
//   nodes.push({ x: RIGHT, y: topY + SEG / 2 });     // 1
// nodes.push({ x: LEFT, y: midY + SEG / 2 });      // 2
// nodes.push({ x: RIGHT, y: bottomY - SEG / 2 });  // 3
// nodes.push({ x: MID, y: bottomY });              // 4 (end point)

//   return { d, nodes };
// }
// const { d: TRACK_D, nodes: NODES } = buildTrack();
 
// /* ===================== CARD COMPONENT ===================== */
// function AchievementCard({ achievement, active, side }) {
//   const { title, year, description, icon, color } = achievement;
 
//   return (
//     <div
//       style={{
//         transform: active ? "translateY(-8px) scale(1.04)" : "translateY(0px) scale(1)",
//         opacity: active ? 1 : 0.35,
//         transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
//         filter: active ? "none" : "saturate(0.3)",
//       }}
//     >
//       {/* Connector line */}
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           [side === "right" ? "left" : "right"]: "-32px",
//           width: "32px",
//           height: "2px",
//           background: active
//             ? `linear-gradient(${side === "right" ? "to left" : "to right"}, ${color}, transparent)`
//             : "rgba(255,255,255,0.1)",
//           transition: "all 0.5s ease",
//         }}
//       />
 
//       {/* Card */}
//       <div
//         style={{
//           position: "relative",
//           width: "240px",
//           borderRadius: "16px",
//           overflow: "hidden",
//           background: "rgba(10, 12, 20, 0.92)",
//           border: `1.5px solid ${active ? color + "80" : "rgba(255,255,255,0.06)"}`,
//           boxShadow: active
//             ? `0 0 40px ${color}30, 0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)`
//             : "0 4px 20px rgba(0,0,0,0.4)",
//           backdropFilter: "blur(20px)",
//           transition: "all 0.5s ease",
//         }}
//       >
//         {/* Top accent bar */}
//         <div
//           style={{
//             height: "3px",
//             background: active
//               ? `linear-gradient(to right, ${color}, ${color}88)`
//               : "rgba(255,255,255,0.05)",
//             transition: "all 0.5s ease",
//           }}
//         />
 
//         {/* Glow blob */}
//         {active && (
//           <div
//             style={{
//               position: "absolute",
//               top: "-20px",
//               right: "-20px",
//               width: "80px",
//               height: "80px",
//               borderRadius: "50%",
//               background: color + "25",
//               filter: "blur(20px)",
//               pointerEvents: "none",
//             }}
//           />
//         )}
 
//         <div style={{ padding: "18px 20px 20px" }}>
//           {/* Header row */}
//           <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
//             {/* Icon badge */}
//             <div
//               style={{
//                 width: "42px",
//                 height: "42px",
//                 borderRadius: "10px",
//                 background: active ? color + "22" : "rgba(255,255,255,0.04)",
//                 border: `1px solid ${active ? color + "50" : "rgba(255,255,255,0.08)"}`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "20px",
//                 flexShrink: 0,
//                 transition: "all 0.5s ease",
//               }}
//             >
//               {icon}
//             </div>
 
//             <div style={{ flex: 1, minWidth: 0 }}>
//               {/* Year badge */}
//               <div
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "5px",
//                   padding: "2px 8px",
//                   borderRadius: "20px",
//                   background: active ? color + "20" : "rgba(255,255,255,0.04)",
//                   border: `1px solid ${active ? color + "40" : "rgba(255,255,255,0.06)"}`,
//                   marginBottom: "5px",
//                   transition: "all 0.5s ease",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "5px",
//                     height: "5px",
//                     borderRadius: "50%",
//                     background: active ? color : "rgba(255,255,255,0.2)",
//                     transition: "all 0.5s ease",
//                   }}
//                 />
//                 <span
//                   style={{
//                     fontSize: "10px",
//                     fontWeight: "700",
//                     letterSpacing: "0.1em",
//                     color: active ? color : "rgba(255,255,255,0.3)",
//                     fontFamily: "'DM Mono', monospace",
//                     transition: "all 0.5s ease",
//                   }}
//                 >
//                   {year}
//                 </span>
//               </div>
 
//               {/* Title */}
//               <h4
//                 style={{
//                   margin: 0,
//                   fontSize: "14px",
//                   fontWeight: "700",
//                   color: active ? "#ffffff" : "rgba(255,255,255,0.4)",
//                   letterSpacing: "0.01em",
//                   lineHeight: "1.3",
//                   fontFamily: "'Syne', sans-serif",
//                   transition: "all 0.5s ease",
//                 }}
//               >
//                 {title}
//               </h4>
//             </div>
//           </div>
 
//           {/* Divider */}
//           <div
//             style={{
//               height: "1px",
//               background: active
//                 ? `linear-gradient(to right, ${color}30, transparent)`
//                 : "rgba(255,255,255,0.04)",
//               marginBottom: "12px",
//               transition: "all 0.5s ease",
//             }}
//           />
 
//           {/* Description */}
//           <p
//             style={{
//               margin: 0,
//               fontSize: "11.5px",
//               lineHeight: "1.6",
//               color: active ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)",
//               fontFamily: "'DM Sans', sans-serif",
//               transition: "all 0.5s ease",
//             }}
//           >
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
 
// /* ===================== MAIN COMPONENT ===================== */
// export default function AchievementPreview() {
//   const [showButton, setShowButton] = useState(false);

//   const containerRef = useRef(null);
//   const pathRef = useRef(null);
//   const dotRef = useRef(null);
//   const rafRef = useRef(null);
//   const buttonRef = useRef(null);
//   const [nearest, setNearest] = useState(-1);
 
//   useEffect(() => {
//     // Load fonts
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500;700&display=swap";
//     document.head.appendChild(link);
//     return () => document.head.removeChild(link);
//   }, []);
 
//   useEffect(() => {
//     const path = pathRef.current;
//     if (!path) return;
 
//     const length = path.getTotalLength();
//     let target = 0;
//     let current = 0;
 
//     function animate() {
//       current += (target - current) * 0.1;
//       const pt = path.getPointAtLength(current * length);
 
//       if (dotRef.current) {
//         dotRef.current.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
//       }
 
//       let minD = Infinity;
//       let idx = -1;
//       NODES.forEach((n, i) => {
//         const d = Math.hypot(pt.x - n.x, pt.y - n.y);
//         if (d < minD) { minD = d; idx = i; }
//       });
//       setNearest(minD < 130 ? idx : -1);
 
//       rafRef.current = requestAnimationFrame(animate);

//       if (target > 0.98) {
//   setShowButton(true);
// } else {
//   setShowButton(false);
// }

//     }
 
//     rafRef.current = requestAnimationFrame(animate);
 
//     const onScroll = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrolled = -rect.top;
//       target = Math.max(0, Math.min(1, scrolled / (2 * SEG)));
//     };
 
//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
 
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       cancelAnimationFrame(rafRef.current);
//     };
//   }, []);
 
//   const containerHeight = 2 * SEG + (typeof window !== "undefined" ? window.innerHeight : 900);
//   const visible = achievements.slice(0, 4);
// const activeColor = nearest >= 0 ? visible[nearest].color : "#38bdf8";
 
//   return (
//     <>
//       <style>{`
//         @keyframes pulse-ring {
//           0% { r: 18; opacity: 0.8; }
//           100% { r: 38; opacity: 0; }
//         }
//         .dot-pulse { animation: pulse-ring 1.5s ease-out infinite; }
//         @keyframes float-in-left {
//           from { opacity: 0; transform: translateX(-30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes float-in-right {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .achievement-title {
//           animation: float-in-left 1s ease both;
//         }
//       `}</style>
 
//       <div
//         ref={containerRef}
//         style={{
//           height: containerHeight,
//           background: "#050710",
//         }}
//       >
//         <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             overflow: "hidden",
//           }}
//         >
//           {/* Background grid */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `
//                 linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
//               `,
//               backgroundSize: "60px 60px",
//               pointerEvents: "none",
//             }}
//           />
 
//           {/* Ambient glow */}
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "800px",
//               height: "600px",
//               background: `radial-gradient(ellipse, ${activeColor}08 0%, transparent 70%)`,
//               pointerEvents: "none",
//               transition: "background 1s ease",
//             }}
//           />
 
//           {/* Title */}
//           <div style={{ marginTop: "48px", marginBottom: "24px", textAlign: "center", zIndex: 10 }}>
//             <div
//               style={{
//                 fontSize: "11px",
//                 letterSpacing: "0.4em",
//                 color: activeColor,
//                 fontFamily: "'DM Mono', monospace",
//                 fontWeight: "500",
//                 marginBottom: "10px",
//                 transition: "color 0.8s ease",
//               }}
//             >
//               OUR JOURNEY
//             </div>
//             <h2
//               style={{
//                 margin: 0,
//                 fontSize: "clamp(36px, 5vw, 56px)",
//                 fontWeight: "800",
//                 letterSpacing: "0.1em",
//                 fontFamily: "'Syne', sans-serif",
//                 background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               ACHIEVEMENTS
//             </h2>
//           </div>
 
//           {/* SVG + Cards container */}
//           <div style={{ position: "relative", width: "100%", maxWidth: "1200px", flex: 1, minHeight: 0 }}>
 
//             <svg
//               viewBox={`0 0 ${VW} ${VH}`}
//               style={{ width: "100%", height: "auto" }}
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 {/* Multi-color track gradient */}
//                 <linearGradient id="trackGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
//                   {GRADIENT_COLORS.map((c, i) => (
//                     <stop key={i} offset={`${(i / (GRADIENT_COLORS.length - 1)) * 100}%`} stopColor={c} />
//                   ))}
//                 </linearGradient>
 
//                 {/* Glow filter */}
//                 <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
//                   <feGaussianBlur stdDeviation="6" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
 
//                 {/* Dot glow */}
//                 <filter id="dotGlow">
//                   <feGaussianBlur stdDeviation="4" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
 
//                 {/* Node glow */}
//                 <filter id="nodeGlow">
//                   <feGaussianBlur stdDeviation="8" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>
 
//               {/* Shadow/glow track (wide) */}
//               <path
//   d={TRACK_D}
//   fill="none"
//   stroke="url(#trackGrad)"
//   strokeWidth="28"
//   strokeLinecap="round"
//   strokeLinejoin="round"
// />
 
//               {/* Dark road base */}
//               <path
//                 d={TRACK_D}
//                 stroke="#1a1f35"
//                 strokeWidth="28"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
 
//               {/* Colored road top */}
//               <path
//                 ref={pathRef}
//                 d={TRACK_D}
//                 stroke="url(#trackGrad)"
//                 strokeWidth="22"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 filter="url(#glow)"
//               />
 
//               {/* Road center dashes (white line) */}
//               <path
//                 d={TRACK_D}
//                 stroke="rgba(255,255,255,0.12)"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeDasharray="20 30"
//               />
 
//               {/* Node circles */}
//               {NODES.map((node, i) => {
//                 const active = i === nearest;
//                 const color = visible[i]?.color || "#38bdf8";
//                 return (
//                   <g key={i} filter={active ? "url(#nodeGlow)" : undefined}>
//                     {/* Outer ring */}
//                     <circle
//                       cx={node.x}
//                       cy={node.y}
//                       r={active ? "22" : "18"}
//                       fill={active ? color + "30" : "rgba(255,255,255,0.05)"}
//                       stroke={active ? color : "rgba(255,255,255,0.15)"}
//                       strokeWidth={active ? "2.5" : "1.5"}
//                       style={{ transition: "all 0.4s ease" }}
//                     />
//                     {/* Inner dot */}
//                     <circle
//                       cx={node.x}
//                       cy={node.y}
//                       r={active ? "9" : "7"}
//                       fill={active ? color : "rgba(255,255,255,0.3)"}
//                       style={{ transition: "all 0.4s ease" }}
//                     />
//                   </g>
//                 );
//               })}
 
//               {/* Moving dot */}
//               <g ref={dotRef} filter="url(#dotGlow)">
//                 {/* Pulse ring */}
//                 <circle
//                   className="dot-pulse"
//                   r="18"
//                   fill="none"
//                   stroke={activeColor}
//                   strokeWidth="2"
//                   opacity="0"
//                   style={{ transition: "stroke 0.8s ease" }}
//                 />
//                 {/* Outer glow */}
//                 <circle r="20" fill={activeColor + "25"} style={{ transition: "fill 0.8s ease" }} />
//                 {/* Middle */}
//                 <circle r="13" fill={activeColor + "60"} style={{ transition: "fill 0.8s ease" }} />
//                 {/* Core */}
//                 <circle r="7" fill={activeColor} style={{ transition: "fill 0.8s ease" }} />
//                 {/* Highlight */}
//                 <circle cx="-2" cy="-2" r="2.5" fill="rgba(255,255,255,0.7)" />
//               </g>
//             </svg>

//             {/* CARDS */}

//             {visible.map((a, i) => {
 
            
//             // {achievements.map((a, i) => {
//               const node = NODES[i] || { x: MID, y: 0 };
//               const active = i === nearest;
//               const isRight = i % 2 === 0;
 
//               const xPct = (node.x / VW) * 100;
//               const yPct = (node.y / VH) * 100;
 
//               return (
//                 <div
//                   key={i}
//                   style={{
//                     position: "absolute",
//                     top: `${yPct}%`,
//                     transform: "translateY(-50%)",
//                     ...(isRight
//                       ? { left: `${xPct + 3.5}%` }
//                       : { right: `${100 - xPct + 3.5}%` }),
//                     zIndex: active ? 20 : 10,
//                   }}
//                 >
//                   <AchievementCard
//                     achievement={a}
//                     active={active}
//                     side={isRight ? "right" : "left"}
//                   />
//                 </div>
//               );
//             })}
//           </div>
 
//           {/* CTA */}
//           <div 
//   ref={buttonRef}
//   className="flex justify-center mt-12 mb-4 w-full relative z-20 transition-all duration-700"
//   style={{
//     opacity: showButton ? 1 : 0,
//     transform: showButton ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.9)',
//     pointerEvents: showButton ? 'auto' : 'none'
//   }}
// >
//   <button
//     onClick={() => navigate('/gallery')}
//     className="px-8 py-4 rounded-full text-white font-thin tracking-[0.2em] uppercase text-sm group flex items-center gap-3 cursor-pointer
//     border border-sky-300/30 bg-gradient-to-r from-sky-400/20 to-white/5 backdrop-blur-md
//     hover:from-sky-400/40 hover:to-sky-300/10 transition-all duration-500"
//   >
//     <span>Open the Gallery Orbit</span>
//     <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
//       <path stroke="currentColor" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//     </svg>
//   </button>
// </div>
//         </div>
//       </div>
//     </>
//   );
// }




// import { achievements } from "./achievements/achievementData";
// import { Link } from "react-router-dom";

// export default function AchievementsPreview() {

//   const preview = achievements.slice(0, 3);

//   return (
//     <div className="py-24 text-center">
//       <h2 className="text-4xl md:text-5xl font-thin tracking-[0.32em] bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text text-center mb-12 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
//         Achievements
//       </h2>

//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//         {preview.map((a) => (
//           <div
//             key={a.id}
//             className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm"
//           >
//             <h3 className="text-white font-semibold mb-2">
//               {a.title}
//             </h3>
//             <p className="text-gray-400 text-sm">
//               {a.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       <Link
//         to="/achievements"
//         className="inline-block mt-12 px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
//       >
//         Explore More
//       </Link>
//     </div>
//   );
// }