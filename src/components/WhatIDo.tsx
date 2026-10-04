import React, { useState } from 'react';
import { PenTool, Code2, Box, Gauge, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

export const WhatIDo: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string, className = 'w-6 h-6') => {
    switch (id) {
      case 'web-design':
        return <PenTool className={className} />;
      case 'web-dev':
        return <Code2 className={className} />;
      case 'ui-ux':
        return <Box className={className} />;
      case 'optimization':
        return <Gauge className={className} />;
      default:
        return <Code2 className={className} />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading and Summary */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h2 className="flex flex-col font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-none">
              <span>WHAT</span>
              <span className="text-[#a78bfa]">I DO</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              I design, build and ship modern websites and web applications that are fast, responsive and user-focused.
            </p>
          </div>

          {/* Right Column: 4 Service Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_DATA.map((service) => {
              const isHighlight = service.highlighted;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`group relative p-6 rounded-xl flex flex-col justify-between cursor-pointer transition-all duration-300 min-h-[240px] ${
                    isHighlight
                      ? 'bg-[#151322] border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-400'
                      : 'bg-[#100f17] border border-white/5 hover:border-purple-500/30 hover:bg-[#14121e]'
                  }`}
                >
                  {/* Top: Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-lg ${
                        isHighlight
                          ? 'bg-purple-600/20 text-purple-300'
                          : 'bg-white/5 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-600/10'
                      } transition-colors`}
                    >
                      {getServiceIcon(service.id, 'w-6 h-6')}
                    </div>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="my-4 space-y-2">
                    <h3 className="font-display text-lg tracking-wider text-white uppercase group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom: Number Index & Subtle CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-slate-500 group-hover:text-purple-400 transition-colors">
                    <span className="font-mono text-xs font-semibold">{service.number}</span>
                    <span className="text-[11px] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#12111b] border border-purple-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-purple-600/20 text-purple-300">
                {getServiceIcon(selectedService.id, 'w-6 h-6')}
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                  Service {selectedService.number}
                </span>
                <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Deliverables */}
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech & Tools */}
            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tools & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              Close Overview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
