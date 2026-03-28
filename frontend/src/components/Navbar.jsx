import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import { Linkedin, Mail, Instagram, Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const handleScrollSpy = () => {
      const scrollY = window.scrollY + 120; // offset for navbar height
      let current = "home";

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = link.id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // run once on mount

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [location.pathname]);

  // Sync active state with route (for standalone pages)
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/gallery")) {
      setActiveSection("gallery");
    } else if (path.startsWith("/team")) {
      setActiveSection("team");
    } else if (path.startsWith("/achievements")) {
      setActiveSection("achievements");
    } else if (path.startsWith("/knowledge-hub")) {
      setActiveSection("knowledge-hub");
    } else if (path === "/") {
      if (window.scrollY < 100) setActiveSection("home");
    }
  }, [location.pathname]);

  // Map of nav ids to dedicated page routes
  const dedicatedPages = {
    team: "/team",
    achievements: "/achievements",
    gallery: "/gallery",
    "knowledge-hub": "/knowledge-hub",
  };

  // MAIN NAVIGATION LOGIC
  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      // On landing page: scroll to section, let scroll spy handle active state
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      } else if (dedicatedPages[id]) {
        // Section doesn't exist on landing page, navigate to dedicated page
        navigate(dedicatedPages[id]);
        setActiveSection(id);
      }
    } else {
      // On any other page: navigate to dedicated page or back to landing
      if (dedicatedPages[id]) {
        navigate(dedicatedPages[id]);
        setActiveSection(id);
      } else {
        navigate("/#" + id);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
        }, 100);
      }
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
        className="flex items-center gap-3 shrink-0 relative z-[60]"
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
        <a href="https://www.linkedin.com/in/vinidra-ccew?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/teamvinidra?igsh=MXN4b2NvNWQ5NmtuZQ==" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a href="mailto:satellite@cumminscollege.in" className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110">
          <Mail size={20} strokeWidth={1.5} />
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden text-white/80 hover:text-white p-2 relative z-[60]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Full-Screen Overlay Nav */}
      <div 
        className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 mt-16">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`text-2xl font-thin tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? "text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>
        <div className="flex items-center gap-8 mt-10">
          <a href="https://www.linkedin.com/in/vinidra-ccew?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:scale-110 transition-all"><Linkedin size={28} strokeWidth={1.5} /></a>
          <a href="https://www.instagram.com/teamvinidra?igsh=MXN4b2NvNWQ5NmtuZQ==" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:scale-110 transition-all"><Instagram size={28} strokeWidth={1.5} /></a>
          <a href="mailto:satellite@cumminscollege.in" className="text-white/60 hover:text-white hover:scale-110 transition-all"><Mail size={28} strokeWidth={1.5} /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;