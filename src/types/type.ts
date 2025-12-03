export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface ProfileData {
  email: string;
  phone: string;
  github: string;
  location: string;
  avatarUrl: string;
  projects: Project[];
  skills: Skill[];
  education: Education[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
