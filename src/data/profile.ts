import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Peddapatlolla Phaniraj Reddy",
  title: "AI Engineer & Full-Stack Developer",
  subTitle: "I build intelligent, scalable, and user-focused applications using Artificial Intelligence, Generative AI, and modern Full-Stack technologies.",
  bio: "Computer Science graduate with a strong focus on AI engineering and modern web technologies. Experienced in architecting Retrieval-Augmented Generation (RAG) pipelines, autonomous AI agents, and production-grade full-stack systems. Driven by solving complex problems with clean algorithms, robust APIs, and fluid user experiences.",
  email: "phaniraj798@gmail.com",
  phone: "+91 9346587290",
  location: "Sangareddy, Telangana, India",
  availability: "Open to AI/ML & Full-Stack Opportunities, Internships, & Collaborations",
  githubUrl: "https://github.com/pandureddypandureddy798-collab",
  linkedinUrl: "https://www.linkedin.com/in/phaniraj-reddy-60a477357",
  instagramUrl: "https://www.instagram.com/phaniraj.1276?igsh=Y3Q4M29nOXVkdmJy",
  resumeUrl: "https://raw.githubusercontent.com/pandureddypandureddy798-collab/port/main/cv.docx",
  avatarUrl: `${import.meta.env.BASE_URL}profile.jpg`,
  heroStats: [
    {
      label: "Production & AI Projects",
      value: "5+",
      numericValue: 5,
      suffix: "+",
      description: "Deployed and architected applications",
      icon: "Code2"
    },
    {
      label: "AI / GenAI Architectures",
      value: "3+",
      numericValue: 3,
      suffix: "+",
      description: "RAG pipelines, agents & LLM integrations",
      icon: "BrainCircuit"
    },
    {
      label: "Core Technologies",
      value: "16+",
      numericValue: 16,
      suffix: "+",
      description: "Languages, frameworks & databases",
      icon: "Cpu"
    },
    {
      label: "DSA Problems Solved",
      value: "250+",
      numericValue: 250,
      suffix: "+",
      description: "Algorithmic challenges conquered",
      icon: "Terminal"
    }
  ],
  aboutCards: [
    {
      id: "who-i-am",
      title: "WHO I AM",
      icon: "UserCheck",
      content: "Computer Science Engineer from JNTUH UCE Manthani with high academic rigor and passion for deep technical problem-solving."
    },
    {
      id: "what-i-build",
      title: "WHAT I BUILD",
      icon: "Layers",
      content: "Production-ready AI systems, RAG-powered assistants, real-time dashboards, and full-stack web platforms with intuitive interfaces."
    },
    {
      id: "ai-interests",
      title: "MY AI INTERESTS",
      icon: "Sparkles",
      content: "Large Language Models (LLMs), RAG architectures, Multi-Agent systems, vector search indexing, and multimodal AI interactions."
    },
    {
      id: "my-goal",
      title: "MY GOAL",
      icon: "Target",
      content: "Joining innovative engineering teams as an AI Engineer / Full-Stack Developer to build real-world intelligent software products."
    }
  ]
};
