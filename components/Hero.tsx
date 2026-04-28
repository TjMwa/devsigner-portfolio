import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, PenTool } from 'lucide-react';
import TechMarquee from './TechMarquee';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-prime/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-signal/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-gold-prime/10 text-gold-prime rounded-full text-xs font-mono tracking-wider uppercase border border-gold-prime/20">
              Available for new projects
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight mb-4 tracking-tighter">
            I'm <span className="text-gold-prime">Tyson Mwangi.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-body italic text-slate-300 mb-6">
            Designing logic, coding visuals.
          </h2>

          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed font-body">
            A Product Designer and Python Developer dedicated to crafting seamless digital experiences. I specialize in building robust <span className="text-gold-prime font-mono">Flask APIs</span> and pixel-perfect <span className="text-gold-prime font-mono">User Interfaces</span>.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <div className="text-xs text-gold-prime uppercase font-mono tracking-widest mb-1">Location</div>
              <div className="text-slate-200 font-medium">Nairobi, Kenya</div>
            </div>
            <div>
              <div className="text-xs text-gold-prime uppercase font-mono tracking-widest mb-1">Experience</div>
              <div className="text-slate-200 font-medium">5+ Years</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group px-8 py-4 bg-gold-prime text-void-900 font-bold rounded-sm hover:bg-gold-light transition-all flex items-center justify-center hover-trigger"
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-void-800 text-white font-bold rounded-sm hover:bg-void-700 transition-all border border-void-700 flex items-center justify-center hover-trigger"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 aspect-square max-w-[450px] mx-auto">
            {/* Geometric Abstract Placeholder */}
            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-void-700 relative group bg-void-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-linear-to-br from-gold-prime/20 to-signal/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-gold-prime/30 rotate-45" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-signal/30 -rotate-12" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className="text-8xl font-display font-extrabold text-gold-prime/10 italic">TM</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-void-900/80 to-transparent opacity-60" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-gold-prime/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
          </div>

          {/* Floating Badge 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-2 bg-void-900 border border-void-700 p-4 rounded-xl shadow-xl flex items-center space-x-3 z-20"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-void-800 border-2 border-void-700 flex items-center justify-center p-2 z-30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full bg-void-800 border-2 border-void-700 flex items-center justify-center p-2 z-20 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-full h-full brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full bg-void-800 border-2 border-void-700 flex items-center justify-center p-2 z-10 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-full h-full brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Backend</div>
              <div className="text-sm font-bold text-white">Python Expert</div>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-2 bg-void-900 border border-void-700 p-4 rounded-xl shadow-xl flex items-center space-x-3 z-20"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-void-800 border-2 border-void-700 flex items-center justify-center p-2 z-30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-full h-full" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full bg-void-800 border-2 border-void-700 flex items-center justify-center p-2 z-20 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD" className="w-full h-full brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Frontend</div>
              <div className="text-sm font-bold text-white">UI/UX Designer</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20 w-full">
        <TechMarquee />
      </div>
    </section>
  );
};

export default Hero;