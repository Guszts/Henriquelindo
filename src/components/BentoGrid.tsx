import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TOOLKIT_ITEMS, PROCESS_STEPS } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface BentoGridProps {
  onContactClick: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onContactClick }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section id="toolkit" className="py-16 sm:py-20 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: MY TOOLKIT (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#100f17] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  MY TOOLKIT
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                  12 Tech Stack
                </span>
              </div>

              {/* 4x3 Grid of Technologies */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {TOOLKIT_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => setActiveTooltip(item.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="relative group p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/40 hover:bg-[#181625] transition-all duration-200 flex flex-col items-center justify-center text-center cursor-default"
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-slate-300 group-hover:text-purple-300 transition-colors mb-2">
                      <TechIcon name={item.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-200 transition-colors truncate max-w-full">
                      {item.name}
                    </span>

                    {/* Tooltip on hover */}
                    {activeTooltip === item.name && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 px-2.5 py-1 rounded bg-[#1c1a2c] border border-purple-500/40 shadow-xl whitespace-nowrap pointer-events-none">
                        <span className="text-[10px] font-medium text-purple-200">
                          {item.level}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Continuous exploration</span>
              <span className="font-mono text-purple-400">v2026.4</span>
            </div>
          </div>

          {/* Column 2: WORK PROCESS (4 cols on lg) */}
          <div id="process" className="lg:col-span-4 bg-[#100f17] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  WORK PROCESS
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                  4 Phases
                </span>
              </div>

              {/* Vertical Stepper Timeline */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-[#181625] border border-purple-500/50 flex items-center justify-center -translate-x-1/2 group-hover:border-purple-400 group-hover:bg-purple-600 transition-colors">
                      <span className="text-[10px] font-mono font-bold text-purple-300 group-hover:text-white">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="pl-4">
                      <h4 className="font-display text-base tracking-wider text-white uppercase group-hover:text-purple-300 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400">
              Iterative, collaborative & focused on quality.
            </div>
          </div>

          {/* Column 3: VIBRANT PURPLE CTA (3 cols on lg) */}
          <div className="lg:col-span-3 rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-[#9b62f5] via-[#8c4ef0] to-[#7828c8] text-white flex flex-col justify-between shadow-[0_0_40px_rgba(155,98,245,0.25)] relative overflow-hidden group">
            {/* Ambient pattern overlay */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-[0.95] tracking-wide text-white uppercase">
                LET'S BUILD SOMETHING AMAZING TOGETHER.
              </h3>
              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-medium">
                I'm open to new opportunities and exciting collaborations.
              </p>
            </div>

            {/* Dark Pill CTA Button */}
            <div className="relative z-10 mt-8">
              <button
                onClick={onContactClick}
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#111019] hover:bg-[#191724] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-white/10 group-hover:border-purple-300/40 shadow-xl"
              >
                <span>GET IN TOUCH</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
