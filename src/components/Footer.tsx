import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Globe, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060d] border-t border-white/[0.08] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Col 1 & 2: Brand and summary */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow-md shadow-blue-600/40">
                BN
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Biz<span className="text-blue-500">Next</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Agência digital especializada no desenvolvimento de websites corporativos, lojas virtuais, sistemas web e interfaces de alta conversão para empresas que exigem excelência.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@biznext.com.br"
                aria-label="E-mail"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Serviços */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Desenvolvimento de Sites
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Design UI/UX
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Lojas Virtuais & E-commerce
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Sistemas Web & SaaS
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  SEO & Marketing Digital
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Suporte & Manutenção 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Empresa */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Empresa
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-blue-400 transition-colors">
                  Sobre a BizNext
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Portfólio de Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-blue-400 transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400 transition-colors">
                  Solicitar Proposta
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Conformidade */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Conformidade
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400 block">SLA 99.9% Garantido</span>
              </li>
              <li>
                <span className="text-slate-400 block">Conformidade com LGPD</span>
              </li>
              <li>
                <span className="text-slate-400 block">NDA & Segurança de Dados</span>
              </li>
              <li>
                <span className="text-slate-400 block">CNPJ: 45.123.890/0001-20</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} BizNext Soluções Digitais Ltda. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-semibold"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
