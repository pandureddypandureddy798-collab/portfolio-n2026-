import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "ai-research-scientist-assistant",
    name: "AI Research Scientist Assistant",
    tagline: "Autonomous Literature Review, Multi-Paper RAG & Research Gap Identification",
    description: "A production-ready AI research assistant that enables researchers, academics, and students to analyze complex scientific papers, synthesize cross-paper literature, uncover methodology nuances, and discover unaddressed research gaps.",
    category: ["AI / ML", "GENERATIVE AI", "FULL STACK"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "LLMs",
      "RAG",
      "Vector Database"
    ],
    keyFeatures: [
      "Multi-PDF Upload & Intelligent Chunking Pipeline",
      "Hybrid Vector Search + BM25 Retrieval-Augmented Generation (RAG)",
      "Multi-Paper Comparative Synthesis & Gap Identification",
      "Automated Literature Review & Citation-Backed Reporting",
      "Interactive Multilingual Chat with Source Page Attributions",
      "Secure Multi-Tenant JWT Authentication & Saved Research Sessions"
    ],
    githubUrl: "https://github.com/pandureddypandureddy798-collab",
    liveUrl: "https://github.com/pandureddypandureddy798-collab",
    featured: true,
    details: {
      overview: "Scientific research moves faster than any single researcher can read. The AI Research Scientist Assistant acts as an always-on co-investigator that parses dense PDF papers, converts mathematical concepts and methodology sections into navigable knowledge embeddings, and performs deep contextual reasoning.",
      problem: "Reading dozens of 20-page papers is tedious, error-prone, and makes identifying cross-paper conflicting claims or open research questions difficult. Standard keyword search cannot answer nuanced inquiries like 'How does Paper A's attention penalty compare to Paper B's loss formulation?'.",
      solution: "Engineered an end-to-end RAG architecture with FastAPI and vector embeddings that chunks documents hierarchically, embeds semantics, and employs an LLM reasoning layer to extract methodologies, generate literature reviews, and benchmark findings with exact page citations.",
      architecture: {
        title: "Multi-Stage RAG & Agentic Synthesis Pipeline",
        description: "PDF ingestion pipeline with PyMuPDF/pdfplumber, recursive semantic chunking, embedding generation into Chroma/FAISS vector storage, and an asynchronous FastAPI query router with LLM re-ranking.",
        flowSteps: [
          "Document Ingestion: PDF upload parsed into structured sections (Abstract, Methods, Results, Discussion).",
          "Semantic Chunking & Embedding: Hierarchical sliding-window chunking embedded with domain-adapted embedding models.",
          "Hybrid Retrieval: Combines dense vector similarity with sparse BM25 keyword matching for high-precision retrieval.",
          "Cross-Document Synthesizer: Reranks candidate contexts and prompts the LLM to output structured comparative tables and gaps.",
          "Citation Verification: Post-processes answers to guarantee exact page and paragraph references before serving client."
        ]
      },
      features: [
        "PDF upload with real-time OCR and structural parsing",
        "Semantic search across hundreds of uploaded papers simultaneously",
        "Deep research-gap identification highlights overlooked questions",
        "Automated markdown literature review generator with exportable reports",
        "Multi-paper comparison matrix (Datasets, Metrics, Limitations)",
        "Role-based authentication with isolated user research workspaces"
      ],
      techStack: [
        {
          category: "Frontend",
          skills: ["React 18", "TypeScript", "Tailwind CSS", "Lucide Icons", "PDF.js Viewer"]
        },
        {
          category: "Backend & AI",
          skills: ["FastAPI", "Python 3.11", "LangChain/LlamaIndex", "HuggingFace Embeddings", "ChromaDB/FAISS"]
        },
        {
          category: "Database & Security",
          skills: ["PostgreSQL", "SQLAlchemy ORM", "JWT Authentication", "Bcrypt Hashing"]
        }
      ],
      challenges: [
        "Handling complex PDF artifacts like multi-column layouts, formulas, and tabular data without losing semantic continuity.",
        "Minimizing LLM hallucination when comparing conflicting statistical conclusions across independent papers."
      ],
      futureImprovements: [
        "ArXiv live ingestion webhook to monitor specific subfields automatically.",
        "Knowledge Graph visualization of citation trees using Neo4j."
      ]
    }
  },
  {
    id: "ai-recruitment-intelligence-platform",
    name: "AI Recruitment Intelligence Platform",
    tagline: "End-to-End ATS Scoring, Predictive Candidate Ranking & AI Interviewer",
    description: "An AI-powered recruitment ecosystem designed to automate and elevate the entire hiring lifecycle. Delivers instant ATS resume parsing, contextual skill matching, candidate ranking, AI-driven simulated interviews, and predictive hiring analytics.",
    category: ["AI / ML", "GENERATIVE AI", "FULL STACK"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "NLP",
      "LLMs",
      "PostgreSQL",
      "Predictive Analytics"
    ],
    keyFeatures: [
      "Deep Resume Parsing & ATS Compatibility Score Breakdown",
      "Contextual Skill & Experience Semantic Alignment Engine",
      "Autonomous Candidate Ranking Matrix against Dynamic Job Descriptions",
      "Interactive AI Mock Interviewer with Real-time Speech-to-Text Evaluation",
      "Automated Resume Improvement Recommendations & Cover Letter Generator",
      "Recruiter Dashboard with Conversion Analytics & Predictive Insights"
    ],
    githubUrl: "https://github.com/pandureddypandureddy798-collab",
    liveUrl: "https://github.com/pandureddypandureddy798-collab",
    featured: true,
    details: {
      overview: "Traditional applicant tracking systems rely on brittle keyword filtering that rejects qualified candidates who don't parrot specific phrases. The AI Recruitment Intelligence Platform transforms recruitment into an intelligent, unbiased, and automated assessment workflow.",
      problem: "Recruiters spend hundreds of hours screening resumes manually, while qualified applicants struggle with opaque ATS algorithms. Candidates lack actionable feedback on how to position their skills effectively for target roles.",
      solution: "Built a comprehensive platform featuring an intelligent NLP parser, contextual semantic scoring, an automated LLM interview simulator with rubric-based scoring, and predictive match analytics for hiring teams.",
      architecture: {
        title: "Semantic Match & Interview Scoring Architecture",
        description: "Asynchronous processing pipeline with FastAPI, SpaCy/Transformers for entity extraction, LLM prompt orchestrators for interview simulations, and PostgreSQL for relational tracking.",
        flowSteps: [
          "Resume & Job Description Upload: Parses DOCX/PDF formats into standardized JSON schemas.",
          "Named Entity & Skill Extraction: Identifies skills, years of experience, projects, and certifications.",
          "Contextual Vector Matching: Calculates multi-dimensional match scores rather than simple keyword overlap.",
          "Simulated AI Interview: Generates dynamic behavioral and technical questions based on candidate resume deltas.",
          "Feedback Loop: Computes scoring rubrics on communication, technical depth, and problem-solving readiness."
        ]
      },
      features: [
        "Instant ATS resume audit with itemized formatting and keyword recommendations",
        "Semantic candidate ranking dashboard for HR teams",
        "Automated personalized cover letter generation tailored to any JD",
        "Simulated AI interview practice mode with immediate performance reports",
        "Job description optimizer that eliminates biased or exclusionary requirements",
        "Analytics panel tracking recruitment velocity and match distributions"
      ],
      techStack: [
        {
          category: "Frontend",
          skills: ["React", "TypeScript", "Tailwind CSS", "Recharts Analytics", "Web Speech API"]
        },
        {
          category: "Backend & Machine Learning",
          skills: ["FastAPI", "Python", "SpaCy / NLTK", "OpenAI / Claude APIs", "Pydantic Models"]
        },
        {
          category: "Database & Storage",
          skills: ["PostgreSQL", "SQLAlchemy", "Redis Caching", "Cloudinary File Storage"]
        }
      ],
      challenges: [
        "Ensuring the scoring engine evaluates semantic equivalence (e.g. recognizing that 'FastAPI' implies modern Python REST experience).",
        "Structuring deterministic, rubric-based evaluation prompts for open-ended interview answers."
      ],
      futureImprovements: [
        "Video facial emotion and confidence analytics during live video interviews.",
        "Direct integration with LinkedIn Jobs and Greenhouse ATS webhooks."
      ]
    }
  },
  {
    id: "ai-virtual-heritage-explorer",
    name: "AI-Powered Virtual Heritage Explorer",
    tagline: "360° Immersive Exploration with Conversational Multilingual AI Historian",
    description: "An immersive AI-powered platform for exploring historical monuments through interactive 360° virtual tours, interactive 3D heritage artifacts, and an intelligent multilingual AI guide with voice synthesis.",
    category: ["AI / ML", "FULL STACK"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "FastAPI",
      "Python",
      "Web Speech API",
      "Conversational AI",
      "WebGL"
    ],
    keyFeatures: [
      "Photorealistic 360° Monument Navigation & Spatial Audio",
      "Interactive 3D Heritage Artifacts with Inspectable Hotspots",
      "Conversational AI Guide with Historical Persona Emulation",
      "Two-Way Voice Interaction with Multilingual Speech-to-Text & TTS",
      "Dynamic Historical Timeline & Architectural Deep Dives",
      "Responsive WebGL Rendering Optimized for Mobile & Desktop"
    ],
    githubUrl: "https://github.com/pandureddypandureddy798-collab",
    liveUrl: "https://github.com/pandureddypandureddy798-collab",
    featured: true,
    details: {
      overview: "Cultural monuments are often inaccessible due to geography, physical mobility, or lack of educational resources. The AI Virtual Heritage Explorer brings World Heritage sites to anyone worldwide, paired with a knowledgeable AI curator that speaks multiple languages.",
      problem: "Standard virtual tours are passive slideshows with static text paragraphs that fail to engage modern audiences or answer curious, spontaneous questions.",
      solution: "Blended high-performance WebGL 3D rendering with an intelligent conversational AI agent capable of speaking, listening, and explaining historical artifacts contextually in real time.",
      architecture: {
        title: "WebGL 3D Engine & Voice-Driven AI Guide Flow",
        description: "Three.js rendering engine managing spatial scenes connected via WebSocket/REST to a FastAPI AI reasoning server equipped with multilingual translation and text-to-speech pipelines.",
        flowSteps: [
          "Scene Initialization: Loads optimized equirectangular textures and 3D glTF models with LOD (Level of Detail).",
          "Spatial Hotspot Detection: Raycasting determines user focus on specific architectural features or relics.",
          "Voice Query Streaming: Captures microphone audio, transcribes via Web Speech API or Whisper.",
          "Historical RAG Contextualization: Fetches verified historical archives and injects into persona prompt.",
          "Audio Response Synthesis: Generates natural multilingual spoken answers with spatial audio placement."
        ]
      },
      features: [
        "Full 360-degree interactive panorama exploration with gyroscope support",
        "Interactive 3D model inspection with zoom, rotation, and cross-section views",
        "Multilingual conversational AI tour guide supporting multiple languages",
        "Real-time voice query and spoken response playback",
        "Historical contextual timeline highlighting historical eras and architectural shifts",
        "Low-bandwidth optimization mode for seamless mobile loading"
      ],
      techStack: [
        {
          category: "Graphics & Frontend",
          skills: ["React", "Three.js", "React Three Fiber", "Tailwind CSS", "Canvas API"]
        },
        {
          category: "AI & Backend",
          skills: ["FastAPI", "Python", "Conversational LLMs", "Web Speech API / Whisper", "gTTS"]
        },
        {
          category: "Assets & 3D",
          skills: ["glTF / GLB Models", "Equirectangular HDR Panoramas", "Draco Compression"]
        }
      ],
      challenges: [
        "Optimizing 3D textures and asset loading to maintain smooth 60 FPS on mobile browsers.",
        "Ensuring historical accuracy of AI answers to prevent anachronistic hallucinations."
      ],
      futureImprovements: [
        "WebXR support for Apple Vision Pro and Meta Quest headsets.",
        "Crowdsourced historical artifact scanning pipeline via photogrammetry."
      ]
    }
  },
  {
    id: "fullstack-expense-tracker",
    name: "Full-Stack Expense Tracker & Financial Analytics",
    tagline: "Secure Real-Time Budgeting, Categorization & Predictive Spending Analytics",
    description: "A full-stack personal finance and budgeting platform featuring secure user authentication, multi-category transaction tracking, monthly budget limits, interactive financial analytics, and responsive data visualizations.",
    category: ["FULL STACK", "DATA ANALYTICS"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI / Node.js",
      "PostgreSQL",
      "Chart.js / Recharts",
      "JWT Authentication",
      "REST APIs"
    ],
    keyFeatures: [
      "Secure JWT User Authentication with Protected Routes",
      "Real-Time Expense & Income CRUD Operations with Quick Categorization",
      "Monthly Budget Forecasting & Threshold Alert Notifications",
      "Interactive Chart Visualizations (Category Breakdown, Trends, Monthly Deltas)",
      "CSV Data Export & Financial Summary Reports",
      "Fully Responsive Mobile-First Design with Dark Developer Theme"
    ],
    githubUrl: "https://github.com/pandureddypandureddy798-collab",
    liveUrl: "https://github.com/pandureddypandureddy798-collab",
    featured: true,
    details: {
      overview: "Managing personal finances requires clarity, speed, and analytical insight. This full-stack expense tracker provides clean accounting, automated categorization, and interactive data visualizations to give users complete control over their cash flow.",
      problem: "Most budget spreadsheets are cumbersome on mobile devices, while commercial finance apps often lock essential analytics behind paywalls or sell user financial data.",
      solution: "Developed a clean, self-hostable full-stack application with encrypted user authentication, granular transaction tracking, category budgets, and dynamic SVG chart visualizations.",
      architecture: {
        title: "Client-Server Relational Financial Pipeline",
        description: "React client interacting with authenticated RESTful endpoints, querying normalized PostgreSQL tables with indexed monthly time-series aggregations.",
        flowSteps: [
          "Authentication: Bearer JWT token stored securely with auto-refresh mechanism.",
          "Transaction Recording: Instant optimistic UI updates synced to backend API.",
          "Data Aggregation: Server-side SQL queries calculate category distributions and monthly spending curves.",
          "Visualization Engine: Renders interactive charts for comparative cash-flow analysis.",
          "Alert System: Triggers threshold warnings when category expenditures exceed preset targets."
        ]
      },
      features: [
        "Instant transaction logging with custom categories and tag support",
        "Visual expense breakdown with interactive donut charts and bar charts",
        "Monthly spending velocity indicator and budget tracker",
        "Date range filtering and search by merchant, amount, or category",
        "One-click CSV/JSON export for tax and external accounting purposes",
        "Optimistic UI updates for zero perceptible latency"
      ],
      techStack: [
        {
          category: "Frontend",
          skills: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons"]
        },
        {
          category: "Backend",
          skills: ["FastAPI / Node.js", "Python", "RESTful Architecture", "JWT Auth"]
        },
        {
          category: "Database",
          skills: ["PostgreSQL", "SQLAlchemy", "Indexed Aggregations"]
        }
      ],
      challenges: [
        "Ensuring sub-10ms response times for complex SQL aggregation queries across high transaction counts.",
        "Creating an intuitive mobile layout for fast one-handed expense logging on the go."
      ],
      futureImprovements: [
        "AI receipt OCR scanner to automatically extract merchant, date, and line items from camera uploads.",
        "Predictive budget alerts based on recurrent monthly subscriptions."
      ]
    }
  },
  {
    id: "contact-management-system",
    name: "Enterprise Contact Management System",
    tagline: "Robust Relational Architecture, Data Validation & Fast Retrieval",
    description: "An enterprise-grade contact management application engineered in Java with relational database persistence. Features optimized search, multi-field indexing, data validation, and clean architectural separation.",
    category: ["FULL STACK"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    technologies: [
      "Java",
      "SQL",
      "Relational Database",
      "OOP Architecture",
      "JDBC / Data Layer"
    ],
    keyFeatures: [
      "Full Contact Lifecycle CRUD Operations (Create, Read, Update, Delete)",
      "Indexed Relational Database Architecture for Sub-Millisecond Search",
      "Strict Input Validation & Anti-SQL Injection Prepared Statements",
      "Group Categorization (Professional, Personal, Clients, Leads)",
      "Data Export & Backup Utility",
      "Clean Object-Oriented Architecture (DAO Pattern)"
    ],
    githubUrl: "https://github.com/pandureddypandureddy798-collab",
    featured: false,
    details: {
      overview: "Core systems development project highlighting foundational computer science principles: object-oriented design patterns, database normalization, relational integrity, and robust error handling.",
      problem: "Managing contact directories across teams often leads to data duplication, conflicting records, and slow search across unstructured spreadsheets.",
      solution: "Engineered a normalized database schema with the Data Access Object (DAO) pattern in Java to guarantee atomic operations and lightning-fast search.",
      architecture: {
        title: "Layered OOP & DAO Pattern Architecture",
        description: "Presentation and business logic decoupled from persistence layer using Data Access Objects and parameterized JDBC operations.",
        flowSteps: [
          "Input Validation: Sanitizes phone numbers, email RFC formats, and required names.",
          "DAO Service Layer: Translates domain models into transactional SQL queries.",
          "Database Connection Pool: Manages concurrent database connections safely.",
          "Normalized Storage: Organizes contacts, phone tags, and address records across 3NF tables."
        ]
      },
      features: [
        "Fast name and phone number search with partial matching",
        "Duplicate contact detection and intelligent record merge",
        "Custom field tagging and contact grouping",
        "Automated database migration and schema setup scripts"
      ],
      techStack: [
        {
          category: "Languages & Frameworks",
          skills: ["Java (JDK 17+)", "OOP Design Patterns", "JDBC"]
        },
        {
          category: "Data Layer",
          skills: ["MySQL / PostgreSQL", "Relational Normalization", "Indexed Queries"]
        }
      ],
      challenges: [
        "Handling concurrent read/write operations without table locking bottlenecks.",
        "Implementing phone number normalization across diverse international formats."
      ],
      futureImprovements: [
        "REST API microservice wrapper with Spring Boot.",
        "Cloud database synchronization with automated daily backups."
      ]
    }
  }
];
