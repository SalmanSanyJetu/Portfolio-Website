import React from 'react';
import Section from './ui/Section';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to build the future." className="bg-gray-50/50 dark:bg-dark-card/30 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className={`${category.color}`} size={28} />
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                    <span className={`text-xs font-mono opacity-70 ${category.color}`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (skillIndex * 0.1) }}
                      className={`h-full rounded-full bg-current ${category.color.replace('text-', 'bg-')}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee Effect for Quick Keywords */}
      <div className="mt-16 overflow-hidden relative w-full py-4 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm transform -rotate-1 transition-colors duration-300">
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-50 dark:from-dark-bg to-transparent z-10 transition-colors duration-300" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-50 dark:from-dark-bg to-transparent z-10 transition-colors duration-300" />
        
        <div className="flex whitespace-nowrap animate-[float_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4">
               {["Arduino", "Microcontrollers", "PCB Design", "Automation", "Video VFX", "Color Grading", "Social Media Growth", "Prompt Engineering"].map((tag) => (
                 <span key={tag} className="text-xl font-display font-bold text-gray-400 dark:text-white/20 uppercase tracking-widest transition-colors duration-300">
                    {tag} <span className="text-neon-cyan">●</span>
                 </span>
               ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;