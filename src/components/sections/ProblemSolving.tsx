import React from 'react';
import { Terminal, Code2, ExternalLink, CheckCircle2, TrendingUp } from 'lucide-react';
import { dsaData } from '../../data/dsa';

export const ProblemSolving: React.FC = () => {
  return (
    <section id="dsa" className="py-24 relative overflow-hidden bg-[#0b080c] border-t border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            ALGORITHMIC RIGOR
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            PROBLEM <span className="text-[#c2a4ff]">SOLVING & DSA</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Continuous algorithmic discipline applied to optimize time-space asymptotic complexity and engineer clean, robust software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Stats & Coding Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-3xl bg-[#130f18] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#c2a4ff]/10 border border-[#c2a4ff]/30 flex items-center justify-center text-[#c2a4ff]">
                  <Terminal className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-4xl font-extrabold font-mono text-white tracking-tight">
                    {dsaData.totalSolved}+
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff] font-semibold">
                    Problems Conquered
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                Active problem solver practicing core data structures, graph traversals, and dynamic programming patterns to ensure high-performance code quality.
              </p>

              {/* Profiles */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c2a4ff] block font-semibold">
                  CODING PROFILES:
                </span>
                {dsaData.platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c2a4ff]/40 transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#c2a4ff] transition-colors">
                        {platform.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {platform.stats}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c2a4ff] group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Mastered Topics Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#130f18] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#c2a4ff]" />
                  <h3 className="font-bold text-white text-lg">
                    Core Algorithmic Topics
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {dsaData.keyTopics.length} Focus Areas
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dsaData.keyTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#c2a4ff]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c2a4ff] shrink-0" />
                    <span className="text-xs font-mono text-slate-200">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" /> Optimal Time & Space Complexity
                </span>
                <span>C / Java / Python</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

