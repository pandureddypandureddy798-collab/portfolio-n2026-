import { CurrentlyLearningItem } from '../types';

export const currentlyLearningData: CurrentlyLearningItem[] = [
  {
    title: "Agentic AI & Multi-Agent Workflows",
    category: "Artificial Intelligence",
    description: "Architecting autonomous agents with tool-calling, reflection loops, self-correction, and coordinated multi-agent collaboration (LangGraph, CrewAI, AutoGen).",
    keyConcepts: ["Tool Calling & Schema Binding", "Stateful Graph Execution", "Human-in-the-Loop Safeguards", "Self-Correction & Evaluation"]
  },
  {
    title: "Advanced RAG & Vector Optimization",
    category: "Generative AI",
    description: "Implementing production retrieval mechanisms including contextual compression, hybrid search (dense + sparse BM25), semantic caching, and cross-encoder re-ranking.",
    keyConcepts: ["Contextual Compression", "ColBERT Multi-Vector Retrieval", "Reranking Pipelines", "Chunk-level Deduplication"]
  },
  {
    title: "System Design & Distributed Scalability",
    category: "Software Architecture",
    description: "Designing resilient backend architectures, message queues, horizontal scaling patterns, rate limiting, and database sharding for high-load systems.",
    keyConcepts: ["Event-Driven Architectures", "Redis Distributed Caching", "API Gateway Patterns", "Database Partitioning"]
  },
  {
    title: "Cloud Native Deployment & MLOps",
    category: "DevOps & Cloud",
    description: "Streamlining deployment workflows, model serving containerization, Kubernetes fundamentals, and automated CI/CD pipelines.",
    keyConcepts: ["Dockerized Microservices", "Model Quantization & Inference", "Vercel / Render Automation", "Zero-Downtime Deployments"]
  }
];
