import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'CAPABILITIES', href: '#capabilities' },
  { name: 'AI STACK', href: '#ai-focus' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'PROCESS', href: '#process' },
  { name: 'CAREER', href: '#career' },
  { name: 'DSA', href: '#dsa' },
  { name: 'SERVICES', href: '#services' },
  { name: 'CONTACT', href: '#contact' },
];

export const NavbarSahil: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b080c]/85 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="w-[92%] max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center font-mono font-bold text-white text-xs group-hover:border-[#c2a4ff] group-hover:text-[#c2a4ff] transition-all">
            PR
          </div>
          <span className="font-bold text-sm tracking-widest text-white uppercase group-hover:text-[#c2a4ff] transition-colors">
            {profileData.name}
          </span>
        </a>

        {/* Center Quick Connect */}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="hidden lg:flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#c2a4ff] tracking-widest uppercase transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </a>

        {/* Desktop Nav Links with Hover In/Out Effect */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative text-xs font-mono tracking-widest text-slate-300 hover:text-[#c2a4ff] transition-colors group py-1"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c2a4ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b080c]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-3 py-2 rounded-lg text-xs font-mono tracking-wider text-slate-300 hover:text-white hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-xs font-mono text-[#c2a4ff] flex items-center gap-1"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={profileData.resumeUrl}
              download
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-[#c2a4ff] text-black font-semibold"
            >
              RESUME
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
