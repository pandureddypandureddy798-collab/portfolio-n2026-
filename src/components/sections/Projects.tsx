import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Info,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectCategory, ProjectItem } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ProjectModal } from './ProjectModal';

const categories: ProjectCategory[] = [
  'ALL',
  'AI / ML',
  'GENERATIVE AI',
  'FULL STACK',
  'DATA ANALYTICS',
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Portfolio Showcase"
          title="Featured Engineering Projects"
          subtitle="Production-grade AI platforms, intelligent retrieval systems, and responsive full-stack applications solving complex real-world problems."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-dark-900 text-slate-400 hover:text-white hover:bg-dark-850 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between p-0 overflow-hidden group border border-white/10 hover:border-cyan-500/50"
            >
              <div>
                {/* Project Image Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-dark-950">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-dark-950/80 backdrop-blur-md border border-white/15 text-cyan-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                        <Sparkles className="w-2.5 h-2.5" /> FLAGSHIP
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-300 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-850 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-850 text-slate-400">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <Info className="w-4 h-4" />
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label={`${project.name} GitHub Repository`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                      aria-label={`${project.name} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
