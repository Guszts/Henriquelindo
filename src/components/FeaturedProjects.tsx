import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase">
            FEATURED PROJECTS
          </h2>

          <button
            onClick={() => setFilter(filter === 'featured' ? 'all' : 'featured')}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-slate-400 hover:text-purple-400 transition-colors uppercase"
          >
            <span>{filter === 'featured' ? 'VIEW ALL PROJECTS' : 'SHOW FEATURED'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#100f17] border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Project Preview Image with Number Tag */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                {/* Number Badge 01, 02, 03 */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#100f17]/90 backdrop-blur-md border border-white/10 text-slate-300">
                    {project.number}
                  </span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100f17] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Footer: Title, Subtitle, Arrow Button */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-t border-white/5 bg-[#100f17]">
                <div className="space-y-1">
                  <h3 className="font-display text-lg tracking-wider text-white uppercase group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {project.category}
                  </p>
                </div>

                {/* External link / open arrow button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  aria-label={`Open details for ${project.title}`}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-200 shrink-0 ml-3"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
