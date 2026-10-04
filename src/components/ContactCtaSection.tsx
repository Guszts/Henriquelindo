import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';

interface ContactCtaProps {
  preselectedService?: string;
}

export const ContactCtaSection: React.FC<ContactCtaProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'Desenvolvimento de Sites',
    budgetRange: 'R$ 5k a R$ 15k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Desenvolvimento de Sites',
        budgetRange: 'R$ 5k a R$ 15k',
        message: '',
      });
    }, 850);
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#050811] border-t border-white/[0.07] relative overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner / Callout */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            ORÇAMENTO SEM COMPROMISSO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pronto para transformar sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Presença Digital?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Preencha os dados abaixo para receber uma análise técnica preliminar e uma estimativa de investimento e cronograma em até 24 horas úteis.
          </p>
        </div>

        {/* Form and Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-[#080d1c] border border-blue-500/30 shadow-xl shadow-blue-950/40 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Canais de Atendimento Direto
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">E-mail Comercial</span>
                    <a href="mailto:contato@biznext.com.br" className="text-blue-400 hover:text-blue-300 transition-colors font-mono">
                      contato@biznext.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">WhatsApp & Telefone</span>
                    <span className="text-slate-300 font-mono">+55 (11) 98765-4321</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Prazo de Resposta</span>
                    <span className="text-slate-400">Em até 24 horas úteis com proposta personalizada</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Sede & Atendimento</span>
                    <span className="text-slate-400">São Paulo, SP · Atendimento remoto para todo o Brasil e exterior</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-blue-300 block mb-1">Confidencialidade Garantida:</span>
                Todas as informações enviadas são tratadas com sigilo absoluto e protegidas por acordo de não divulgação (NDA).
              </div>
            </div>
          </div>

          {/* Budget Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#080d1c] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/40 mx-auto flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Obrigado pelo contato! Nossa equipe técnica já está analisando as informações do seu projeto. Retornaremos em breve por e-mail ou WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider hover:bg-blue-600/50 transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Seu E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ana@suaempresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Sua Empresa Ltda"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Serviço Desejado
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1429] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Desenvolvimento de Sites">Desenvolvimento de Sites</option>
                      <option value="Design UI/UX">Design UI/UX</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="SEO e Marketing Digital">SEO e Marketing Digital</option>
                      <option value="Sistemas Web">Sistemas Web</option>
                      <option value="Suporte e Manutenção">Suporte e Manutenção</option>
                      <option value="Projeto Completo">Projeto Completo End-to-End</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Expectativa de Investimento
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1429] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="R$ 5k a R$ 15k">R$ 5.000 a R$ 15.000</option>
                      <option value="R$ 15k a R$ 30k">R$ 15.000 a R$ 30.000</option>
                      <option value="R$ 30k a R$ 60k">R$ 30.000 a R$ 60.000</option>
                      <option value="Acima de R$ 60k">Acima de R$ 60.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva os principais objetivos, funcionalidades necessárias e prazo ideal para o seu projeto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span>Processando envio...</span>
                  ) : (
                    <>
                      <span>Solicitar Orçamento Gratuito</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
