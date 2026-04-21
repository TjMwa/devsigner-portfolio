import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-display font-bold text-white">
            Dev<span className="text-accent-400">Signer</span>.
          </span>
          <p className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} Tyson Mwangi. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-accent-400 transition-colors text-sm hover-trigger">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-accent-400 transition-colors text-sm hover-trigger">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;