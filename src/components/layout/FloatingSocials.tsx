import React from 'react';
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export const FloatingSocials: React.FC = () => {
  return (
    <>
      {/* Floating Left Vertical Socials */}
      <div className="fixed bottom-8 left-6 z-40 hidden md:flex flex-col items-center gap-4 text-slate-400">
        <a
          href={profileData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full hover:text-[#c2a4ff] hover:bg-white/5 transition-all hover:-translate-y-1"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={profileData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full hover:text-[#c2a4ff] hover:bg-white/5 transition-all hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="p-2.5 rounded-full hover:text-[#c2a4ff] hover:bg-white/5 transition-all hover:-translate-y-1"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        {profileData.instagramUrl && (
          <a
            href={profileData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:text-[#c2a4ff] hover:bg-white/5 transition-all hover:-translate-y-1"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
        <div className="w-px h-16 bg-white/20 mt-2" />
      </div>

      {/* Floating Right Rotated Resume Button */}
      <div className="fixed bottom-12 right-6 z-40 hidden md:block">
        <a
          href={profileData.resumeUrl}
          download
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 hover:text-white transition-all transform origin-bottom-right rotate-90 translate-x-2 hover:translate-x-1"
        >
          <span>RESUME</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#c2a4ff]" />
        </a>
      </div>
    </>
  );
};
