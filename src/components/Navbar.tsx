import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090d]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white hover:text-purple-300 transition-colors flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-display text-base text-purple-400 group-hover:border-purple-500/50 transition-colors">
            CD
          </span>
          <span className="font-display tracking-wider text-xl uppercase">Creative Dev</span>
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-slate-300">
          <a href="#services" className="hover:text-purple-400 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </a>
          <a href="#toolkit" className="hover:text-purple-400 transition-colors">
            Toolkit
          </a>
          <a href="#process" className="hover:text-purple-400 transition-colors">
            Process
          </a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600/90 hover:bg-purple-600 rounded-md transition-all duration-200 border border-purple-400/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0d14] border-b border-white/10 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-semibold tracking-wider uppercase text-slate-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-purple-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#toolkit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-purple-400 transition-colors"
            >
              Toolkit
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-purple-400 transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 rounded-md"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
