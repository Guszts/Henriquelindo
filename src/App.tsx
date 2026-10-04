/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WorkProcess } from './components/WorkProcess';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForBudget, setSelectedServiceForBudget] = useState<string>('Desenvolvimento de Sites');

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contato');
  };

  const handleViewWork = () => {
    scrollToSection('portfolio');
  };

  const handleRequestService = (serviceName: string) => {
    setSelectedServiceForBudget(serviceName);
    scrollToSection('contato');
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#f1f5f9] flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header fixo e transparente com logo BizNext */}
      <Header onOpenBudget={handleStartProject} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section com 3D Notebook Mockup & CTAs */}
        <Hero onStartProject={handleStartProject} onViewWork={handleViewWork} />

        {/* 3. Seção de Estatísticas com Números Animados */}
        <StatsCounter />

        {/* 4. Seção de Serviços com 6 Cards Modernos e Iluminação Azul */}
        <ServicesSection onRequestService={handleRequestService} />

        {/* 5. Seção "Por que escolher a BizNext?" */}
        <WhyChooseUs />

        {/* 6. Processo de Trabalho em 4 Fases */}
        <WorkProcess />

        {/* 7. Portfólio com Projetos em Destaque e Filtros */}
        <PortfolioSection onStartSimilarProject={handleStartProject} />

        {/* 8. Depoimentos de Clientes */}
        <TestimonialsSection />

        {/* 9. FAQ / Perguntas Frequentes */}
        <FaqSection />

        {/* 10. CTA Final para Orçamento e Formulário */}
        <ContactCtaSection preselectedService={selectedServiceForBudget} />
      </main>

      {/* 11. Footer Completo com Links e Redes Sociais */}
      <Footer />
    </div>
  );
}
