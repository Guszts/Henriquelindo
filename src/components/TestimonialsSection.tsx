import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/biznextData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#050811] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            DEPOIMENTOS DE QUEM CONFIA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A satisfação das empresas que atendemos é nosso principal indicador de qualidade e compromisso.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#080d1c]/80 border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c142b] transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/40"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-3">
                {/* Result Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.result}</span>
                </div>

                {/* Author Info */}
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-400 block font-normal">
                    {item.role} · <strong className="text-slate-300">{item.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
