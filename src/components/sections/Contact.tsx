import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  AlertCircle,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate sending message or preparing mailto link
    setSubmitted(true);

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hi Phaniraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="LET'S BUILD SOMETHING TOGETHER"
          subtitle="Interested in working together, discussing an AI project, or exploring an opportunity? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Direct Channels (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 bg-dark-900/90 border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-2">
                Let's Connect
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Whether you're looking for an AI Engineer, a Full-Stack developer for your team, or a collaborative builder for an innovative project, my inbox is always open.
              </p>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start justify-between p-3.5 rounded-xl bg-dark-850/80 border border-white/5 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white bg-dark-900 hover:bg-dark-800 border border-white/5 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-850/80 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-850/80 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Find me on:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>
                    Thank you! Preparing message to dispatch via your default email client.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Opportunity / Collaboration / Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hello Phaniraj, I was impressed by your AI & Full-Stack projects..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
