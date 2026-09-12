import { ArrowUp, Heart } from 'lucide-react';
import { profileData } from '../../data/profile';

export const FooterSahil: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070508] border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
        
        {/* Call to action bar matching reference */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
              READY TO BUILD INTELLIGENT SOFTWARE?
            </h3>
            <p className="text-sm text-slate-400 font-light mt-1">
              Currently open to AI/ML & Full-Stack developer internships and full-time engineering roles.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-xs font-mono font-semibold tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-[#c2a4ff] hover:bg-white transition-all shadow-[0_0_20px_rgba(194,164,255,0.3)]"
            >
              HIRE ME
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © 2026 {profileData.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>

          <p className="flex items-center gap-1.5">
            BUILT WITH <Heart className="w-3.5 h-3.5 text-[#c2a4ff] fill-[#c2a4ff]" /> IN REACT & TYPESCRIPT
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>TOP</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
