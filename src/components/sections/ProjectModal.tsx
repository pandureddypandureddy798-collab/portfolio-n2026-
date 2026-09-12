import React, { useState, useEffect } from 'react';
import {
  X,
  Github,
  Sparkles,
  AlertCircle,
  TrendingUp,
  GitBranch,
  ArrowUpRight,
} from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

type TabType = 'overview' | 'features' | 'architecture' | 'tech' | 'challenges';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#120e17] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image & Gradient Overlay */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#070508]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120e17] via-[#120e17]/70 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#c2a4ff]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Title & Badges */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#c2a4ff]/15 border border-[#c2a4ff]/30 text-[#c2a4ff]"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase"
            >
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#c2a4ff] font-mono mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 px-6 bg-black/40 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-xs font-mono tracking-wider uppercase transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#c2a4ff] text-[#c2a4ff] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            01. OVERVIEW & PROBLEM
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-3 text-xs font-mono tracking-wider uppercase transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'features'
                ? 'border-[#c2a4ff] text-[#c2a4ff] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            02. CORE FEATURES
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-3 text-xs font-mono tracking-wider uppercase transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#c2a4ff] text-[#c2a4ff] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            03. ARCHITECTURE & AI
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-3 text-xs font-mono tracking-wider uppercase transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'tech'
                ? 'border-[#c2a4ff] text-[#c2a4ff] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            04. TECH STACK & ROADMAP
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 max-h-[58vh] overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff] mb-2 font-semibold">
                  System Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                  {project.details.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-rose-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-2 font-semibold">
                    <AlertCircle className="w-4 h-4" />
                    <span>THE REAL-WORLD PROBLEM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.details.problem}
                  </p>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-[#c2a4ff]/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c2a4ff] mb-2 font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>THE TECHNICAL SOLUTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.details.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff] mb-2 font-semibold">
                Detailed Functional Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.details.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-md bg-[#c2a4ff]/20 border border-[#c2a4ff]/40 text-[#c2a4ff] flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-white/5 p-5 rounded-2xl border border-[#c2a4ff]/20">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <GitBranch className="w-4 h-4 text-[#c2a4ff]" />
                  <span>{project.details.architecture.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.details.architecture.description}
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff] font-semibold">
                  Step-by-Step Data Flow Pipeline
                </h5>
                {project.details.architecture.flowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-black/40 rounded-2xl border border-white/5"
                  >
                    <span className="text-xs font-mono font-bold text-[#c2a4ff] shrink-0">
                      Step {idx + 1}:
                    </span>
                    <span className="text-xs text-slate-300 font-light">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TECH STACK & ROADMAP */}
          {activeTab === 'tech' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff] mb-3 font-semibold">
                  Architectural Technology Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.details.techStack.map((stack) => (
                    <div
                      key={stack.category}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <h5 className="text-xs font-mono text-[#c2a4ff] mb-2 font-bold uppercase">
                        {stack.category}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {stack.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-slate-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h5 className="text-xs font-mono text-[#c2a4ff] mb-2 flex items-center gap-1.5 font-bold uppercase">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" /> Engineering Challenges
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                    {project.details.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h5 className="text-xs font-mono text-[#c2a4ff] mb-2 flex items-center gap-1.5 font-bold uppercase">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Future Roadmap
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                    {project.details.futureImprovements.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Action Links */}
        <div className="p-6 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-400">
              Verified Production Architecture
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB CODE</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold text-black bg-[#c2a4ff] hover:bg-white transition-all shadow-[0_0_20px_rgba(194,164,255,0.4)]"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>EXPLORE PROJECT</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

