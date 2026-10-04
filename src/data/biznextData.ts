export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: 'Websites' | 'E-commerce' | 'Sistemas' | 'Branding';
  image: string;
  description: string;
  clientChallenge: string;
  solution: string;
  metrics: string;
  technologies: string[];
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  result: string;
}

export interface FaqData {
  question: string;
  answer: string;
}

export const HERO_CONTENT = {
  badge: 'AGÊNCIA DIGITAL DE ALTA PERFORMANCE',
  title: 'Transformamos ideias em experiências digitais.',
  subtitle: 'Soluções digitais modernas para empresas que querem crescer, conquistar clientes e se destacar online.',
  ctaPrimary: 'Começar projeto',
  ctaSecondary: 'Ver nossos trabalhos',
  statsHighlights: [
    { value: '+500', label: 'Projetos Entregues' },
    { value: '98%', label: 'Satisfação de Clientes' },
    { value: '24/7', label: 'Atendimento Especializado' },
    { value: '100%', label: 'Soluções Personalizadas' },
  ],
  heroMockupImage: '/src/assets/images/biznext_laptop_hero_mockup_1791127777245.jpg',
};

export const STATS_COUNTERS = [
  { value: 500, suffix: '+', label: 'Projetos Concluídos', description: 'Websites, portais e softwares lançados com sucesso' },
  { value: 98, suffix: '%', label: 'Satisfação dos Clientes', description: 'Taxa de aprovação medida em avaliações pós-entrega' },
  { value: 12, suffix: '+', label: 'Anos no Mercado', description: 'Histórico sólido construindo soluções digitais' },
  { value: 45, suffix: '+', label: 'Especialistas Dedicados', description: 'Desenvolvedores, designers e engenheiros de produto' },
  { value: 120, prefix: 'R$ ', suffix: 'M+', label: 'Receita Gerada', description: 'Volume transacionado por clientes nas nossas plataformas' },
];

