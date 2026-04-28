import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-void-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Work Experience"
          subtitle="A journey through my professional roles and key achievements."
          variant="center"
        />

        <div className="relative border-l border-void-700 ml-4 md:ml-12 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-8 md:pl-12"
            >
              <div className="bg-void-800/50 backdrop-blur-md p-6 rounded-sm border border-void-700 hover:border-gold-prime/30 transition-all duration-300">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-void-900 border-4 border-gold-prime flex items-center justify-center z-10">
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-2xl font-display font-bold text-white">{job.role}</h3>
                  <span className="text-gold-prime font-mono text-xs bg-gold-prime/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-gold-prime/20">
                    {job.period}
                  </span>
                </div>

                <div className="flex items-center text-slate-300 mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{job.company}</span>
                </div>

                <p className="text-slate-400 mb-4 italic">{job.description}</p>

                <ul className="space-y-2">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gold-prime rounded-full shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;