import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Knowledge Hub', href: '#knowledge-hub' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full px-[5%] py-6 flex justify-between items-center z-50 transition-all duration-400 ${scrolled ? 'bg-[rgba(3,5,20,0.8)] backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <div className="flex items-center gap-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Team Vinidra Logo" className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
          <span className="text-xl md:text-2xl font-bold font-[family-name:--font-heading] tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hidden sm:block">
            TEAM VINIDRA
          </span>
        </a>
      </div>
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="group font-[family-name:--font-subheading] text-sm uppercase tracking-widest text-[#a0a5b8] relative transition-colors duration-300 hover:text-white">
            {link.name}
            <span className="absolute -bottom-[5px] left-0 w-0 h-[2px] bg-[#4a90e2] transition-all duration-300 shadow-[0_0_15px_rgba(74,144,226,0.6)] group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