export const SERVICES_LIST: ServiceData[] = [
  {
    id: 'desenvolvimento-de-sites',
    title: 'Desenvolvimento de Sites',
    shortDescription: 'Websites corporativos e landing pages de altíssima conversão, com velocidade extrema, responsividade impecável e SEO técnico.',
    iconName: 'Globe',
    deliverables: [
      'Arquitetura moderna em Next.js e React',
      'Design 100% responsivo para todos os dispositivos',
      'Painel de controle intuitivo para gestão de conteúdo',
      'Pontuação 95+ garantida no Google PageSpeed',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    idealFor: 'Empresas que precisam de autoridade imediata, alta taxa de conversão e carregamento instantâneo.',
  },
  {
    id: 'design-ui-ux',
    title: 'Design UI/UX',
    shortDescription: 'Interfaces elegantes, funcionais e focadas no usuário. Criamos jornadas digitais pensadas para encantar e converter visitantes em clientes.',
    iconName: 'Layout',
    deliverables: [
      'Pesquisa aprofundada de comportamento do usuário',
      'Wireframes e protótipos navegáveis em alta fidelidade',
      'Design System corporativo completo e escalável',
      'Auditoria de usabilidade e testes com usuários reais',
    ],
    technologies: ['Figma', 'Design Systems', 'Micro-interactions', 'Prototyping'],
    idealFor: 'Marcas que buscam diferenciação estética, clareza operacional e experiência do usuário memorável.',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    shortDescription: 'Lojas virtuais robustas e preparadas para alto volume de vendas, com checkout otimizado, integração antifraude e automações.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Checkout otimizado em 1 clique para máxima conversão',
      'Integração segura com principais gateways de pagamento',
      'Gestão inteligente de catálogo, estoques e logística',
      'Recuperação automatizada de carrinhos abandonados',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Mercado Pago', 'Headless Commerce'],
    idealFor: 'Operações de varejo e atacado que querem faturar mais com uma loja rápida, segura e escalável.',
  },
  {
    id: 'seo-marketing',
    title: 'SEO e Marketing Digital',
    shortDescription: 'Estratégias de rankeamento orgânico no Google para posicionar sua marca na frente dos clientes mais qualificados do seu nicho.',
    iconName: 'TrendingUp',
    deliverables: [
      'Auditoria técnica completa de infraestrutura e conteúdo',
      'Otimização avançada de Core Web Vitals e dados estruturados',
      'Mapeamento de palavras-chave de alta intenção comercial',
      'Relatórios mensais de posicionamento e tráfego qualificado',
    ],
    technologies: ['Google Search Console', 'Schema.org', 'Lighthouse', 'Vercel Analytics'],
    idealFor: 'Empresas que desejam reduzir custos de tráfego pago conquistando visitantes orgânicos qualificados.',
  },
  {
    id: 'sistemas-web',
    title: 'Sistemas Web',
    shortDescription: 'Plataformas SaaS e softwares corporativos sob medida para automatizar tarefas críticas, integrar dados e acelerar operações.',
    iconName: 'Server',
    deliverables: [
      'Painéis administrativos e dashboards em tempo real',
      'Arquitetura segura com controle de acesso por níveis (RBAC)',
      'Integração completa com APIs externas e ERPs',
      'Bancos de dados de alto rendimento preparados para escala',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'REST/GraphQL APIs', 'Redis'],
    idealFor: 'Negócios com processos complexos que necessitam de uma solução exclusiva e sob medida.',
  },
  {
    id: 'suporte-manutencao',
    title: 'Suporte e Manutenção',
    shortDescription: 'Tranquilidade total para o seu negócio com monitoramento contínuo, backups automatizados, atualizações de segurança e evolução constante.',
    iconName: 'ShieldCheck',
    deliverables: [
      'SLA com tempo de resposta garantido em contrato',
      'Monitoramento 24/7 de estabilidade e segurança',
      'Backups diários automatizados e plano de contingência',
      'Horas mensais dedicadas para novas melhorias e recursos',
    ],
    technologies: ['Cloudflare', 'AWS', 'Sentry', 'GitHub CI/CD'],
    idealFor: 'Empresas que não podem ter seu site fora do ar e exigem máxima segurança operacional.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Velocidade e Performance Extrema',
    description: 'Nossos projetos carregam em frações de segundo. Reduzimos a taxa de rejeição e maximizamos suas chances de conversão no primeiro impacto.',
    iconName: 'Cpu',
  },
  {
    title: 'Design Focado em Vendas',
    description: 'Não fazemos apenas interfaces bonitas. Estudamos a psicologia de compra e a jornada do cliente para guiar cada clique ao botão de contato.',
    iconName: 'Target',
  },
  {
    title: 'Código Proprietário e Sem Limitações',
    description: 'Construído em código moderno, limpo e flexível. Você tem liberdade total de evolução sem ficar refém de plataformas engessadas.',
    iconName: 'Code',
  },
  {
    title: 'Compromisso com o Prazo',
    description: 'Cumprimos os cronogramas estabelecidos com transparência e relatórios semanais. Lançamentos pontuais sem surpresas desagradáveis.',
    iconName: 'Clock',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Descoberta & Planejamento',
    description: 'Alinhamos seus objetivos de negócio, público-alvo e requisitos técnicos para traçar o plano estratégico da solução.',
  },
  {
    number: '02',
    title: 'Design & Prototipagem',
    description: 'Desenhamos a arquitetura de informação e criamos interfaces interativas no Figma para sua validação prévia.',
  },
  {
    number: '03',
    title: 'Desenvolvimento Ágil',
    description: 'Codificação limpa, componentizada e segura com entregas contínuas em ambiente de homologação para testes.',
  },
  {
    number: '04',
    title: 'Homologação & Lançamento',
    description: 'Auditorias rigorosas de segurança, testes de carga, configuração de DNS e suporte ativo no momento do go-live.',
  },
];

export const PORTFOLIO_PROJECTS: ProjectData[] = [
  {
    id: 'nexus-saas',
    title: 'Nexus Cloud Analytics',
    category: 'Sistemas',
    image: '/src/assets/images/biznext_project_nexus_saas_1791127792010.jpg',
    description: 'Plataforma corporativa de gestão de servidores em nuvem com telemetria em tempo real e orquestração de microsserviços.',
    clientChallenge: 'A empresa lidava com dashboards lentos e dificuldade de monitorar mais de 2.000 instâncias simultaneamente.',
    solution: 'Desenvolvemos uma aplicação web em Next.js com streaming de dados via WebSocket e renderização virtualizada de métricas.',
    metrics: '+320% Produtividade das equipes operacionais',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'aurora-store',
    title: 'Aurora Premium Store',
    category: 'E-commerce',
    image: '/src/assets/images/biznext_project_aurora_store_1791127802235.jpg',
    description: 'Loja virtual de luxo para produtos de tecnologia de ponta com checkout simplificado e alta taxa de conversão.',
    clientChallenge: 'A taxa de abandono de carrinho superava 74% devido a um checkout antigo e carregamento lento em conexões móveis.',
    solution: 'Reconstrução completa da loja com arquitetura Headless, checkout em uma etapa e pontuação 98 no mobile.',
    metrics: '+185% em Vendas no primeiro trimestre',
    technologies: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 'vortex-fintech',
    title: 'Vortex Capital Platform',
    category: 'Sistemas',
    image: '/src/assets/images/biznext_project_vortex_fintech_1791127817326.jpg',
    description: 'Portal de investimentos institucionais com gráficos financeiros de alta frequência e auditoria de carteiras.',
    clientChallenge: 'Necessidade de interface com conformidade bancária rigorosa e suporte a relatórios fiscais automatizados.',
    solution: 'Arquitetura com criptografia ponta a ponta, autenticação biométrica e integração com bancos centrais.',
    metrics: 'R$ 45 Milhões transacionados com zero downtime',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'aura-consulting',
    title: 'Aura Global Strategy',
    category: 'Websites',
    image: '/src/assets/images/biznext_laptop_hero_mockup_1791127777245.jpg',
    description: 'Portal institucional para consultoria internacional com agendamento integrado e área exclusiva para clientes.',
    clientChallenge: 'Posicionar a consultoria como autoridade de liderança corporativa nos EUA e América Latina.',
    solution: 'Design minimalista de alto impacto visual com carregamento instantâneo e integração com CRM corporativo.',
    metrics: '+210% em Agendamentos de reuniões comerciais',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'HubSpot API'],
  },
  {
    id: 'brandix-identity',
    title: 'Brandix Innovation Lab',
    category: 'Branding',
    image: '/src/assets/images/project_brandix_agency_1791127563450.jpg',
    description: 'Identidade visual moderna e diretrizes de marca completas para estúdio de inovação e inteligência artificial.',
    clientChallenge: 'A marca anterior parecia antiquada e não transmitia a sofisticação tecnológica dos projetos desenvolvidos.',
    solution: 'Criação de novo logotipo, paleta corporativa futurista, tipografia institucional e manual de marca para equipes globais.',
    metrics: '99% de aprovação no conselho de acionistas',
    technologies: ['Figma', 'Brand Guidelines', 'Design Tokens'],
  },
  {
    id: 'hosteria-edge',
    title: 'Hosteria Cloud Solutions',
    category: 'Websites',
    image: '/src/assets/images/project_hosteria_cloud_1791127589539.jpg',
    description: 'Landing page técnica para serviço de edge hosting com calculadora de consumo e comparação de latência.',
    clientChallenge: 'Comunicar conceitos técnicos complexos de forma clara para decisores e desenvolvedores.',
    solution: 'Landing page interativa com testes de ping ao vivo e fluxo de contratação sem atrito.',
    metrics: '4.8x Maior tempo de permanência na página',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Cloudflare Workers'],
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Mendes',
    role: 'CTO',
    company: 'Nexus Global Logistics',
    content: 'A BizNext transformou completamente nossa presença digital. A plataforma que eles desenvolveram não só reduziu nossos custos operacionais como também impressionou nossos investidores internacionais pela qualidade e estabilidade.',
    result: '+320% Produtividade',
  },
  {
    id: '2',
    name: 'Juliana Prado',
    role: 'Diretora de E-commerce',
    company: 'Aurora Tech Brand',
    content: 'O novo e-commerce desenvolvido pela BizNext mudou o patamar da nossa empresa. A velocidade de carregamento é inacreditável e nossa taxa de conversão saltou logo no primeiro mês. O atendimento é ágil e extremamente técnico.',
    result: '+185% de Faturamento',
  },
  {
    id: '3',
    name: 'Roberto Vasconcelos',
    role: 'Fundador & CEO',
    company: 'Vortex Capital Group',
    content: 'Procurávamos uma agência que entendesse de código avançado e design premium ao mesmo tempo. A BizNext entregou a plataforma financeira antes do prazo contratual e com um nível de acabamento que superou todas as expectativas.',
    result: 'Zero Falhas no Lançamento',
  },
];

