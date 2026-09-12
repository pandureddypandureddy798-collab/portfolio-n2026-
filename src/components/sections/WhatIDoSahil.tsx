import React, { useState } from 'react';
import { ArrowUpRight, BrainCircuit, Code, Terminal } from 'lucide-react';

const services = [
  {
    number: "01",
    title: "AI & LLM SYSTEMS",
    tagline: "RAG Pipelines, AI Agents & Neural Intelligence",
    description:
      "Engineering production Retrieval-Augmented Generation (RAG) pipelines, autonomous multi-agent systems, semantic vector retrieval (ChromaDB / FAISS), and asynchronous FastAPI AI backends with streaming responses.",
    tags: ["LLMs", "RAG", "Multi-Agent Workflows", "FastAPI", "Vector DBs", "Prompt Engineering"],
    icon: <BrainCircuit className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "02",
    title: "FULL-STACK DEVELOPMENT",
    tagline: "Scalable APIs & Modern React Ecosystem",
    description:
      "Developing end-to-end full-stack web applications with React, TypeScript, and Tailwind CSS on the frontend, and robust Python/FastAPI/Node.js backends connected to normalized relational PostgreSQL databases.",
    tags: ["React", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "REST APIs", "Docker"],
    icon: <Code className="w-5 h-5 text-[#c2a4ff]" />
  },
  {
    number: "03",
    title: "PROBLEM SOLVING & DSA",
    tagline: "250+ Conquered Algorithmic Challenges",
    description:
      "Rigorous foundations in Data Structures and Algorithms. Experienced in optimizing time and space complexity across graph traversals, dynamic programming, monotonic stacks, and tree structures.",
    tags: ["Data Structures", "Algorithms", "Optimization", "LeetCode", "GeeksforGeeks", "Java", "C"],
    icon: <Terminal className="w-5 h-5 text-[#c2a4ff]" />
  }
];

export const WhatIDoSahil: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="what-i-do" className="py-24 relative overflow-hidden bg-[#0b080c]">
      <div className="w-[92%] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Area */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-[0.2em] text-[#c2a4ff] uppercase">
              CAPABILITIES & EXPERTISE
            </span>
            <h2 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-[0.95] uppercase">
              WHAT I <br />
              <span className="text-[#c2a4ff]">DO</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2 font-light">
              Transforming complex algorithmic and machine learning concepts into production-ready, user-facing applications with high performance.
            </p>
          </div>

          {/* Right Expandable Services Cards */}
          <div className="lg:col-span-8 space-y-4">
            {services.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#14101a] border-[#c2a4ff]/50 shadow-[0_10px_40px_rgba(194,164,255,0.15)]'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono text-[#c2a4ff] font-bold">
                        {item.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${isActive ? 'rotate-45 bg-[#c2a4ff] text-black' : 'text-slate-400'}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`pt-4 transition-all duration-500 ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <p className="text-xs font-mono text-[#c2a4ff] mb-2 uppercase">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light max-w-2xl">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
