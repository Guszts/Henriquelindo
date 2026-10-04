import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, TrendingUp } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#111019] border border-purple-500/40 rounded-2xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative aspect-video w-full overflow-hidden bg-black/40">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111019] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-4 left-6">
            <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest">
              Project {project.number} · {project.category}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Metric Highlight */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
            <TrendingUp className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Measurable Impact
              </span>
              <span className="text-sm font-bold text-purple-300">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Two-column Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Client Challenge
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Architectural Solution
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
