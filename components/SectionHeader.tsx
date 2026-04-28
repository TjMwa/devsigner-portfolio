import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'left' | 'center' | 'oversized';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  variant = 'left',
  className = '' 
}) => {
  const isCenter = variant === 'center';
  const isOversized = variant === 'oversized';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${isCenter ? 'text-center flex flex-col items-center' : ''} ${className}`}
    >
      <h2 className={`font-display font-bold text-white mb-4 ${isOversized ? 'text-6xl md:text-8xl' : 'text-4xl md:text-5xl'}`}>
        {title}
      </h2>
      <div className={`h-1 bg-gold-prime ${isCenter ? 'w-32' : 'w-20'}`}></div>
      {subtitle && (
        <p className="mt-6 text-slate-400 max-w-2xl text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
