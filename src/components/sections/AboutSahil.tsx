import React from 'react';
import { ArrowUpRight, GraduationCap, BrainCircuit, Layers } from 'lucide-react';

export const AboutSahil: React.FC = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#0b080c]">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Display Text */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#c2a4ff]">
              ABOUT ME
            </h3>
            
            <p className="text-2xl sm:text-4xl xl:text-5xl font-medium text-white leading-tight tracking-tight">
              Computer Science engineer with practical experience architecting{' '}
              <span className="text-[#c2a4ff]">Generative AI applications</span>,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c2a4ff]">
                RAG retrieval pipelines
              </span>
              , and production full-stack systems.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light max-w-3xl pt-2">
              Graduated from <strong>JNTUH University College of Engineering, Manthani</strong> with a CGPA of <strong>8.00</strong>. I focus on building intelligent software systems that solve tangible problems—integrating Large Language Models, hybrid vector search (ChromaDB / FAISS), and asynchronous FastAPI backends with fluid React and TypeScript user interfaces.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#c2a4ff]" />
                <span>B.Tech CSE • CGPA 8.00</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-[#c2a4ff]" />
                <span>Generative AI & Agentic Systems</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c2a4ff]" />
                <span>Python • FastAPI • React • PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Attributes Box */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-[#130f18] border border-white/10 space-y-6 shadow-2xl">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  CORE OBJECTIVE
                </span>
                <h4 className="text-lg font-bold text-white">
                  Production-Ready AI Engineering
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                  Bridging the gap between raw machine learning capabilities and responsive, secure, enterprise-grade software applications.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  ACADEMIC FOUNDATION
                </span>
                <div className="text-xs font-mono text-white space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">B.Tech (JNTUH UCE):</span>
                    <span className="text-[#c2a4ff] font-bold">8.00 CGPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Intermediate (MPC):</span>
                    <span className="text-[#c2a4ff] font-bold">96.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">SSC (Class X):</span>
                    <span className="text-[#c2a4ff] font-bold">100% (10.0 GPA)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#c2a4ff] hover:bg-white transition-all flex items-center justify-center gap-1.5"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
