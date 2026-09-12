import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { InteractiveCanvas } from './InteractiveCanvas';

const rotatingRoles = [
  "AI Engineer & RAG Architect",
  "Full-Stack Web Developer",
  "Generative AI & Agentic Builder",
  "High-Performance Python & React Engineer",
  "Algorithmic Problem Solver (250+ DSA)"
];

export const HeroSahil: React.FC = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Interactive Canvas */}
      <InteractiveCanvas />

      {/* Atmospheric Ambient Glows (from reference styles) */}
      <div className="landing-circle1" />
      <div className="landing-circle2" />

      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[75vh]">
          
          {/* Left Column: Name & Main Title (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c2a4ff]/10 border border-[#c2a4ff]/25 text-[#c2a4ff] text-xs font-mono tracking-wider transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#c2a4ff] animate-pulse" />
              <span className="font-semibold">{rotatingRoles[roleIdx]}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              PEDDAPATLOLLA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#c2a4ff]">
                PHANIRAJ REDDY
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed mx-auto lg:mx-0 font-light">
              {profileData.subTitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-[#c2a4ff] hover:bg-white shadow-[0_0_25px_rgba(194,164,255,0.4)] transition-all hover:scale-105"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-semibold tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-[#c2a4ff]"
              >
                <span>HIRE / CONTACT ME</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-semibold tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-[#c2a4ff]"
              >
                <span>RESUME ↗</span>
              </a>
            </div>
          </div>

          {/* Center Column: Interactive Visual / Avatar (3 cols on lg) */}
          <div className="lg:col-span-3 flex justify-center order-first lg:order-none">
            <div className="relative group">
              {/* Glowing Rim Halo from reference */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#c2a4ff]/40 to-[#8b5cf6]/40 blur-2xl group-hover:blur-3xl transition-all" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-[#c2a4ff]/50 bg-black shadow-[0_0_40px_rgba(194,164,255,0.3)]">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-[center_16%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#120e17] border border-[#c2a4ff]/40 text-[10px] font-mono text-[#c2a4ff] whitespace-nowrap shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>OPEN TO INTERNSHIPS & ROLES</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Location Info (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#c2a4ff]" />
                <span>BASED IN TELANGANA, INDIA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase leading-snug">
                BUILDING REAL-WORLD<br />
                <span className="text-[#c2a4ff]">AI SYSTEMS</span> & FULL-STACK APPS
              </h3>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-xl font-bold font-mono text-white">5+</div>
                <div className="text-[11px] font-mono text-slate-400">Deployed Projects</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-xl font-bold font-mono text-[#c2a4ff]">CGPA 8.00</div>
                <div className="text-[11px] font-mono text-slate-400">JNTUH UCE Manthani</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-xl font-bold font-mono text-white">250+</div>
                <div className="text-[11px] font-mono text-slate-400">DSA Conquered</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-xl font-bold font-mono text-[#c2a4ff]">3+ GenAI</div>
                <div className="text-[11px] font-mono text-slate-400">RAG & Agent Systems</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
