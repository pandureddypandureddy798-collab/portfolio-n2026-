import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    role: "AI & Full-Stack Project Lead",
    organization: "Independent & Academic Engineering",
    period: "2023 - Present",
    location: "India",
    type: "Project Leadership",
    description: [
      "Architected and implemented production-style Generative AI applications including RAG pipelines, LLM-based research assistants, and multimodal virtual platforms.",
      "Designed asynchronous FastAPI backends connected to PostgreSQL and vector databases (ChromaDB / FAISS) for low-latency semantic query routing.",
      "Engineered clean, responsive React & TypeScript frontend architectures with modern glassmorphic developer aesthetics.",
      "Maintained rigorous Git workflows, code reviews, containerized Docker deployment, and continuous deployment to Vercel and Render."
    ],
    technologies: ["FastAPI", "Python", "React", "TypeScript", "RAG", "LLMs", "PostgreSQL", "Docker"]
  },
  {
    role: "Hackathon Builder & Collaborative Developer",
    organization: "National & University Hackathons",
    period: "2022 - 2024",
    location: "Telangana, India",
    type: "Hackathon",
    description: [
      "Collaborated in fast-paced multi-disciplinary hackathon teams to prototype real-world solutions under strict 24-48 hour time constraints.",
      "Developed an AI-driven cultural heritage explorer utilizing 3D WebGL and conversational speech APIs.",
      "Pitched technical solutions, system architectures, and live demonstrations to industry judges and academic panels."
    ],
    technologies: ["React", "Three.js", "Python", "Web Speech API", "FastAPI", "Tailwind CSS"]
  },
  {
    role: "Open Source Contributor & Technical Explorer",
    organization: "GitHub Community",
    period: "2022 - Present",
    location: "Remote",
    type: "Open Source",
    description: [
      "Published and actively maintained open-source developer tooling, starter templates, and algorithmic implementations.",
      "Contributed bug fixes, documentation improvements, and performance enhancements across full-stack and AI repositories.",
      "Engaged in continuous learning across modern LLM orchestration frameworks, vector databases, and modern web standards."
    ],
    technologies: ["Git", "GitHub", "Python", "TypeScript", "SQL", "Algorithms"]
  }
];
