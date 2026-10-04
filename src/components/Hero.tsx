import React from 'react';
import { ArrowRight, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HERO_CONTENT } from '../data/biznextData';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-cyber-grid">
      {/* Volumetric background lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Cybernetic geometric lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-blue-500/20 rounded-full" />
        <div className="absolute top-1/2 right-12 w-32 h-32 border border-blue-400/10 rounded-2xl rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Transformamos ideias em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                experiências digitais.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 border border-blue-400/40"
              >
                <span>{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-blue-500/40"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust Highlights Strip below hero */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HERO_CONTENT.statsHighlights.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-0.5">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Notebook & Dashboard Mockup */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Luminous blue glow behind laptop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Mockup Frame */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-950/60 bg-[#070b16] group">
              {/* Laptop screen mock image */}
              <img
                src={HERO_CONTENT.heroMockupImage}
                alt="Mockup do site BizNext em notebook 3D"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating tech badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070b16]/90 backdrop-blur-md border border-blue-500/30 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                    Engenharia Digital v2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
