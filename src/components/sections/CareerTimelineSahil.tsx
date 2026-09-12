import { MapPin } from 'lucide-react';

interface TimelineNode {
  year: string;
  title: string;
  subtitle: string;
  location: string;
  type: 'Education' | 'Experience' | 'Hackathon';
  score?: string;
  description: string;
}

const timelineNodes: TimelineNode[] = [
  {
    year: "2023 - PRESENT",
    title: "AI & Full-Stack Project Lead",
    subtitle: "Independent & Academic Engineering",
    location: "India",
    type: "Experience",
    description:
      "Architected autonomous Generative AI applications including multi-paper RAG pipelines, LLM research assistants, and multimodal WebGL platforms using Python, FastAPI, React, and PostgreSQL."
  },
  {
    year: "2020 - 2024",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "JNTUH University College of Engineering, Manthani",
    location: "Telangana, India",
    type: "Education",
    score: "CGPA 8.00",
    description:
      "Graduated with distinction with high academic standing. Focused on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and Distributed Systems."
  },
  {
    year: "2022 - 2024",
    title: "Hackathon Builder & Finalist",
    subtitle: "University Technical Innovation Fest",
    location: "Telangana, India",
    type: "Hackathon",
    score: "Finalist Award",
    description:
      "Selected as finalist for architecting and prototyping an interactive AI web platform under time constraints. Demonstrated rapid full-stack prototyping and AI integration."
  },
  {
    year: "2018 - 2020",
    title: "Intermediate (Class XII - MPC)",
    subtitle: "Telangana Model Junior College",
    location: "Telangana, India",
    type: "Education",
    score: "96.7%",
    description:
      "Ranked among top merit tier students across Telangana state with 96.7% in Mathematics, Physics, and Chemistry (MPC)."
  },
  {
    year: "2017 - 2018",
    title: "Secondary School Certificate (SSC - Class X)",
    subtitle: "Telangana Model School",
    location: "Telangana, India",
    type: "Education",
    score: "10.0 / 10.0 (100%)",
    description:
      "Achieved a flawless 10.0 GPA (100%) statewide distinction in state board examinations."
  }
];

export const CareerTimelineSahil: React.FC = () => {
  return (
    <section id="career" className="py-28 relative overflow-hidden bg-[#0b080c]">
      <div className="w-[92%] max-w-[1500px] mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-24">
          <span className="text-xs font-mono tracking-[0.2em] text-[#c2a4ff] uppercase">
            MILESTONES & JOURNEY
          </span>
          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-t from-[#7f40ff] to-white uppercase">
            CAREER & <span className="text-[#c2a4ff]">EDUCATION</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light">
            Verified academic distinctions, software engineering milestones, and hackathon accomplishments.
          </p>
        </div>

        {/* Center Timeline */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="career-timeline-line hidden md:block" />

          <div className="space-y-16 relative">
            {timelineNodes.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center justify-between gap-8 relative"
                >
                  {/* Left Side Content or Year */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven ? 'md:text-right' : 'md:order-last md:text-left'
                    }`}
                  >
                    <div className="p-7 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(194,164,255,0.1)] group">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#c2a4ff]">
                          {item.type}
                        </span>
                        {item.score && (
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#c2a4ff]/20 text-[#c2a4ff] border border-[#c2a4ff]/30">
                            {item.score}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#c2a4ff] transition-colors">
                        {item.title}
                      </h3>

                      <h4 className="text-sm font-medium text-slate-300 mt-1 mb-3">
                        {item.subtitle}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-4">
                        {item.description}
                      </p>

                      <div className={`flex items-center gap-3 text-xs font-mono text-slate-400 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#c2a4ff]" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Pulsing Dot */}
                  <div className="hidden md:flex items-center justify-center z-20">
                    <div className="career-dot" />
                  </div>

                  {/* Right Side Year Display */}
                  <div
                    className={`w-full md:w-[45%] text-left hidden md:block ${
                      isEven ? 'md:order-last' : 'md:text-right'
                    }`}
                  >
                    <span className="font-mono text-3xl font-extrabold text-white/20 tracking-wider">
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
