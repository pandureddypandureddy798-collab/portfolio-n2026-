import React from 'react';
import { ArrowUpRight, BarChart3, Bot, CheckCircle2, Globe, Zap } from 'lucide-react';

const clientOfferings = [
  {
    icon: <Bot className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Custom AI & LLM Systems",
    target: "Startups & Companies needing AI leverage",
    description:
      "End-to-end development of custom AI assistants, automated document parsers, multi-paper RAG systems, and semantic vector search engines tailored to your proprietary knowledge base.",
    features: ["Domain-Specific RAG Pipelines", "Document & PDF Extraction", "Private Context Grounding", "Low-Latency SSE Streaming"]
  },
  {
    icon: <Globe className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Full-Stack Web Applications & MVPs",
    target: "Founders looking to launch fast",
    description:
      "Rapid prototyping and production deployment of scalable modern web apps using React 18, TypeScript, Tailwind CSS, FastAPI, and PostgreSQL with enterprise-ready auth and clean APIs.",
    features: ["Modern Responsive UI/UX", "JWT Auth & Session Handling", "Normalized PostgreSQL Schemas", "Scalable REST APIs"]
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Business Dashboards & Analytics",
    target: "Operations & Management Teams",
    description:
      "High-clarity data dashboards and financial/recruitment analytics platforms that aggregate complex multi-source data into real-time interactive decision metrics.",
    features: ["Interactive Charts & Filters", "Role-Based Data Access", "Exportable PDF/Excel Reports", "KPI Health Indicators"]
  },
  {
    icon: <Zap className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Workflow Automation & AI Agents",
    target: "Teams drowning in manual processes",
    description:
      "Automate repetitive operational bottlenecks—from resume screening and ATS matching to automated notification pipelines and scheduled background jobs.",
    features: ["Autonomous Multi-Step Workflows", "Resume ATS Scoring", "Background Queue Processing", "Third-Party API Integrations"]
  }
];

export const ClientServices: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0b080c] border-t border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            STARTUP & BUSINESS SOLUTIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            NEED A <span className="text-[#c2a4ff]">DIGITAL PRODUCT?</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Helping founders, business owners, and engineering teams conceptualize, architect, and ship intelligent digital products.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {clientOfferings.map((offering, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {offering.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    SERVICE 0{idx + 1}
                  </span>
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c2a4ff] block mb-1 font-semibold">
                  {offering.target}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#c2a4ff] transition-colors mb-3">
                  {offering.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {offering.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {offering.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#c2a4ff] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#c2a4ff] hover:text-white transition-colors"
                >
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Generation CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/5 via-[#c2a4ff]/10 to-white/5 border border-[#c2a4ff]/30 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono tracking-widest text-[#c2a4ff] uppercase font-semibold">
            FROM CONCEPT TO PRODUCTION
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have an idea for an AI app, MVP, or internal tool?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            I offer end-to-end technical execution: architectural planning, database design, backend APIs, and polished React frontends.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-[#c2a4ff] hover:bg-white transition-all shadow-[0_0_25px_rgba(194,164,255,0.4)] hover:scale-105"
            >
              <span>LET'S DISCUSS YOUR IDEA</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

