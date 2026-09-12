import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm">
                PR
              </div>
              <span className="font-bold text-lg text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-cyan-400 font-mono text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> AI Engineer • Full-Stack Developer
            </p>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Engineering autonomous AI systems, high-accuracy RAG architectures, and responsive full-stack applications with modern web standards.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#ai-focus" className="hover:text-cyan-400 transition-colors">Building With AI</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience & Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" /> {profileData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {profileData.name}. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline mx-0.5" /> using React, TypeScript & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
