import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-4 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
