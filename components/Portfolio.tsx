import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
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
      className="group relative bg-void-800/50 backdrop-blur-md rounded-sm overflow-hidden border border-void-700 hover:border-gold-prime/50 transition-all duration-300 hover-trigger shadow-xl hover:shadow-gold-prime/10"
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
        <div className="absolute inset-0 bg-void-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gold-prime rounded-full text-void-900 hover:scale-110 transition-transform shadow-lg"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-void-700 rounded-full text-white hover:scale-110 transition-transform shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 relative z-10 bg-void-800/80">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-sm bg-void-900/50 text-gold-prime border border-gold-prime/20">
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
  const [filter, setFilter] = React.useState('All');
  
  const allTags = ['All', ...new Set(PROJECTS.flatMap(p => p.tags))];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <section id="work" className="py-24 bg-void-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Explore a selection of my recent design and development work."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all border ${
                filter === tag 
                ? 'bg-gold-prime text-void-900 border-gold-prime' 
                : 'bg-void-800 text-slate-400 border-void-700 hover:border-gold-prime/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;