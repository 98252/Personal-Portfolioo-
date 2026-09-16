export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  techStack: string[];
  points: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  techStack?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  scholarship?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  imageUrl?: string;
  score?: string;
  description?: string;
  category?: string;
  credentialId?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year?: string;
  date?: string;
  imageUrl?: string;
  description?: string;
  badge?: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  profileImage: string;
  cgpa: string;
  scholarship: string;
}
