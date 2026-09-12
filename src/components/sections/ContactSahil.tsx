import React, { useState } from 'react';
import { Send, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ContactSahil: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);

    const mailto = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'Hello'}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailto;
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#0b080c] border-t border-white/5">
      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        
        {/* Title */}
        <div className="mb-20">
          <span className="text-xs font-mono tracking-[0.2em] text-[#c2a4ff] uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight uppercase leading-tight max-w-4xl">
            LET'S BUILD SOMETHING <br />
            <span className="text-[#c2a4ff]">TOGETHER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                DIRECT INBOX
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-2xl sm:text-4xl font-bold text-white hover:text-[#c2a4ff] transition-colors tracking-tight"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  PHONE / WHATSAPP
                </h5>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-[#c2a4ff] transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
              <div>
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  LOCATION
                </h5>
                <span className="text-base sm:text-lg font-medium text-white">
                  {profileData.location}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                ONLINE PROFILES
              </h5>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/5 hover:bg-[#c2a4ff] hover:text-black border border-white/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/5 hover:bg-[#c2a4ff] hover:text-black border border-white/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                {profileData.instagramUrl && (
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/5 hover:bg-[#c2a4ff] hover:text-black border border-white/10 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#130f18] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#c2a4ff]/20 border border-[#c2a4ff]/40 text-[#c2a4ff] text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Preparing message in your default email client...</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c2a4ff]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c2a4ff]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Startup / Company / University"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c2a4ff]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Inquiry Type *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#c2a4ff]"
                      defaultValue="Job Opportunity"
                    >
                      <option value="Job Opportunity" className="bg-[#130f18] text-white">Full-Time / Contract Role</option>
                      <option value="Internship" className="bg-[#130f18] text-white">AI / Full-Stack Internship</option>
                      <option value="Freelance Project" className="bg-[#130f18] text-white">Freelance MVP / AI System</option>
                      <option value="Business Inquiry" className="bg-[#130f18] text-white">Startup / Business Inquiry</option>
                      <option value="Collaboration" className="bg-[#130f18] text-white">Research / Open Source</option>
                      <option value="Other" className="bg-[#130f18] text-white">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Phaniraj, I saw your portfolio and would like to discuss an opportunity / project..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#c2a4ff] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#c2a4ff] hover:bg-white transition-all shadow-[0_0_20px_rgba(194,164,255,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>START A CONVERSATION</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
