import React, { useEffect, useState, useRef } from 'react';
import { STATS_COUNTERS } from '../data/biznextData';

export const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(STATS_COUNTERS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = STATS_COUNTERS.map((item) =>
              Math.floor(item.value * easeProgress)
            );
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(STATS_COUNTERS.map((item) => item.value));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 border-y border-white/[0.07] bg-[#070c1a]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {STATS_COUNTERS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col space-y-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-blue-500/30 transition-colors"
            >
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-baseline">
                {stat.prefix && <span className="text-xl sm:text-2xl text-blue-400 mr-0.5">{stat.prefix}</span>}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
                  {counts[index]}
                </span>
                <span className="text-blue-500 ml-0.5">{stat.suffix}</span>
              </div>

              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                {stat.label}
              </span>

              <p className="text-[11px] text-slate-400 leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
