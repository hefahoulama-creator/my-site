export type TabType = 'home' | 'about' | 'articles' | 'projects';

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: 'web' | 'ai' | 'opensource' | 'mobile' | 'tools';
  summary: string;
  description: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  stars?: number;
  stats?: {
    label: string;
    value: string;
  }[];
  caseStudy?: {
    background: string;
    challenges: string[];
    solutions: string[];
    highlights: string[];
    techDetails: string;
  };
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'ai' | 'frontend' | 'fullstack' | 'architecture' | 'thoughts';
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
  featured: boolean;
  coverImage: string;
  content: string;
}

export interface CareerItem {
  period: string;
  role: string;
  company: string;
  companyEn?: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    description: string;
    tag?: string;
  }[];
}

export interface Comment {
  id: string;
  articleId?: string;
  author: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  email?: string;
  avatarColor: string;
  message: string;
  createdAt: string;
  badge?: string;
}
