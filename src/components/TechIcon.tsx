import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name.toLowerCase()) {
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M12 7v10.5l4.5-1.5 1-10H12z" fill="currentColor" fillOpacity="0.2" />
          <text x="12" y="14" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">5</text>
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
          <path d="M12 7v10.5l4.5-1.5 1-10H12z" fill="currentColor" fillOpacity="0.2" />
          <text x="12" y="14" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">3</text>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">JS</text>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">TS</text>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'next.js':
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 16V8l7.5 9.5" />
          <path d="M15 8v4" />
        </svg>
      );
    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 12c1-2 2.5-3 4.5-3 3 0 3.5 3 6.5 3 2 0 3-1 4-3-1 2-2.5 3-4.5 3-3 0-3.5-3-6.5-3-2 0-3 1-4 3z" />
          <path d="M3 17c1-2 2.5-3 4.5-3 3 0 3.5 3 6.5 3 2 0 3-1 4-3-1 2-2.5 3-4.5 3-3 0-3.5-3-6.5-3-2 0-3 1-4 3z" />
        </svg>
      );
    case 'node.js':
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2l8 4.6v9.2l-8 4.6-8-4.6V6.6L12 2z" />
          <path d="M12 12l8-4.6" />
          <path d="M12 12v9.4" />
          <path d="M12 12L4 7.4" />
        </svg>
      );
    case 'git & github':
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="9" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6" />
          <path d="M9 6h4a5 5 0 0 1 5 5v-2" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="15" cy="12" r="3" />
          <path d="M6 3h6v6H6z" />
          <path d="M12 3h6a3 3 0 0 1 0 6h-6z" />
          <path d="M6 9h6v6H6z" />
          <path d="M6 15a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-3H6z" />
        </svg>
      );
    case 'vs code':
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17 3l4 3v12l-4 3-10-8 10-2V7z" />
          <path d="M3 8.5l4.5 3.5L3 15.5" />
          <path d="M17 8.5L7.5 15.5" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 18L10 3l3 6-4 3 6 8-11-2z" />
          <path d="M15 9l5 9-9 3 4-12z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
};