export const FAQ_ITEMS: FaqData[] = [
  {
    question: 'Qual é o prazo médio de desenvolvimento de um projeto?',
    answer: 'O prazo varia conforme a complexidade. Landing pages e websites corporativos costumam ser entregues entre 2 e 4 semanas. E-commerces e sistemas web sob medida levam em média de 6 a 12 semanas. No início de cada projeto, fornecemos um cronograma detalhado com todas as etapas e datas de entrega.',
  },
  {
    question: 'Quais tecnologias a BizNext utiliza no desenvolvimento?',
    answer: 'Trabalhamos com o que há de mais moderno e robusto no mercado: React, Next.js, TypeScript, Tailwind CSS e Node.js para aplicações web; PostgreSQL para banco de dados relacional; e infraestrutura em nuvem na AWS e Vercel para garantir máxima segurança e velocidade.',
  },
  {
    question: 'O site desenvolvido será 100% adaptado para celulares e tablets?',
    answer: 'Com certeza. Aplicamos o conceito mobile-first com rigor. Seu site ou sistema será testado em dezenas de resoluções de telas reais para garantir uma experiência de navegação impecável em smartphones, notebooks e monitores ultrawide.',
  },
  {
    question: 'Como funciona o suporte e a manutenção após o lançamento?',
    answer: 'Oferecemos garantia total de correção de bugs após o lançamento e planos mensais de suporte contínuo com SLA prioritário, backups automatizados, auditorias de segurança e horas dedicadas para evolução contínua da sua aplicação.',
  },
  {
    question: 'Como é calculado o orçamento e quais são as formas de pagamento?',
    answer: 'O orçamento é calculado de forma transparente com base no escopo técnico, horas de engenharia e prazos necessários. Oferecemos opções de pagamento parcelado por marcos de entrega (milestones) via faturamento PJ, Pix ou transferência bancária.',
  },
];
