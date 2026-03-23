import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import { Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Team", id: "team" },
  { name: "Achievements", id: "achievements" },
  { name: "Gallery", id: "gallery" },
  { name: "Knowledge Hub", id: "knowledge-hub" },
  { name: "Contact Us", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  // Navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy (ONLY on landing page)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatioEntry = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !maxRatioEntry ||
              entry.intersectionRatio > maxRatioEntry.intersectionRatio
            ) {
              maxRatioEntry = entry;
            }
          }
        });

        if (maxRatioEntry) {
          setActiveSection(maxRatioEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, [location.pathname]);

  // ⭐ MAIN NAVIGATION LOGIC
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 lg:px-10 py-4 flex justify-between items-center z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(3,5,20,0.85)] backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => handleNavClick("home")}
        className="flex items-center gap-3 shrink-0"
      >
        <img
          src={logo}
          alt="Vinidra Logo"
          className="h-10 w-auto object-contain"
        />
        <span className="text-lg font-bold tracking-[0.2em] text-white">
          VINIDRA
        </span>
      </button>

      {/* Center Nav Links */}
      <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className={`
                group text-[16px] xl:text-[17px] tracking-wider relative transition-all duration-300 px-5 py-2.5 rounded-full border
                ${
                  isActive
                    ? "text-white bg-black shadow-[0_0_20px_rgba(255,255,255,0.15)] border-white/50"
                    : "text-[#8a8fa3] hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] border-transparent"
                }
              `}
            >
              <span className="relative z-10">{link.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Social Icons (unchanged) */}
      <div className="hidden lg:flex items-center gap-6 shrink-0">
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
          <Twitter size={20} strokeWidth={1.5} />
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;