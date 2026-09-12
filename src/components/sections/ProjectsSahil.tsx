import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCategory, ProjectItem } from '../../types';
import { ProjectModal } from './ProjectModal';

const categories: ProjectCategory[] = [
  'ALL',
  'AI / ML',
  'GENERATIVE AI',
  'FULL STACK',
  'DATA ANALYTICS',
];

export const ProjectsSahil: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#0b080c]/95">
      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-mono tracking-[0.2em] text-[#c2a4ff] uppercase">
            SELECTED WORKS
          </span>
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight mt-2 text-white uppercase">
            FEATURED <span className="text-[#c2a4ff]">PROJECTS</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light">
            Real-world applications engineered with Artificial Intelligence, Generative AI, and full-stack architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#c2a4ff] text-black font-bold shadow-[0_0_20px_rgba(194,164,255,0.4)] scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid matching reference work boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="work-box p-7 sm:p-9 flex flex-col justify-between group"
            >
              <div>
                {/* Title and Category */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#c2a4ff] block mb-1">
                      {project.category.join(' • ')}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#c2a4ff] transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  {project.featured && (
                    <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-mono bg-[#c2a4ff]/20 text-[#c2a4ff] border border-[#c2a4ff]/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> FLAGSHIP
                    </span>
                  )}
                </div>

                {/* Project Image Preview with Overlay */}
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-black border border-white/10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                  {/* Quick Inspect Hover Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute bottom-4 right-4 p-3 rounded-full bg-[#0b080c]/90 border border-white/20 text-white shadow-xl hover:bg-[#c2a4ff] hover:text-black transition-all group-hover:scale-110"
                    aria-label="View Project Details"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm font-mono text-[#c2a4ff] mb-2">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-black bg-[#c2a4ff] hover:bg-white transition-all font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(194,164,255,0.3)] hover:scale-105"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#c2a4ff] text-black hover:bg-white transition-all shadow-[0_0_15px_rgba(194,164,255,0.3)] flex items-center gap-1.5"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
