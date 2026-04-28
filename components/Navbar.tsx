import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-void-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-white hover-trigger">
          Dev<span className="text-gold-prime">Signer</span>.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-slate-300 hover:text-gold-prime transition-colors hover-trigger"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-bold text-void-900 bg-gold-prime rounded-sm hover:bg-gold-light transition-colors hover-trigger"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-void-900 border-b border-void-700 p-6 flex flex-col space-y-4 shadow-2xl">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-mono text-slate-300 hover:text-gold-prime"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block text-center w-full px-5 py-3 font-bold text-void-900 bg-gold-prime rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;