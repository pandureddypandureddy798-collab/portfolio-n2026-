export type ProjectCategory = 'ALL' | 'AI / ML' | 'GENERATIVE AI' | 'FULL STACK' | 'DATA ANALYTICS';

export interface ProjectDetails {
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    flowSteps: string[];
  };
  features: string[];
  techStack: {
    category: string;
    skills: string[];
  }[];
  challenges: string[];
  futureImprovements: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory[];
  image: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  details: ProjectDetails;
}

export type SkillCategoryType =
  | 'PROGRAMMING'
  | 'FRONTEND'
  | 'BACKEND'
  | 'AI / ML'
  | 'DATABASE'
  | 'TOOLS'
  | 'DEPLOYMENT';

export interface SkillItem {
  name: string;
  category: SkillCategoryType;
  level?: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: SkillCategoryType;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface StatItem {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  duration: string;
  location: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage' | 'GPA';
  highlights?: string[];
  iconType?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Hackathon' | 'Academic' | 'Open Source' | 'Project Leadership';
  description: string[];
  technologies: string[];
  link?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  date: string;
  category: 'Hackathon' | 'Academic' | 'Coding' | 'Competition';
  description: string;
  badge?: string;
  link?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
}

export interface DsaTopic {
  name: string;
  count: number;
  difficultyBreakdown?: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export interface DsaData {
  totalSolved: number;
  platforms: {
    name: string;
    handle: string;
    url: string;
    stats: string;
  }[];
  keyTopics: string[];
}

export interface CurrentlyLearningItem {
  title: string;
  category: string;
  description: string;
  keyConcepts: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  subTitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl?: string;
  resumeUrl: string;
  avatarUrl: string;
  heroStats: StatItem[];
  aboutCards: {
    id: string;
    title: string;
    icon: string;
    content: string;
  }[];
}
