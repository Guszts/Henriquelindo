import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/biznextData';

export const WorkProcess: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 border-t border-white/[0.07] bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            METODOLOGIA TESTADA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Como Tiramos seu Projeto do Papel
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Nosso fluxo de trabalho ágil garante previsibilidade de prazos, controle de custos e excelência técnica em cada etapa.
          </p>
        </div>

        {/* 4 Process Steps Connected */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-7 rounded-2xl bg-[#080d1c]/80 border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c142b] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Tag */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-mono text-lg font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-5">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Fase 0{idx + 1} de 04</span>
                <span className="text-blue-400 font-semibold">100% Transparente</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
