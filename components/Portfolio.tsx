import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the motion values
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to image translation (parallax)
  // We move the image slightly in the opposite direction of the mouse
  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["15px", "-15px"]);
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["15px", "-15px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize values between -0.5 and 0.5
    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-accent-400/50 transition-all duration-300 hover-trigger shadow-xl hover:shadow-accent-400/10"
    >
      <div className="aspect-video overflow-hidden relative">
        <motion.img 
          src={project.imageUrl} 
          alt={project.title} 
          style={{
            x: imgX,
            y: imgY,
            scale: 1.15, // Base scale to allow room for parallax movement
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
          <button className="p-3 bg-accent-400 rounded-full text-dark-900 hover:scale-110 transition-transform shadow-lg">
            <ExternalLink className="w-6 h-6" />
          </button>
          <button className="p-3 bg-dark-700 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
            <Github className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="p-6 relative z-10 bg-dark-800">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-dark-700 text-accent-400">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-400"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;