import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ArrowUpRight, Github, Linkedin, Figma, Globe, Clock, MapPin } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'contact@creativedev.studio';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'Web Development', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Trio: CONTACT | Circular Avatar | LET'S CONNECT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14 pb-12 border-b border-white/10">
          {/* Left Title: CONTACT */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
              CONTACT
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto lg:mx-0">
              Have an ambitious project in mind? Let's discuss requirements, timeline, and deliverables.
            </p>
          </div>

          {/* Center: Circular Portrait Badge */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-60 blur-sm group-hover:opacity-100 transition duration-500" />

              {/* Avatar Image Frame */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-purple-400/60 shadow-[0_0_35px_rgba(168,85,247,0.35)] bg-[#12111b]">
                <img
                  src={HERO_DATA.avatarImage}
                  alt="Developer Avatar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Active Dot */}
              <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-[#0b0b0e] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0b0b0e]" />
              </div>
            </div>

            <span className="mt-3 text-[11px] font-mono tracking-wider text-purple-300 uppercase">
              Available For Q2/Q3 Work
            </span>
          </div>

          {/* Right Title: LET'S CONNECT */}
          <div className="lg:col-span-4 text-center lg:text-right space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
              Socials & Profiles
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
              LET'S CONNECT
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto lg:ml-auto lg:mr-0">
              Follow along on GitHub, connect on LinkedIn, or inspect design systems on Figma.
            </p>
          </div>
        </div>

        {/* Two-Column Working Area: Contact Form + Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Copy Email Card */}
            <div className="p-6 rounded-2xl bg-[#100f17] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="font-mono text-sm sm:text-base text-white hover:text-purple-300 transition-colors block break-all font-semibold"
              >
                {emailAddress}
              </a>
            </div>

            {/* Availability details */}
            <div className="p-6 rounded-2xl bg-[#100f17] border border-white/10 space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Response Time</span>
                  <span className="text-slate-400">Within 24 hours on business days</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Location & Remote</span>
                  <span className="text-slate-400">Available worldwide (UTC-3 / EST compatible)</span>
                </div>
              </div>
            </div>

            {/* Social Links List */}
            <div className="p-6 rounded-2xl bg-[#100f17] border border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                External Profiles
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white transition-colors text-xs font-medium border border-white/5"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white transition-colors text-xs font-medium border border-white/5"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="https://figma.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white transition-colors text-xs font-medium border border-white/5"
                >
                  <span className="flex items-center gap-2">
                    <Figma className="w-4 h-4 text-purple-400" />
                    <span>Figma</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white transition-colors text-xs font-medium border border-white/5"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" />
                    <span>Dribbble</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#100f17] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-2xl text-white tracking-wide uppercase mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below and I'll get back to you promptly with availability and project estimates.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-purple-950/40 border border-purple-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 text-purple-300 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl text-white uppercase tracking-wider">
                  Message Dispatched
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! Your inquiry has been received. I will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-semibold uppercase tracking-wider text-purple-400 hover:text-purple-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14121f] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="Web Development">Web Development (React / Next.js / TypeScript)</option>
                    <option value="Web Design">Web Design & Art Direction</option>
                    <option value="UI/UX Design">UI/UX Design System</option>
                    <option value="Optimization">Performance & Core Web Vitals Optimization</option>
                    <option value="Full Project">End-to-End Product Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, scope, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
