import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, PenTool } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-accent-400/10 text-accent-400 rounded-full text-xs font-bold tracking-wider uppercase border border-accent-400/20">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-4">
            I'm <span className="text-accent-400">Tyson Mwangi.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-slate-300 mb-6">
            Designing logic, coding visuals.
          </h2>
          
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            A Product Designer and Python Developer dedicated to crafting seamless digital experiences. I specialize in building robust <span className="text-slate-200 font-semibold">Flask APIs</span> and pixel-perfect <span className="text-slate-200 font-semibold">User Interfaces</span>.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <div className="text-xs text-accent-400 uppercase tracking-widest mb-1">Location</div>
              <div className="text-slate-200 font-medium">Nairobi, Kenya</div>
            </div>
            <div>
              <div className="text-xs text-accent-400 uppercase tracking-widest mb-1">Experience</div>
              <div className="text-slate-200 font-medium">5+ Years</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#work"
              className="group px-8 py-4 bg-accent-400 text-dark-900 font-semibold rounded-lg hover:bg-accent-500 transition-all flex items-center justify-center hover-trigger"
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-dark-800 text-white font-semibold rounded-lg hover:bg-dark-700 transition-all border border-dark-700 flex items-center justify-center hover-trigger"
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
            {/* Profile Picture Placeholder */}
            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-dark-700 relative group">
              <img 
                src="https://picsum.photos/seed/animated-man-black-shirt/800/800" 
                alt="Tyson Mwangi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-accent-400/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
          </div>

          {/* Floating Badge 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-2 bg-dark-900 border border-dark-700 p-4 rounded-xl shadow-xl flex items-center space-x-3 z-20"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center p-2 z-30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center p-2 z-20 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-full h-full brightness-0 invert" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center p-2 z-10 shadow-lg">
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
            className="absolute -bottom-6 -left-2 bg-dark-900 border border-dark-700 p-4 rounded-xl shadow-xl flex items-center space-x-3 z-20"
          >
             <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center p-2 z-30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-full h-full" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center p-2 z-20 shadow-lg">
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
    </section>
  );
};

export default Hero;