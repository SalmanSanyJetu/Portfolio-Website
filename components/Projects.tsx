import React, { useState } from 'react';
import Section from './ui/Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Trophy, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Engineering & Research" subtitle="Innovation through hardware and analysis.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-dark-card rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-neon-cyan/50 dark:hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,170,0,0.1)]"
          >
            {/* Image Placeholder with Overlay */}
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-card to-transparent z-10 transition-colors duration-300" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                  project.category === 'IoT' ? 'bg-neon-cyan text-black' : 'bg-neon-purple text-white'
                }`}>
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 relative z-20">
              {project.highlight && (
                <div className="mb-3 flex items-center gap-2 text-yellow-600 dark:text-yellow-400 text-sm font-bold">
                  <Trophy size={16} />
                  {project.highlight}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-neon-cyan dark:group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/5 transition-colors">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github size={16} /> Source Code
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-neon-cyan hover:underline transition-all">
                  Details <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;