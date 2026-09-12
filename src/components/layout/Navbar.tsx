import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'AI Focus', href: '#ai-focus' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'DSA', href: '#dsa' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          aria-label="Peddapatlolla Phaniraj Reddy Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            PR
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Phaniraj Reddy
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5 shadow-inner" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 border border-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 border border-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={profileData.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-dark-850 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav mt-2 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-dark-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-dark-850 border border-white/10"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-dark-850 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md"
            >
              <FileText className="w-3.5 h-3.5" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
