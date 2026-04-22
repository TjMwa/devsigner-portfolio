import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState('');
  
  const commands = [
    { cmd: 'whoami', response: 'Tyson Mwangi: Product Architect & Backend Engineer' },
    { cmd: 'location', response: 'Nairobi, Kenya [E 36.8219, S 1.2921]' },
    { cmd: 'stack --current', response: 'React 19, TS, Python/Flask, PostgreSQL, Docker' },
    { cmd: 'status', response: 'Available for hire. Engineering high-frequency systems.' },
  ];

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    // Initial sequence
    const addLine = (text: string, delay: number) => {
      const id = setTimeout(() => {
        setLines(prev => [...prev, text]);
      }, delay);
      timeoutIds.push(id);
    };

    addLine('> Initializing TysonOS v1.0.4...', 500);
    addLine('> Locating biometric data...', 1500);
    addLine('> Access granted.', 2500);
    addLine('> Type "help" for options.', 3500);

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-dark-900 border border-dark-700 rounded-lg overflow-hidden shadow-2xl font-mono text-sm"
    >
      <div className="bg-dark-800 px-4 py-2 flex items-center justify-between border-b border-dark-700">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-accent-400" />
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Terminal_Session: TysonMwangi</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
      </div>
      
      <div className="p-6 space-y-2 h-[200px] overflow-y-auto scrollbar-hide bg-dark-900/50">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-accent-500 mr-2">$</span>
            <span className="text-slate-300">{line}</span>
          </div>
        ))}
        <div className="flex items-center text-slate-300">
          <span className="text-accent-500 mr-2">$</span>
          <span className="w-2 h-4 bg-accent-400 animate-pulse ml-0.5" />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
