import { useState } from 'react';
import { Preloader } from './components/layout/Preloader';
import { CustomCursor } from './components/layout/CustomCursor';
import { FloatingSocials } from './components/layout/FloatingSocials';
import { NavbarSahil } from './components/layout/NavbarSahil';
import { HeroSahil } from './components/hero/HeroSahil';
import { RecruiterScanBar } from './components/sections/About';
import { AboutSahil } from './components/sections/AboutSahil';
import { ValueProposition } from './components/sections/Experience';
import { WhatIDoSahil } from './components/sections/WhatIDoSahil';
import { TechStackSahil } from './components/sections/TechStackSahil';
import { AiSpecialization } from './components/sections/AiSpecialization';
import { ProjectsSahil } from './components/sections/ProjectsSahil';
import { DevProcess } from './components/sections/Skills';
import { CareerTimelineSahil } from './components/sections/CareerTimelineSahil';
import { ProblemSolving } from './components/sections/ProblemSolving';
import { CurrentlyLearning } from './components/sections/CurrentlyLearning';
import { WhyWorkWithMe } from './components/sections/Education';
import { ClientServices } from './components/sections/Achievements';
import { ContactSahil } from './components/sections/ContactSahil';
import { FooterSahil } from './components/layout/FooterSahil';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b080c] text-[#eae5ec] flex flex-col selection:bg-[#c2a4ff]/30 selection:text-white relative font-sans">
      {/* Interactive Reference Preloader */}
      {loading && <Preloader onLoaded={() => setLoading(false)} />}

      {/* Difference Blend Custom Cursor */}
      <CustomCursor />

      {/* Fixed Left & Right Floating Elements */}
      <FloatingSocials />

      {/* Top Navbar */}
      <NavbarSahil />

      {/* Main Conversion Flow Sections */}
      <main id="main-content" className="flex-grow">
        {/* Phase 4: Hero - The 5-Second Test */}
        <HeroSahil />

        {/* Phase 5: Recruiter Quick-Scan Profile Bar */}
        <RecruiterScanBar />

        {/* Phase 7: Narrative About Me */}
        <AboutSahil />

        {/* Phase 6: Value Proposition - What I Can Build */}
        <ValueProposition />

        {/* Phase 10: Capabilities & Core Toolkit */}
        <WhatIDoSahil />
        <TechStackSahil />

        {/* Phase 11: AI Engineering Stack & RAG Pipeline Flow */}
        <AiSpecialization />

        {/* Phase 8 & 9: Signature Projects & 10-Part Interactive Case Studies */}
        <ProjectsSahil />

        {/* Phase 12: My Engineering Development Process */}
        <DevProcess />

        {/* Phase 13 & 14: Career & Education Milestone Journey */}
        <CareerTimelineSahil />

        {/* Phase 16: Problem Solving & 250+ Conquered DSA */}
        <ProblemSolving />

        {/* Phase 17: Currently Exploring R&D Lab */}
        <CurrentlyLearning />

        {/* Phase 18: Recruiter Proof Matrix - Why Work With Me */}
        <WhyWorkWithMe />

        {/* Phase 19: Startup & Business Product Services */}
        <ClientServices />

        {/* Phase 20: High-Conversion Contact Section */}
        <ContactSahil />
      </main>

      {/* Footer */}
      <FooterSahil />
    </div>
  );
}

export default App;
