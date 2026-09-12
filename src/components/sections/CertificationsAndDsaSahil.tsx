import { Terminal, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import { dsaData } from '../../data/dsa';

export const CertificationsAndDsaSahil: React.FC = () => {
  return (
    <section id="dsa" className="py-28 relative overflow-hidden bg-[#0b080c]/90 border-t border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono tracking-[0.2em] text-[#c2a4ff] uppercase">
            RIGOR & CREDENTIALS
          </span>
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight mt-2 text-white uppercase">
            CREDENTIALS & <span className="text-[#c2a4ff]">DSA</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light">
            Continuous algorithmic problem solving and verified industry competencies.
          </p>
        </div>

        {/* Top: DSA Problem Solving Highlight Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#130f18] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#c2a4ff]/10 border border-[#c2a4ff]/30 flex items-center justify-center text-[#c2a4ff]">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-4xl font-extrabold font-mono text-white">
                    {dsaData.totalSolved}+
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff]">
                    DSA Problems Conquered
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light pt-1">
                Practicing disciplined algorithm optimization across LeetCode and GeeksforGeeks to ensure efficient asymptotic runtime complexity.
              </p>
            </div>

            {/* Core DSA Topics */}
            <div className="lg:col-span-8">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Algorithmic Masteries:
              </span>
              <div className="flex flex-wrap gap-2">
                {dsaData.keyTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom: Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#c2a4ff]/10 text-[#c2a4ff] border border-[#c2a4ff]/20">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#c2a4ff] transition-colors">
                  {cert.title}
                </h4>

                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-[10px] truncate max-w-[120px]">
                  ID: {cert.credentialId}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c2a4ff] hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
