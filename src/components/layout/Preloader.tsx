import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profile';

interface PreloaderProps {
  onLoaded: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            setIsWiping(true);
            setTimeout(() => {
              onLoaded();
            }, 800);
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoaded]);

  const handleManualEnter = () => {
    setIsWiping(true);
    setTimeout(() => {
      onLoaded();
    }, 600);
  };

  return (
    <div
      className={`loading-screen transition-opacity duration-700 ${
        isWiping ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header */}
      <div className="loading-header">
        <span className="loader-title font-mono tracking-wider">
          {profileData.name.toUpperCase()}
        </span>
        <div className="loaderGame-container">
          <div className="loaderGame-in">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="loaderGame-line" />
            ))}
          </div>
          <div className="loaderGame-ball" />
        </div>
      </div>

      {/* Large Scrolling Background Marquee */}
      <div className="loading-marquee font-black">
        <span>
          AI ENGINEER & FULL-STACK DEVELOPER • GENERATIVE AI • RAG PIPELINES • AUTONOMOUS AGENTS • PEDDAPATLOLLA PHANIRAJ REDDY •&nbsp;
        </span>
        <span>
          AI ENGINEER & FULL-STACK DEVELOPER • GENERATIVE AI • RAG PIPELINES • AUTONOMOUS AGENTS • PEDDAPATLOLLA PHANIRAJ REDDY •&nbsp;
        </span>
      </div>

      {/* Center Interactive Button / Loader */}
      <div
        onClick={handleManualEnter}
        className={`loading-wrap ${
          isWiping ? 'scale-[3] opacity-0' : 'hover:scale-105'
        }`}
      >
        <div className="loading-button">
          {!isComplete ? (
            <>
              <span className="text-slate-400 font-mono text-sm uppercase tracking-widest">
                Loading
              </span>
              <span className="font-mono text-white font-bold">{percent}%</span>
              <span className="loading-box" />
            </>
          ) : (
            <span className="text-white font-bold tracking-widest uppercase font-mono text-sm text-[#c2a4ff] flex items-center gap-2 animate-pulse">
              ENTER PORTFOLIO ↗
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
