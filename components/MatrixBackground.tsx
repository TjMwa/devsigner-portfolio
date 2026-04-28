import React from 'react';

const MatrixBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-void-900" />

      {/* SVG Grid */}
      <div className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#C9A84C 0.5px, transparent 0.5px), linear-gradient(to right, #C9A84C 0.5px, transparent 0.5px), linear-gradient(to bottom, #C9A84C 0.5px, transparent 0.5px)`,
          backgroundSize: `40px 40px, 40px 40px, 40px 40px`,
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Topographic Lines (Simulated via gradients) */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          background: `radial-gradient(circle at 20% 30%, transparent 0%, transparent 40%, #C9A84C 41%, transparent 42%), 
                       radial-gradient(circle at 80% 70%, transparent 0%, transparent 30%, #C9A84C 31%, transparent 32%)`,
          backgroundSize: '100% 100%'
        }}
      />
    </div>
  );
};

export default MatrixBackground;

