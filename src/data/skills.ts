import { SkillCategoryGroup } from '../types';

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'PROGRAMMING',
    name: 'Programming Languages',
    description: 'Core languages used for systems, algorithms, and full-stack software development.',
    skills: [
      { name: 'Python', category: 'PROGRAMMING', level: 'Advanced', highlight: true },
      { name: 'TypeScript', category: 'PROGRAMMING', level: 'Proficient', highlight: true },
      { name: 'JavaScript', category: 'PROGRAMMING', level: 'Proficient', highlight: true },
      { name: 'Java', category: 'PROGRAMMING', level: 'Advanced', highlight: true },
      { name: 'C', category: 'PROGRAMMING', level: 'Intermediate', highlight: false }
    ]
  },
  {
    id: 'AI / ML',
    name: 'AI & Generative AI',
    description: 'Specialized focus in state-of-the-art AI architectures, models, and retrieval systems.',
    skills: [
      { name: 'Generative AI', category: 'AI / ML', level: 'Specialist', highlight: true },
      { name: 'LLMs & Prompting', category: 'AI / ML', level: 'Specialist', highlight: true },
      { name: 'RAG (Retrieval-Augmented Gen)', category: 'AI / ML', level: 'Specialist', highlight: true },
      { name: 'AI Agents & Workflows', category: 'AI / ML', level: 'Advanced', highlight: true },
      { name: 'Multi-Agent Systems', category: 'AI / ML', level: 'Advanced', highlight: true },
      { name: 'NLP (Natural Language Proc.)', category: 'AI / ML', level: 'Proficient', highlight: false },
      { name: 'Machine Learning', category: 'AI / ML', level: 'Proficient', highlight: false },
      { name: 'Deep Learning', category: 'AI / ML', level: 'Proficient', highlight: false }
    ]
  },
  {
    id: 'BACKEND',
    name: 'Backend & APIs',
    description: 'Designing high-throughput asynchronous services and modular RESTful backends.',
    skills: [
      { name: 'FastAPI', category: 'BACKEND', level: 'Advanced', highlight: true },
      { name: 'Python Async/Sync', category: 'BACKEND', level: 'Advanced', highlight: true },
      { name: 'REST APIs', category: 'BACKEND', level: 'Advanced', highlight: true },
      { name: 'Flask', category: 'BACKEND', level: 'Proficient', highlight: false },
      { name: 'Node.js', category: 'BACKEND', level: 'Intermediate', highlight: false }
    ]
  },
  {
    id: 'FRONTEND',
    name: 'Frontend Development',
    description: 'Crafting responsive, performant, and accessible user interfaces.',
    skills: [
      { name: 'React', category: 'FRONTEND', level: 'Advanced', highlight: true },
      { name: 'TypeScript', category: 'FRONTEND', level: 'Proficient', highlight: true },
      { name: 'Tailwind CSS', category: 'FRONTEND', level: 'Advanced', highlight: true },
      { name: 'HTML5', category: 'FRONTEND', level: 'Expert', highlight: false },
      { name: 'CSS3', category: 'FRONTEND', level: 'Expert', highlight: false }
    ]
  },
  {
    id: 'DATABASE',
    name: 'Databases & Vector Stores',
    description: 'Relational data modeling, SQL indexing, and vector similarity search.',
    skills: [
      { name: 'PostgreSQL', category: 'DATABASE', level: 'Proficient', highlight: true },
      { name: 'MySQL', category: 'DATABASE', level: 'Proficient', highlight: true },
      { name: 'SQL', category: 'DATABASE', level: 'Advanced', highlight: true },
      { name: 'Vector Databases (Chroma/FAISS)', category: 'DATABASE', level: 'Proficient', highlight: true }
    ]
  },
  {
    id: 'TOOLS',
    name: 'Developer Tools',
    description: 'Modern workflow, version control, API testing, and containerization.',
    skills: [
      { name: 'Git', category: 'TOOLS', level: 'Advanced', highlight: true },
      { name: 'GitHub', category: 'TOOLS', level: 'Advanced', highlight: true },
      { name: 'VS Code', category: 'TOOLS', level: 'Advanced', highlight: false },
      { name: 'Postman', category: 'TOOLS', level: 'Proficient', highlight: false },
      { name: 'Docker', category: 'TOOLS', level: 'Intermediate', highlight: true }
    ]
  },
  {
    id: 'DEPLOYMENT',
    name: 'Cloud & Deployment',
    description: 'Hosting, continuous integration, and cloud service deployment.',
    skills: [
      { name: 'Vercel', category: 'DEPLOYMENT', level: 'Proficient', highlight: true },
      { name: 'Render', category: 'DEPLOYMENT', level: 'Proficient', highlight: true },
      { name: 'GitHub Pages', category: 'DEPLOYMENT', level: 'Proficient', highlight: false }
    ]
  }
];
