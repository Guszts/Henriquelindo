import React, { useState } from 'react';
import {
  Globe,
  Layout,
  ShoppingBag,
  TrendingUp,
  Server,
  ShieldCheck,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_LIST, ServiceData } from '../data/biznextData';

interface ServicesSectionProps {
  onRequestService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService }) => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const getServiceIcon = (name: string, className = 'w-6 h-6') => {
    switch (name) {
      case 'Globe':
        return <Globe className={className} />;
      case 'Layout':
        return <Layout className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Globe className={className} />;
    }
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            NOSSAS SOLUÇÕES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serviços Digitais de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Alta Precisão
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Combinamos arquitetura moderna, design focado no usuário e engenharia robusta para entregar plataformas que aceleram o crescimento do seu negócio.
          </p>
        </div>

        {/* 6 Modern Cards Grid with Glassmorphism & Subtle Blue Lighting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-[#090e1e]/70 backdrop-blur-md border border-white/[0.08] hover:border-blue-500/50 hover:bg-[#0c142b]/85 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1"
            >
              {/* Subtle top-right index tag */}
              <div className="absolute top-6 right-6 font-mono text-xs font-bold text-slate-600 group-hover:text-blue-400 transition-colors">
                0{index + 1}
              </div>

              <div>
                {/* Icon Container with Blue Lighting */}
                <div className="w-13 h-13 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300 mb-6 shadow-md shadow-blue-950/50">
                  {getServiceIcon(service.iconName, 'w-6 h-6')}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* Card Footer with "Saiba mais" Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-1.5">
                  {service.technologies.slice(0, 2).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#090e1f] border border-blue-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/60 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              aria-label="Fechar detalhes"
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                {getServiceIcon(selectedService.iconName, 'w-6 h-6')}
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                  Solução Especializada
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.shortDescription}
            </p>

            {/* Deliverables */}
            <div className="mb-6 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                O que está incluído nesta entrega:
              </h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/30 text-xs text-slate-300 mb-6">
              <span className="font-bold text-blue-300 block mb-1">Ideal para:</span>
              <span>{selectedService.idealFor}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const serviceTitle = selectedService.title;
                  setSelectedService(null);
                  onRequestService(serviceTitle);
                }}
                className="flex-1 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-600/30 text-center"
              >
                Solicitar orçamento para este serviço
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
