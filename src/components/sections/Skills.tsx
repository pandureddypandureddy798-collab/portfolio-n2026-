import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cpu, Eye, Layers, ShieldCheck, Terminal, Wrench } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Problem Deconstruction & Feasibility",
    tagline: "Understand the core pain point before writing code",
    description:
      "Deep dive into business and domain requirements, edge cases, user workflows, and constraints. Evaluate technical feasibility, data availability, and latency budgets for AI components.",
    deliverables: ["Product Specification", "Feasibility Assessment", "Latency & Resource Budgets", "User Stories"],
    tools: ["System Diagrams", "User Mapping", "API Specs"],
    icon: <Eye className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "02",
    phase: "DESIGN",
    title: "User Experience & System Interaction",
    tagline: "Design clean, intentional, and high-conversion interfaces",
    description:
      "Draft intuitive component hierarchies, state models, and responsive layouts. Ensure accessibility (WCAG 2.1), micro-interactions, and instant feedback loops for AI inference states.",
    deliverables: ["Component Hierarchy", "State Flowcharts", "Accessible Wireframes", "Design Tokens"],
    tools: ["Tailwind CSS", "Figma Thinking", "Lucide Icons"],
    icon: <Layers className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "03",
    phase: "ARCHITECT",
    title: "System Architecture & Data Modeling",
    tagline: "Plan scalable, secure, and decoupled backends",
    description:
      "Design relational database schemas (PostgreSQL), vector indexing strategies (Chroma/FAISS), API contract specs, caching tiers, and asynchronous queuing for compute-heavy tasks.",
    deliverables: ["Normalized Schema & ERD", "Vector Chunking Strategy", "REST/OpenAPI Specs", "Auth & RBAC Flow"],
    tools: ["PostgreSQL", "SQLAlchemy", "Pydantic", "ChromaDB"],
    icon: <Cpu className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "04",
    phase: "BUILD",
    title: "Full-Stack & AI Implementation",
    tagline: "Develop robust frontend, backend, and agentic workflows",
    description:
      "Write modular TypeScript frontend components with strict typing, asynchronous FastAPI endpoints with real-time SSE token streaming, and resilient LLM prompt & tool-calling pipelines.",
    deliverables: ["React + TS Frontend", "FastAPI Asynchronous Microservices", "RAG & LLM Agents", "Normalized DB Migrations"],
    tools: ["React 18", "TypeScript", "FastAPI", "Python", "LangChain"],
    icon: <Terminal className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "05",
    phase: "TEST",
    title: "Verification, Guardrails & Benchmarking",
    tagline: "Ensure algorithmic correctness and zero-hallucination outputs",
    description:
      "Rigorous testing across unit, integration, and algorithmic layers. Benchmark time/space complexity, test edge cases, and validate LLM outputs with citation verification and guardrails.",
    deliverables: ["Unit & Integration Tests", "Complexity Profiling (O(N))", "LLM Evaluation & Guardrails", "Security Audit"],
    tools: ["PyTest", "Postman", "Chrome DevTools", "JWT Validation"],
    icon: <ShieldCheck className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "06",
    phase: "DEPLOY",
    title: "Deployment, Monitoring & Iteration",
    tagline: "Ship to production with CI/CD and observability",
    description:
      "Containerize services with Docker, deploy to modern edge/cloud platforms (Vercel, Render), configure environmental secrets, verify live uptime, and iteratively optimize performance.",
    deliverables: ["Production Edge Deployment", "Docker Containers", "Performance Audits (CWV)", "Live Health Checks"],
    tools: ["Vercel", "Render", "Docker", "Git/GitHub Actions"],
    icon: <Wrench className="w-5 h-5 text-[#c2a4ff]" />
  }
];

export const DevProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0b080c]/95 border-y border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            HOW I BUILD
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            MY DEVELOPMENT <span className="text-[#c2a4ff]">PROCESS</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-3 font-light leading-relaxed">
            A disciplined, end-to-end engineering methodology from initial problem breakdown to production deployment.
          </p>
        </div>

        {/* 6-Step Horizontal Progress Selector */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#1a1422] border-[#c2a4ff] shadow-[0_0_20px_rgba(194,164,255,0.2)]'
                    : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#c2a4ff]' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c2a4ff] animate-ping" />}
                </div>
                <div className={`text-xs font-mono uppercase tracking-wider font-semibold truncate ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {step.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        {(() => {
          const current = processSteps[activeStep];
          return (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#130f18] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {current.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#c2a4ff] uppercase">
                        PHASE {current.number} • {current.phase}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-mono text-[#c2a4ff] font-light">
                    "{current.tagline}"
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed font-light pt-2">
                    {current.description}
                  </p>

                  <div className="pt-4 flex items-center gap-2">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
                      className="px-4 py-2 rounded-full text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300"
                    >
                      ← PREVIOUS
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0))}
                      className="px-4 py-2 rounded-full text-xs font-mono bg-[#c2a4ff] text-black font-bold hover:bg-white flex items-center gap-1.5"
                    >
                      <span>NEXT PHASE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Deliverables & Tools Column */}
                <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#c2a4ff] block mb-3 font-semibold">
                      KEY DELIVERABLES
                    </span>
                    <div className="space-y-2">
                      {current.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#c2a4ff] block mb-3 font-semibold">
                      TOOLING & STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

