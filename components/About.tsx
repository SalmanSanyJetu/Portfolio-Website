import React, { useState } from 'react';
import Section from './ui/Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Code2, Camera, MapPin, Trophy, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedEdu = EDUCATION.find(e => e.id === selectedId);

  return (
    <Section id="about" title="About Me" subtitle="The intersection of logic and imagination.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Bio */}
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I am a <strong className="text-gray-900 dark:text-white">22-year-old Electrical & Electronic Engineering (EEE)</strong> undergraduate at Southeast University. 
            Unlike traditional engineers, I don't just work with circuits; I thrive in the digital creative space.
          </p>
          <p>
            My journey is defined by a dual passion: <span className="text-neon-cyan font-bold">Hardware Engineering</span> and <span className="text-neon-purple font-bold">Video Production</span>. 
            Whether I'm designing an IoT-based solar inverter or editing a high-energy music video, I bring a meticulous, analytical approach to every frame and every line of code.
          </p>
          <p>
            I actively integrate <strong className="text-neon-green">AI tools</strong> into my workflow to maximize efficiency, allowing me to deliver high-quality results faster. I am adaptable, eager to learn, and ready to lead.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center text-center transition-colors">
              <Code2 className="text-neon-cyan mb-2" size={32} />
              <span className="font-bold text-gray-900 dark:text-white">Engineering</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center text-center transition-colors">
              <Camera className="text-neon-purple mb-2" size={32} />
              <span className="font-bold text-gray-900 dark:text-white">Production</span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
                {!selectedId ? (
                    <motion.div 
                        key="list"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative border-l border-gray-300 dark:border-white/10 pl-8 ml-4 lg:ml-0 space-y-12"
                    >
                        {EDUCATION.map((edu, index) => (
                            <div 
                                key={edu.id || index} 
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedId(edu.id)}
                            >
                                {/* Dot */}
                                <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-gray-50 dark:border-dark-bg transition-colors duration-300 ${edu.highlight ? 'bg-neon-cyan shadow-[0_0_10px_#FFAA00]' : 'bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-800 dark:group-hover:bg-white'}`} />
                                
                                <div className="bg-white dark:bg-dark-card p-6 rounded-xl border border-gray-200 dark:border-white/5 group-hover:border-neon-cyan/50 dark:group-hover:border-neon-cyan/30 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:translate-x-2 shadow-sm dark:shadow-none">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                            <GraduationCap size={20} className={edu.highlight ? "text-neon-cyan" : "text-gray-500 dark:text-gray-400"} />
                                            {edu.degree}
                                        </h3>
                                        <span className="text-sm font-mono text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">{edu.year}</span>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-400 font-medium">{edu.institution}</p>
                                    <p className={`mt-2 text-sm font-bold ${edu.highlight ? 'text-neon-cyan' : 'text-gray-500'}`}>
                                        {edu.grade}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-600 mt-2 italic group-hover:text-neon-cyan/70 transition-colors">Click to view details</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl relative h-full flex flex-col"
                    >
                        <button 
                            onClick={() => setSelectedId(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/60 hover:bg-neon-cyan dark:hover:bg-neon-cyan hover:text-black rounded-full transition-all duration-300 text-gray-900 dark:text-white backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm"
                            aria-label="Close details"
                        >
                            <X size={20} />
                        </button>
                        
                        <div className="h-48 sm:h-56 overflow-hidden relative shrink-0">
                            <img 
                                src={selectedEdu?.image} 
                                alt={selectedEdu?.institution}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 dark:from-dark-card dark:via-dark-card/50 to-transparent transition-colors duration-300" />
                            <div className="absolute bottom-4 left-6 right-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 drop-shadow-sm dark:drop-shadow-lg">{selectedEdu?.institution}</h3>
                                <p className="text-neon-cyan font-bold drop-shadow-sm dark:drop-shadow-md">{selectedEdu?.degree}</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-6 flex-grow flex flex-col justify-center">
                            <div className="grid grid-cols-1 gap-4 text-gray-700 dark:text-gray-300">
                                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-neon-purple/30 transition-colors">
                                    <Trophy className="text-neon-purple mt-1 shrink-0" size={20} />
                                    <div>
                                        <span className="block text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Ranking / Reputation</span>
                                        <span className="text-gray-900 dark:text-white">{selectedEdu?.ranking}</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-neon-green/30 transition-colors">
                                    <MapPin className="text-neon-green mt-1 shrink-0" size={20} />
                                    <div>
                                        <span className="block text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Location</span>
                                        <span className="text-gray-900 dark:text-white">{selectedEdu?.address}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Year</span>
                                    <span className="text-gray-900 dark:text-white font-mono text-lg">{selectedEdu?.year}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Result</span>
                                    <span className="text-neon-cyan font-bold text-lg">{selectedEdu?.grade}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

      </div>
    </Section>
  );
};

export default About;