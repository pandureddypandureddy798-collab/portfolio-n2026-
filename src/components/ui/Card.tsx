import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glowOnHover = true,
}) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        glowOnHover ? 'glass-card-hover' : ''
      } ${className}`}
    >
      {/* Subtle top reflection line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
