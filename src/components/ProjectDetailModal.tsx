import React from 'react';
import { X, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectData } from '../data/biznextData';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#080d1c] border border-blue-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/80 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/90 transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Visual Showcase */}
        <div className="relative aspect-video w-full overflow-hidden bg-black/50">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1c] via-[#080d1c]/40 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6">
            <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/30">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {project.description}
          </p>

          {/* Key Metric Impact */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Impacto Mensurável
              </span>
              <span className="text-sm sm:text-base font-extrabold text-white">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Two-Column Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Desafio do Cliente
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.clientChallenge}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Solução Desenvolvida
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Stack Tecnológica
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onStartSimilarProject(title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-blue-600/30"
            >
              <span>Quero um projeto similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
            >
              Voltar ao Portfólio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
