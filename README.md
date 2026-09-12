# Peddapatlolla Phaniraj Reddy | AI Engineer & Full-Stack Developer Portfolio

A modern, production-grade personal portfolio engineered for **Peddapatlolla Phaniraj Reddy**, positioning him as an **AI Engineer & Full-Stack Developer** specializing in Generative AI, RAG pipelines, autonomous AI agents, and high-performance full-stack web applications.

---

## 🌟 Key Highlights & Features

- **2026 Dark Developer Aesthetic**: Deep slate and zinc tones with subtle cyan, indigo, and purple glow accents, glassmorphic panels (`backdrop-blur-md`), and clean responsive cards.
- **Interactive AI Neural Network Canvas**: Lightweight, hardware-accelerated particle canvas that smoothly responds to cursor physics without degrading frame rate.
- **Centralized Data Architecture**: All portfolio data (profile, projects, skills, education, experience, achievements, DSA) is isolated in clean TypeScript files under `src/data/` for zero-friction editing without modifying UI code.
- **Interactive Project Showcase**:
  - Category filters (`ALL`, `AI / ML`, `GENERATIVE AI`, `FULL STACK`, `DATA ANALYTICS`).
  - Flagship projects with live demo and GitHub repository links.
  - Interactive multi-tab detail modal with **Overview**, **Problem/Solution**, **Architecture Flow**, **Tech Stack**, and **Challenges/Roadmap**.
- **Dedicated "Building with AI" Section**: Visual architecture pipeline illustrating multi-stage ingestion, dense/sparse vector retrieval, cross-encoder reranking, and agentic execution.
- **Academic & Experience Timelines**: Complete verified educational records from **JNTUH University College of Engineering Manthani (CGPA 8.00)**, Intermediate (96.7%), and SSC (100%).
- **DSA & Problem Solving**: Verified breakdown of 250+ conquered problems across LeetCode, GeeksforGeeks, and GitHub algorithms.
- **Production Accessibility & SEO**: Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard navigation, ARIA attributes, skip-to-content link, OpenGraph & Twitter cards, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons & Visuals**: Lucide React, HTML5 Canvas API
- **Tooling & Bundler**: Vite 5, PostCSS, Autoprefixer
- **Backend / AI (Referenced in Projects)**: FastAPI, Python, PostgreSQL, ChromaDB, FAISS, LangChain, RAG

---

## 📁 Project Structure

```
portfolio/
├── index.html                     # Semantic SEO HTML with Open Graph & Twitter meta tags
├── package.json                   # Dependencies & build scripts
├── tsconfig.json & vite.config.ts # TypeScript and Vite configuration
├── tailwind.config.js             # Color palette, glassmorphism, keyframe glow animations
├── public/
│   ├── favicon.svg                # Modern AI neural favicon
│   ├── robots.txt & sitemap.xml   # Search engine configurations
├── src/
│   ├── main.tsx                   # React root mount
│   ├── App.tsx                    # Main portfolio layout and section router
│   ├── index.css                  # Custom scrollbar, glassmorphism, and accessibility styles
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces for all data structures
│   ├── data/
│   │   ├── profile.ts             # Name, bio, contact, stats, avatar & resume links
│   │   ├── skills.ts              # Categorized technical skills matrix
│   │   ├── projects.ts            # Flagship AI & Full-Stack projects + deep details
│   │   ├── experience.ts          # Hackathons, open source, and project leadership
│   │   ├── education.ts           # JNTUH UCE Manthani, Intermediate, SSC
│   │   ├── achievements.ts        # Academic honors, hackathon awards, and coding badges
│   │   ├── certifications.ts      # Verifiable technical certifications
│   │   ├── dsa.ts                 # Algorithmic topics, profile handles, and stats
│   │   └── currentlyLearning.ts   # Future-facing research and learning topics
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx         # Sticky blurred navbar with scrollspy & mobile drawer
│       │   └── Footer.tsx         # Modern 2026 footer with quick navigation and socials
│       ├── hero/
│       │   ├── Hero.tsx           # Strong first impression, headline, CTAs, and terminal
│       │   ├── HeroStats.tsx      # Compact verified stats counters
│       │   └── InteractiveCanvas.tsx # Lightweight interactive AI neural network
│       ├── sections/
│       │   ├── About.tsx          # 4 pillars (Who I Am, What I Build, AI Interests, Goal)
│       │   ├── Skills.tsx         # Filterable technical skill matrix with badge highlights
│       │   ├── AiSpecialization.tsx # "Building with AI" architectural diagram
│       │   ├── Projects.tsx       # Filterable project gallery
│       │   ├── ProjectModal.tsx   # Detailed modal with tabs (Overview, Features, Architecture)
│       │   ├── Experience.tsx     # Clean timeline for hackathons and leadership
│       │   ├── Education.tsx      # Academic timeline with distinction marks
│       │   ├── Achievements.tsx   # Honors and certification credentials
│       │   ├── ProblemSolving.tsx # DSA journey, data structures, and coding profiles
│       │   ├── CurrentlyLearning.tsx # Future exploration roadmap without fake bars
│       │   └── Contact.tsx        # Responsive contact form + verified email/phone
│       └── ui/
│           ├── SectionHeading.tsx # Reusable section title with badge and gradient underline
│           └── Card.tsx           # Glassmorphic card container with glow on hover
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized production bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 How to Deploy to Vercel

### Option A: Using Vercel CLI
1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. In the project root directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts (accept default Vite build settings: `npm run build`, output directory `dist`).
4. To deploy to production:
   ```bash
   vercel --prod
   ```

### Option B: Deploying via GitHub & Vercel Dashboard
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Production AI Engineer & Full-Stack Developer portfolio"
   git branch -M main
   git remote add origin https://github.com/pandureddypandureddy798-collab/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Vercel will automatically detect **Vite** as the framework preset.
5. Click **Deploy**. Your portfolio will be live worldwide in seconds with automatic SSL and global CDN caching.

---

## ✏️ How to Customize Your Information

All personal details are completely centralized in `src/data/`:
- **Change name, email, phone, bio, avatar, or resume link**: Edit `src/data/profile.ts`
- **Add or edit projects**: Edit `src/data/projects.ts`
- **Add or edit skills**: Edit `src/data/skills.ts`
- **Update education / grades**: Edit `src/data/education.ts`
- **Update experience / hackathons**: Edit `src/data/experience.ts`
- **Update achievements or certificates**: Edit `src/data/achievements.ts` and `src/data/certifications.ts`
- **Update DSA problem stats / links**: Edit `src/data/dsa.ts`

---

## 📄 License

Created by **Peddapatlolla Phaniraj Reddy** © 2026. All rights reserved.
