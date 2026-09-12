import React from 'react';
import { BrainCircuit, Database, Bot, Zap } from 'lucide-react';

const aiPillars = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Large Language Models & Prompt Engineering",
    description:
      "Deep understanding of transformer architectures, attention mechanisms, few-shot prompt crafting, structured JSON output enforcement, and parameter tuning for deterministic tasks.",
    tags: ["LLMs", "Context Windows", "System Prompting", "JSON Mode"]
  },
  {
    icon: <Database className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Advanced RAG Pipelines & Vector Search",
    description:
      "Architecting enterprise RAG using hierarchical chunking, vector embedding models, hybrid search (dense embeddings + sparse BM25), semantic re-ranking, and citation-accurate grounding.",
    tags: ["ChromaDB", "FAISS", "Hybrid Search", "Cross-Encoders"]
  },
  {
    icon: <Bot className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Autonomous Agents & Multi-Agent Systems",
    description:
      "Designing stateful agentic workflows with dynamic tool-calling, reflection loops, task decomposition, memory management, and inter-agent peer communication.",
    tags: ["Tool Calling", "Reflection", "Multi-Agent", "LangGraph / CrewAI"]
  },
  {
    icon: <Zap className="w-6 h-6 text-[#c2a4ff]" />,
    title: "Production AI Serving & Asynchronous APIs",
    description:
      "Building high-throughput FastAPI inference microservices with token streaming, background queue processing, rate limiting, and defensive output guardrails.",
    tags: ["FastAPI", "SSE Streaming", "Redis Queues", "Guardrails"]
  }
];

export const AiSpecialization: React.FC = () => {
  return (
    <section id="ai-focus" className="py-28 relative overflow-hidden bg-[#0e0a12] border-y border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#c2a4ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#c2a4ff] uppercase">
            MY AI ARCHITECTURE & STACK
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-2 uppercase">
            BUILDING WITH <span className="text-[#c2a4ff]">ARTIFICIAL INTELLIGENCE</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-3 font-light leading-relaxed">
            Differentiating modern software by embedding autonomous reasoning, semantic vector retrieval, and agentic execution pipelines into production web systems.
          </p>
        </div>

        {/* Visual AI Pipeline Architecture Diagram */}
        <div className="mb-16 bg-[#130f18] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-8 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c2a4ff] animate-ping"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#c2a4ff] font-semibold">
                Autonomous RAG & Agentic Execution Pipeline
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Latency Optimized • Zero Hallucination Guardrails
            </span>
          </div>

          {/* Pipeline Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c2a4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#c2a4ff] font-bold">STAGE 01</span>
                <h4 className="text-sm font-bold text-white mt-1 mb-2">Ingestion & Chunking</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Multi-format parsing (PDFs, docs, APIs) with recursive semantic chunking.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                PyMuPDF • Unstructured
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c2a4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#c2a4ff] font-bold">STAGE 02</span>
                <h4 className="text-sm font-bold text-white mt-1 mb-2">Vector Indexing</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Dense embeddings paired with inverted indices for sparse BM25 matching.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                ChromaDB • FAISS
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c2a4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#c2a4ff] font-bold">STAGE 03</span>
                <h4 className="text-sm font-bold text-white mt-1 mb-2">Hybrid Retrieval</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Cross-encoder reranking filters irrelevant context and maximizes recall.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Cross-Encoder Rerank
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c2a4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#c2a4ff] font-bold">STAGE 04</span>
                <h4 className="text-sm font-bold text-white mt-1 mb-2">Agent Reasoning</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  LLM task execution with schema-enforced tool calling and validation loops.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                LangChain • Tool Calling
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c2a4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#c2a4ff] font-bold">STAGE 05</span>
                <h4 className="text-sm font-bold text-white mt-1 mb-2">Async Serving</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Real-time SSE token streaming directly to React clients with sub-400ms latency.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                FastAPI • React SSE
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of AI Specialization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-3xl bg-[#130f18] border border-white/10 hover:border-[#c2a4ff]/50 transition-all duration-300 group shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c2a4ff] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

