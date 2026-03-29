import React, { useState } from 'react';
import Section from './ui/Section';
import { LEADERSHIP } from '../constants';
import { Flag } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <Section id="leadership" title="Leadership" subtitle="Driving communities forward." className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {LEADERSHIP.map((role, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 group">
            
            <div className="md:w-1/3 text-right md:border-r md:border-gray-200 dark:md:border-white/10 md:pr-12 relative transition-colors duration-300">
               <span className="text-5xl font-display font-bold text-gray-100 dark:text-white/5 group-hover:text-neon-cyan/10 dark:group-hover:text-neon-cyan/20 transition-colors absolute -top-4 right-0 md:right-12 select-none">
                 {role.year}
               </span>
               <div className="relative z-10 pt-2">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{role.organization}</h3>
                 <span className="inline-block mt-2 px-3 py-1 bg-gray-50 dark:bg-white/5 rounded-full text-xs font-mono text-neon-cyan border border-neon-cyan/20 transition-colors duration-300">
                    {role.year}
                 </span>
               </div>
               
               {/* Dot for timeline */}
               <div className="hidden md:block absolute top-4 -right-[6px] w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_10px_#FFAA00]" />
            </div>

            <div className="md:w-2/3 pt-2">
               <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2 transition-colors duration-300">
                 <Flag size={18} className="text-neon-purple" /> {role.role}
               </h4>
               <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                 {role.description}
               </p>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
};

export default Leadership;