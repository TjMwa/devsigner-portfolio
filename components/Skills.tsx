import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Technical Expertise"
          subtitle="A comprehensive overview of my core skills and tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-dark-800/50 backdrop-blur-md p-6 rounded-xl border border-dark-700 hover:border-accent-400/30 transition-colors group hover-trigger"
            >
              <div className="bg-dark-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.2)]">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (index * 0.1) + (i * 0.05),
                      ease: "easeOut"
                    }}
                    className="px-3 py-1 text-xs font-mono border border-gold-prime/30
                               text-gold-prime rounded-full bg-void-800
                               hover:border-gold-prime hover:bg-gold-prime/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;