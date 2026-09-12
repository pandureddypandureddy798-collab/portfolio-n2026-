import React from 'react';
import { Sparkles } from 'lucide-react';
import { currentlyLearningData } from '../../data/currentlyLearning';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="currently-exploring" className="py-24 relative overflow-hidden bg-[#0e0a12] border-t border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            R&D & TECHNICAL FRONTIERS
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            CURRENTLY <span className="text-[#c2a4ff]">EXPLORING</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Actively researching cutting-edge frontiers in autonomous agentic AI architectures, advanced RAG optimization, and distributed cloud systems.
          </p>
        </div>

        {/* 4 Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentlyLearningData.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-[#c2a4ff] border border-white/10 font-semibold">
                    {item.category}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#c2a4ff] group-hover:rotate-12 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#c2a4ff] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono text-[#c2a4ff] uppercase tracking-wider block mb-2 font-semibold">
                    Concepts Under Study & Prototyping:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.keyConcepts.map((concept) => (
                      <span
                        key={concept}
                        className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

