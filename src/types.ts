export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
  deliverables: string[];
  tools: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TechItem {
  name: string;
  category: string;
  badgeText?: string;
  iconName: string;
  level: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
