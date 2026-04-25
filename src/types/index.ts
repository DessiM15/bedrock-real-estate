export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  category: string;
  readTime: number;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
