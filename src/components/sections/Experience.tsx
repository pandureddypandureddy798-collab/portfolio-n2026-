import React from 'react';
import { ArrowUpRight, Bot, Database, Globe, Zap } from 'lucide-react';

const valueOfferings = [
  {
    icon: <Bot className="w-6 h-6 text-[#c2a4ff]" />,
    title: "AI-Powered Applications",
    subtitle: "RAG, Agents & Intelligence",
    description:
      "Autonomous applications leveraging modern LLMs, hybrid vector retrieval (ChromaDB / FAISS), and schema-enforced tool calling to solve domain-specific enterprise problems.",
    businessValue: "Reduces operational overhead by automating complex manual research and data synthesis tasks with verifiable citations.",
    capabilities: ["Multi-Paper RAG Pipelines", "Autonomous Agents & Memory", "Prompt Engineering & Few-Shot", "Citation-Grounded Q&A"]
  },
  {
    icon: <Globe className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Full-Stack Platforms",
    subtitle: "Modern React & Python Backends",
    description:
      "Production-ready web applications built with TypeScript, React 18, and Tailwind on the frontend, powered by asynchronous FastAPI microservices and PostgreSQL.",
    businessValue: "Accelerates time-to-market with maintainable, typed codebases, high conversion UI/UX, and robust relational data schemas.",
    capabilities: ["React 18 & TypeScript", "FastAPI Asynchronous Microservices", "PostgreSQL & SQLAlchemy", "JWT Auth & Role-Based Access"]
  },
  {
    icon: <Database className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Data & Analytics Systems",
    subtitle: "Dashboards, Metrics & Pipelines",
    description:
      "Real-time visual dashboards, expense & recruitment analytics, and structured data pipelines converting raw inputs into actionable management metrics.",
    businessValue: "Empowers decision makers with transparent, real-time KPI tracking and automated trend analysis.",
    capabilities: ["Interactive Financial Dashboards", "Candidate Ranking Algorithms", "Data Modeling & Normalization", "Real-Time Filterable Aggregations"]
  },
  {
    icon: <Zap className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Workflow Automation",
    subtitle: "High-Efficiency Pipelines",
    description:
      "AI-driven automated document ingestion, ATS resume parsing, background asynchronous task scheduling, and real-time streaming notifications.",
    businessValue: "Cuts repetitive screening and manual document processing time by up to 80%, boosting team leverage.",
    capabilities: ["PDF / Document Parsing", "ATS Scoring & Keyword Matching", "Streaming Server-Sent Events (SSE)", "Background Task Processing"]
  }
];

export const ValueProposition: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 relative bg-[#0b080c]">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            ENGINEERING VALUE & ROI
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            WHAT I CAN <span className="text-[#c2a4ff]">BUILD</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-3 font-light leading-relaxed">
            Engineering digital software that moves beyond proof-of-concept into reliable, scalable, and high-impact business products.
          </p>
        </div>

        {/* 4 Business Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueOfferings.map((card, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-xs font-mono text-[#c2a4ff] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#c2a4ff] transition-colors mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Business ROI Banner */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#c2a4ff] font-bold block mb-1">
                    BUSINESS VALUE:
                  </span>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {card.businessValue}
                  </p>
                </div>
              </div>

              {/* Capabilities Pills */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {card.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Conversion Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-white/5 via-[#c2a4ff]/10 to-white/5 border border-[#c2a4ff]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">Have a product challenge or business requirement?</h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              Let's evaluate how AI automation and robust web engineering can create tangible leverage.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-[#c2a4ff] hover:bg-white shadow-[0_0_20px_rgba(194,164,255,0.4)] transition-all hover:scale-105"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

