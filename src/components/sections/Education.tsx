import React from 'react';
import { ArrowUpRight, CheckCircle2, FileDown } from 'lucide-react';
import { profileData } from '../../data/profile';

const recruiterProofPoints = [
  {
    title: "Builds Real-World Products, Not Just Toy Demos",
    description:
      "All projects represent functional, multi-layer software architectures with real databases, authentication, API error handling, and production-tested responsive interfaces.",
    badge: "PRODUCT BUILDER"
  },
  {
    title: "Strong AI + Full-Stack Dual Competency",
    description:
      "Can architect the LLM prompt and RAG retrieval strategy just as easily as building the React frontend, designing PostgreSQL relational schemas, or writing asynchronous FastAPI endpoints.",
    badge: "FULL-SPECTRUM SKILL"
  },
  {
    title: "Disciplined Algorithmic Problem Solving",
    description:
      "250+ solved challenges across LeetCode & GeeksforGeeks. Understands asymptotic time/space complexities (O(N), O(log N)), tree & graph traversals, and dynamic programming.",
    badge: "ALGORITHMIC RIGOR"
  },
  {
    title: "Strong Academic Foundation & Consistency",
    description:
      "Graduated in Computer Science from JNTUH UCE Manthani with CGPA 8.00, Intermediate (96.7%), and SSC (100%). Demonstrated intellectual commitment and merit.",
    badge: "HIGH RIGOR"
  },
  {
    title: "Fast Learner with Product-First Thinking",
    description:
      "Quick to adopt modern libraries, tool-calling frameworks, vector search paradigms, and edge deployment platforms without requiring handholding.",
    badge: "AUTONOMOUS & ADAPTABLE"
  },
  {
    title: "Zero Ego, Highly Collaborative & Communicative",
    description:
      "Clear technical communication, clean self-documenting code with TypeScript types, disciplined Git version control, and an eagerness to solve meaningful engineering problems.",
    badge: "TEAM PLAYER"
  }
];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-[#0e0a12] border-t border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            RECRUITER & LEADERSHIP SUMMARY
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            WHY WORK <span className="text-[#c2a4ff]">WITH ME?</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Evidence-based qualifications for hiring managers, technical leads, and founders seeking high-leverage builders.
          </p>
        </div>

        {/* 6 Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recruiterProofPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 text-[#c2a4ff] border border-white/10 font-semibold">
                    {point.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#c2a4ff]" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#c2a4ff] transition-colors mb-3">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>0{idx + 1}</span>
                <span className="text-[#c2a4ff]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Immediate Actions Card */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/5 via-[#c2a4ff]/10 to-white/5 border border-[#c2a4ff]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                IMMEDIATE AVAILABILITY
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to bring value to your engineering team
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              Currently reviewing offers for AI/ML Engineer and Full-Stack Developer roles, high-impact internships, and ambitious startup collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-[#c2a4ff] hover:bg-white transition-all shadow-[0_0_20px_rgba(194,164,255,0.4)]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME</span>
            </a>
            <a
              href={`mailto:${profileData.email}?subject=Interview%20Invitation%20-%20AI%20%26%20Full-Stack%20Role`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all hover:border-[#c2a4ff]"
            >
              <span>SCHEDULE INTERVIEW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

