import React from 'react';
import { Code2, BrainCircuit, Cpu, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Card } from '../ui/Card';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
};

export const HeroStats: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {profileData.heroStats.map((stat) => (
          <Card
            key={stat.label}
            className="flex items-center gap-3.5 p-4 sm:p-5 bg-dark-900/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              {iconMap[stat.icon] || <Cpu className="w-5 h-5 text-cyan-400" />}
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 leading-tight line-clamp-1">
                {stat.label}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
