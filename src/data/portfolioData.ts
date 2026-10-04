import { ServiceItem, ProjectItem, TechItem, ProcessStep } from '../types';

export const HERO_DATA = {
  headlineTop: 'CREATIVE',
  headlineBottom: 'DEVELOPER',
  scriptText: 'Portfolio',
  tagline: 'I DESIGN & CODE DIGITAL EXPERIENCES THAT INSPIRE.',
  codeBracket: '</ CODE. DESIGN. DEPLOY />',
  avatarImage: '/src/assets/images/hero_developer_portrait_1791127550246.jpg',
  statusText: 'AVAILABLE FOR PROJECTS',
  metrics: [
    { value: '4+', label: 'YEARS EXPERIENCE' },
    { value: '40+', label: 'PROJECTS DELIVERED' },
    { value: '25+', label: 'HAPPY CLIENTS' },
    { value: '10+', label: 'TECHNOLOGIES' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEB DESIGN',
    description: 'Pixel-perfect designs that combine creativity with strategy.',
    deliverables: ['Custom Art Direction', 'Responsive Design Systems', 'Figma Prototypes', 'Brand Style Guides'],
    tools: ['Figma', 'Adobe CC', 'Design Systems', 'Micro-interactions'],
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'WEB DEVELOPMENT',
    description: 'Clean, scalable code with modern frameworks and best practices.',
    highlighted: true,
    deliverables: ['Next.js / React Web Apps', 'Tailwind & Motion Craft', 'TypeScript Architecture', 'API Integrations'],
    tools: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  {
    id: 'ui-ux',
    number: '03',
    title: 'UI/UX DESIGN',
    description: 'Intuitive interfaces designed for seamless user experiences.',
    deliverables: ['User Flow Mapping', 'Information Architecture', 'Usability Audits', 'Interactive Wireframes'],
    tools: ['User Testing', 'Wireframing', 'Prototyping', 'Accessibility'],
  },
  {
    id: 'optimization',
    number: '04',
    title: 'OPTIMIZATION',
    description: 'Speed, SEO and performance tweaks that drive results.',
    deliverables: ['Lighthouse 100/100 Audits', 'Core Web Vitals Tuning', 'Technical SEO Hierarchy', 'Asset Compression'],
    tools: ['Lighthouse', 'Vercel Analytics', 'Web Vitals', 'Search Console'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'brandix-studio',
    number: '01',
    title: 'BRANDIX STUDIO',
    category: 'Web Design & Development',
    image: '/src/assets/images/project_brandix_agency_1791127563450.jpg',
    description: 'A bespoke digital showcase for a global branding agency featuring immersive dark-mode typography, smooth scroll physics, and dynamic case study galleries.',
    challenge: 'The client needed a digital flagship to justify high-ticket consulting engagements without bloated page load times.',
    solution: 'Engineered a lightweight Next.js and Tailwind architecture with lazy-loaded media assets achieving 99+ mobile performance scores.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    metrics: '+240% Inbound Inquiries',
    liveUrl: 'https://example.com/brandix',
    githubUrl: 'https://github.com/example/brandix-studio',
  },
  {
    id: 'taskly-app',
    number: '02',
    title: 'TASKLY APP',
    category: 'Dashboard Design & Development',
    image: '/src/assets/images/project_taskly_saas_1791127574584.jpg',
    description: 'An intuitive project management dashboard designed for high-performing engineering squads with real-time kanban boards and sprint telemetry.',
    challenge: 'Legacy task trackers suffered from cluttered visual noise and multi-second query delays for large backlogs.',
    solution: 'Crafted a high-contrast lavender-accented interface using virtualized data grids and streamlined single-click workflow controls.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    metrics: '35% Faster Task Resolution',
    liveUrl: 'https://example.com/taskly',
    githubUrl: 'https://github.com/example/taskly-app',
  },
  {
    id: 'hosteria-cloud',
    number: '03',
    title: 'HOSTERIA',
    category: 'Landing Page Design & Development',
    image: '/src/assets/images/project_hosteria_cloud_1791127589539.jpg',
    description: 'A high-conversion landing page for next-generation developer edge hosting with automated tier calculators and server ping benchmarks.',
    challenge: 'Technical cloud infrastructure needed to feel approachable to indie makers while signaling enterprise-grade reliability.',
    solution: 'Designed an obsidian dark layout with clear pricing calculators, interactive latency maps, and frictionless sign-up flows.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Edge Functions'],
    metrics: '4.8x Higher Conversion Rate',
    liveUrl: 'https://example.com/hosteria',
    githubUrl: 'https://github.com/example/hosteria-cloud',
  },
];

export const TOOLKIT_ITEMS: TechItem[] = [
  { name: 'HTML5', category: 'Markup', badgeText: '5', iconName: 'html5', level: 'Expert · 5 yrs' },
  { name: 'CSS3', category: 'Styling', badgeText: '3', iconName: 'css3', level: 'Expert · 5 yrs' },
  { name: 'JavaScript', category: 'Language', badgeText: '5', iconName: 'javascript', level: 'Advanced · 4 yrs' },
  { name: 'TypeScript', category: 'Language', badgeText: 'TS', iconName: 'typescript', level: 'Advanced · 4 yrs' },
  { name: 'React', category: 'Frontend', iconName: 'react', level: 'Specialist · 4 yrs' },
  { name: 'Next.js', category: 'Framework', iconName: 'nextjs', level: 'Advanced · 3 yrs' },
  { name: 'Tailwind CSS', category: 'Styling', iconName: 'tailwind', level: 'Expert · 4 yrs' },
  { name: 'Node.js', category: 'Backend', iconName: 'nodejs', level: 'Intermediate · 3 yrs' },
  { name: 'Git & GitHub', category: 'DevOps', iconName: 'git', level: 'Proficient · 4 yrs' },
  { name: 'Figma', category: 'Design', iconName: 'figma', level: 'Advanced · 4 yrs' },
  { name: 'VS Code', category: 'Tooling', iconName: 'vscode', level: 'Daily Driver · 5 yrs' },
  { name: 'Firebase', category: 'BaaS', iconName: 'firebase', level: 'Intermediate · 3 yrs' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understanding your goals, audience and requirements.',
  },
  {
    step: '02',
    title: 'DESIGN',
    description: 'Creating wireframes and visuals that communicate.',
  },
  {
    step: '03',
    title: 'DEVELOP',
    description: 'Building clean, responsive and scalable solutions.',
  },
  {
    step: '04',
    title: 'DELIVER',
    description: 'Testing, optimizing and launching with care.',
  },
];
