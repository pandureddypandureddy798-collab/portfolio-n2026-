import React from 'react';
import { ArrowDown, Brain, Code2, Cpu, FileDown, Layers, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';

export const RecruiterScanBar: React.FC = () => {
  return (
    <section id="quick-profile" className="py-12 relative bg-[#0e0a12] border-y border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: 60-Second Scan Overview */}
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c2a4ff] animate-ping" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#c2a4ff] font-semibold">
                RECRUITER & LEADERSHIP QUICK SCAN
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              AI Engineer & Full-Stack Product Developer
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              Specializing in Generative AI architectures, RAG pipelines, autonomous multi-agent systems, and scalable full-stack React & FastAPI applications.
            </p>
          </div>

          {/* Center: Core Competencies Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-[#c2a4ff]" /> AI / ML Systems
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c2a4ff]" /> Generative AI & RAG
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#c2a4ff]" /> Agentic Workflows
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#c2a4ff]" /> Full-Stack (React/TS/FastAPI)
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#c2a4ff]" /> 250+ DSA Conquered
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#c2a4ff]" /> CGPA 8.00 (JNTUH UCE)
            </span>
          </div>

          {/* Right: Fast Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-[#c2a4ff] hover:bg-white shadow-[0_0_20px_rgba(194,164,255,0.3)] transition-all hover:scale-105"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <span>CASE STUDIES</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

