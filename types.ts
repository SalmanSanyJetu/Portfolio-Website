import { LucideIcon } from 'lucide-react';

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: LucideIcon;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'IoT' | 'Research' | 'Creative';
  description: string;
  techStack: string[];
  image?: string; // URL placeholder
  highlight?: string; // For awards
}

export interface CreativeWork {
  id: string;
  title: string;
  role: string;
  stats?: string;
  description: string;
  type: 'Video' | 'Brand' | 'Award';
}

export interface LeadershipRole {
  year: string;
  role: string;
  organization: string;
  description?: string;
}