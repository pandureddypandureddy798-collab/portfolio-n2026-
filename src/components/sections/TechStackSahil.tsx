import { skillCategories } from '../../data/skills';

const techPillars = [
  {
    title: "AI & FULL-STACK DEVELOPMENT",
    subtitle: "End-to-End Production Application Engineering",
    description:
      "Architecting AI-powered products, asynchronous backend microservices, and modern responsive frontends using Python, React, TypeScript, FastAPI, PostgreSQL, and SQL. Focused on low-latency token streaming and clean component architecture.",
    skills: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS", "Flask", "Node.js", "Java", "C", "HTML5/CSS3"]
  },
  {
    title: "AI & DATA SYSTEMS",
    subtitle: "RAG Retrieval, Multi-Agent & Vector Pipelines",
    description:
      "Engineering robust Generative AI workflows with Large Language Models, contextual prompt engineering, hybrid vector retrieval (ChromaDB / FAISS), and stateful agent coordination. Containerized with Docker and version-controlled with Git.",
    skills: ["Generative AI", "LLMs", "RAG Pipelines", "AI Agents", "Multi-Agent Systems", "ChromaDB", "FAISS", "PostgreSQL", "Docker", "Git/GitHub"]
  }
];

export const TechStackSahil: React.FC = () => {
  // Collect all unique skills
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-[#0b080c]/90">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c2a4ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.2em] text-[#c2a4ff] uppercase">
            TOOLKIT & EXPERTISE
          </span>
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#c2a4ff] uppercase">
            TECH STACK
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light">
            Core technologies and architectures utilized to develop intelligent, scalable web software.
          </p>
        </div>

        {/* Interactive Floating Tech Badges Matrix */}
        <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto mb-16">
          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="techstack-item group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#c2a4ff] font-mono text-xs font-bold group-hover:scale-110 transition-transform">
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-[10px] font-mono text-slate-300 mt-2 truncate max-w-[70px] text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Two Detailed Reference Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(194,164,255,0.12)] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#c2a4ff] tracking-widest uppercase">
                  {pillar.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pillar.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
