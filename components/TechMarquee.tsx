import React from 'react';
import { TECH_MARQUEE } from '../constants';

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-10 bg-dark-900/50 backdrop-blur-sm border-y border-dark-700 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-900 via-dark-900/50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-900 via-dark-900/50 to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center space-x-12 px-6">
          {TECH_MARQUEE.map((tech, index) => (
            <span key={`tech-1-${index}`} className="text-3xl md:text-5xl font-display font-bold text-white text-stroke-accent opacity-90">
              {tech}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center space-x-12 px-6" aria-hidden="true">
          {TECH_MARQUEE.map((tech, index) => (
            <span key={`tech-2-${index}`} className="text-3xl md:text-5xl font-display font-bold text-white text-stroke-accent opacity-90">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .text-stroke-accent {
          -webkit-text-stroke: 1px #a3e635;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;