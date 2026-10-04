import React from 'react';
import { Cpu, Target, Code, Clock, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/biznextData';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="sobre" className="py-20 sm:py-28 border-t border-white/[0.07] bg-[#060a16] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              DIFERENCIAIS EXCLUSIVOS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Por que escolher a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                BizNext?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Não entregamos apenas código ou layouts bonitos. Construímos plataformas digitais de alta performance que convertem visitantes em clientes pagantes e sustentam o crescimento acelerado da sua empresa.
            </p>

            <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-bold text-white block">
                  Garantia de Qualidade & SLA Contratual
                </span>
                <span className="text-xs text-slate-300 leading-relaxed block">
                  Garantia integral de estabilidade e suporte técnico próximo pós-lançamento sem custos ocultos.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {WHY_CHOOSE_US.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090e1e]/80 border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#0c142b] transition-all duration-300 flex flex-col space-y-3 group shadow-lg shadow-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {getPillarIcon(pillar.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
