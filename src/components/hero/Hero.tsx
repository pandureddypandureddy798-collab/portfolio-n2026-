import React from 'react';
import {
  Sparkles,
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  BrainCircuit,
  Bot,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { InteractiveCanvas } from './InteractiveCanvas';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Background Interactive Neural Net */}
      <InteractiveCanvas />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-950">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3"></span>
              <span>Open to AI & Full-Stack Opportunities</span>
            </div>

            {/* Intro and Name */}
            <div>
              <p className="text-slate-400 font-mono text-sm tracking-wide mb-1">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profileData.name}
              </h1>
              <h2 className="text-2xl sm:text-4xl font-bold mt-2 gradient-ai tracking-tight">
                {profileData.title}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              {profileData.subTitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-850/80 hover:bg-dark-800 border border-white/10 hover:border-cyan-500/40 shadow-sm transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Secondary Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400 text-sm">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI Visual / Developer Terminal (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none" />

            {/* Terminal / Code Visual Window */}
            <div className="w-full max-w-md bg-dark-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10 transition-all hover:border-cyan-500/30">
              
              {/* Terminal Window Header */}
              <div className="bg-dark-950/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  ai_agent_orchestrator.py
                </div>
                <div className="w-4" />
              </div>

              {/* Code / Visual Body */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
                <div className="text-slate-400">
                  <span className="text-indigo-400">from</span> ai_stack <span className="text-indigo-400">import</span> RagPipeline, AgentExecutor
                </div>
                <div className="text-slate-400">
                  <span className="text-indigo-400">from</span> fullstack <span className="text-indigo-400">import</span> FastAPI, ReactEngine
                </div>

                <div className="pt-2 text-cyan-400/90 font-semibold">
                  # Initializing Autonomous AI Engineer
                </div>

                <div className="bg-dark-950/60 rounded-xl p-3 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" /> LLM Reasoning:
                    </span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Vector Database:
                    </span>
                    <span className="text-cyan-400">ChromaDB / FAISS</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Bot className="w-3.5 h-3.5 text-purple-400" /> Multi-Agent Flow:
                    </span>
                    <span className="text-purple-400">ACTIVE</span>
                  </div>
                </div>

                <div className="text-slate-300 pt-1">
                  <span className="text-emerald-400">❯</span> engineer.build(<br />
                  &nbsp;&nbsp;focus=<span className="text-amber-300">"Real-World AI Applications"</span>,<br />
                  &nbsp;&nbsp;stack=[<span className="text-cyan-300">"Python"</span>, <span className="text-cyan-300">"FastAPI"</span>, <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"RAG"</span>]<br />
                  )
                </div>

                <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>Ready to deploy scalable intelligence.</span>
                </div>
              </div>

              {/* Bottom Tagline bar */}
              <div className="px-5 py-2.5 bg-dark-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>JNTUH UCE Manthani</span>
                <span className="text-cyan-400">CGPA 8.00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
