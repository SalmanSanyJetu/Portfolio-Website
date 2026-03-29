import React, { useState } from 'react';
import Section from './ui/Section';
import { CREATIVE_WORKS } from '../constants';
import { motion } from 'framer-motion';
import { PlayCircle, Youtube, Award, Facebook, Instagram } from 'lucide-react';

const YoutubeMockup = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col bg-white dark:bg-[#0f0f0f] text-black dark:text-white absolute inset-0">
    <div className="h-16 bg-red-600 w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Untitled181_20250612151855.png?raw=true")' }}></div>
    <div className="px-4 py-3 flex gap-4 items-center border-b border-gray-200 dark:border-gray-800">
      <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
        <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Untitled118_20250413143543.png?raw=true" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="font-bold text-sm">16-Bit Jitu</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">2.05K subscribers • 214 videos</div>
      </div>
    </div>
    <div className="p-4 grid grid-cols-2 gap-3 overflow-hidden">
      <div className="flex flex-col gap-2">
        <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
           <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/2026-03-30_02-42-14.jpg?raw=true" alt="Thumbnail" className="w-full h-full object-cover" />
           <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">3:21</div>
        </div>
        <div>
          <div className="text-xs font-bold line-clamp-2 leading-tight">Yuta Okkotsu vs Ryu & Uro & Kurourushi (Sendai Colony) X I will Survive (Jujutsu Kaisen 4K AMV)</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">1K views • 2 days ago</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
           <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/2026-03-30_02-42-27.jpg?raw=true" alt="Thumbnail" className="w-full h-full object-cover" />
           <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">2:03</div>
        </div>
        <div>
          <div className="text-xs font-bold line-clamp-2 leading-tight">Takopi's Original Sin - おつかれSUMMER (Otsukare Summer) [1080P/AMV]</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">8.2K views • 1 week ago</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const FacebookMockup = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col bg-gray-100 dark:bg-[#18191a] text-black dark:text-[#e4e6eb] absolute inset-0">
    <div className="h-20 bg-blue-600 w-full relative bg-cover bg-center" style={{ backgroundImage: 'url("https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Untitled181_20250612151855.png?raw=true")' }}>
      <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-full border-4 border-white dark:border-[#242526] bg-gray-300 dark:bg-gray-700 overflow-hidden">
        <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Untitled118_20250413143543.png?raw=true" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="pt-8 px-4 pb-3 bg-white dark:bg-[#242526] shadow-sm">
      <div className="font-bold text-lg">16-Bit Jitu</div>
      <div className="text-xs text-gray-500 dark:text-[#b0b3b8]">7.2K followers • 8 following</div>
    </div>
    <div className="m-3 p-3 bg-white dark:bg-[#242526] rounded-lg shadow-sm flex-grow">
      <div className="flex gap-2 items-center mb-3">
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
           <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Untitled118_20250413143543.png?raw=true" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-bold text-sm leading-tight">16-Bit Jitu</div>
          <div className="text-[10px] text-gray-500 dark:text-[#b0b3b8]">2 hrs • 🌎</div>
        </div>
      </div>
      <div className="text-sm mb-2">Just dropped a new editing tutorial! Let me know what you guys think 🔥🎬 #videoediting #davinciresolve</div>
      <div className="h-32 w-full bg-gray-100 dark:bg-[#3a3b3c] rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
         <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop" alt="Post" className="w-full h-full object-cover" />
      </div>
    </div>
  </motion.div>
);

const InstagramMockup = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col bg-white dark:bg-black text-black dark:text-white absolute inset-0">
    <div className="px-4 py-4 flex gap-6 items-center border-b border-gray-200 dark:border-gray-800">
      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 flex-shrink-0">
        <div className="w-full h-full bg-white dark:bg-black rounded-full border-2 border-white dark:border-black overflow-hidden">
          <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Face/655285262_922278117259748_852947494824993256_n.jpg?raw=true" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-4 text-center w-full justify-around">
        <div><div className="font-bold">59</div><div className="text-xs text-gray-500">posts</div></div>
        <div><div className="font-bold">378</div><div className="text-xs text-gray-500">followers</div></div>
        <div><div className="font-bold">12</div><div className="text-xs text-gray-500">following</div></div>
      </div>
    </div>
    <div className="px-4 py-3 text-sm">
      <div className="font-bold">16-Bit Jitu</div>
      <div className="text-gray-600 dark:text-gray-400 mt-1">I Make Bangers and AMVs <br/> https://youtube.com/@16_bit_jitu <br/> Free Palestine</div>
    </div>
    <div className="grid grid-cols-3 gap-[2px] mt-1 flex-grow">
      <div className="bg-gray-200 dark:bg-gray-800 relative aspect-square">
         <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Screenshot%202026-03-30%20024131.png?raw=true" alt="Post 1" className="w-full h-full object-cover" />
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 relative aspect-square">
         <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Screenshot%202026-03-30%20024137.png?raw=true" alt="Post 2" className="w-full h-full object-cover" />
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 relative aspect-square">
         <img src="https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/youtube/Screenshot%202026-03-30%20024144.png?raw=true" alt="Post 3" className="w-full h-full object-cover" />
      </div>
    </div>
  </motion.div>
);

const Creative: React.FC = () => {
  const [activeMockup, setActiveMockup] = useState<'youtube' | 'facebook' | 'instagram'>('youtube');

  return (
    <Section id="creative" title="Creative Studio" subtitle="Visual storytelling and brand growth." className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-card/50 transition-colors duration-300">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Brand Card - Spans 2 cols on desktop if we wanted, but let's keep uniform grid for simplicity */}
        {CREATIVE_WORKS.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
              relative p-1 rounded-2xl bg-gradient-to-br from-gray-200 dark:from-white/10 to-transparent transition-colors duration-300
              ${work.id === 'c2' ? 'lg:col-span-2 lg:row-span-2' : ''}
            `}
          >
            <div className="bg-white dark:bg-black/80 h-full rounded-xl p-8 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-neon-purple/50 dark:hover:border-neon-purple/50 transition-colors duration-300 flex flex-col justify-between shadow-sm dark:shadow-none">
              
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                    {work.type === 'Video' && <PlayCircle size={32} />}
                    {work.type === 'Brand' && <Youtube size={32} />}
                    {work.type === 'Award' && <Award size={32} />}
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded transition-colors duration-300">
                    {work.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{work.title}</h3>
                <p className="text-neon-cyan text-sm font-bold mb-4">{work.role}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">{work.description}</p>
              </div>

              {work.id === 'c2' && (
                <div className="mt-2 mb-6 flex-grow flex flex-col">
                  {/* Mockup Display */}
                  <div className="flex-grow bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 relative min-h-[260px] mb-4">
                     {activeMockup === 'youtube' && <YoutubeMockup />}
                     {activeMockup === 'facebook' && <FacebookMockup />}
                     {activeMockup === 'instagram' && <InstagramMockup />}
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                     <button onClick={() => setActiveMockup('facebook')} className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors ${activeMockup === 'facebook' ? 'bg-[#1877F2] text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                       <Facebook size={16} /> Facebook
                     </button>
                     <button onClick={() => setActiveMockup('instagram')} className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors ${activeMockup === 'instagram' ? 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                       <Instagram size={16} /> Instagram
                     </button>
                     <button onClick={() => setActiveMockup('youtube')} className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors ${activeMockup === 'youtube' ? 'bg-[#FF0000] text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                       <Youtube size={16} /> YouTube
                     </button>
                  </div>
                </div>
              )}

              {work.stats && (
                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
                   <p className="text-gray-900 dark:text-white font-mono font-bold text-lg flex items-center gap-2 transition-colors duration-300">
                     <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                     {work.stats}
                   </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual representation of editing timeline (Animated) */}
      <div className="mt-16 relative h-32 bg-gray-100 dark:bg-dark-card rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 group transition-colors duration-300">
        <div className="absolute inset-0 flex flex-col justify-center">
           <motion.div 
             className="flex gap-1 h-full items-center"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ 
               repeat: Infinity, 
               ease: "linear", 
               duration: 20 
             }}
             style={{ minWidth: "200%" }}
           >
             {[...Array(40)].map((_, i) => (
               <div 
                 key={i} 
                 className={`h-16 rounded-md flex-shrink-0 border-l-2 border-white/50 dark:border-black/20 ${
                   i % 5 === 0 ? 'bg-neon-purple/90 dark:bg-neon-purple/40 w-32' : 
                   i % 4 === 0 ? 'bg-neon-cyan/90 dark:bg-neon-cyan/40 w-24' : 
                   i % 3 === 0 ? 'bg-neon-green/90 dark:bg-neon-green/40 w-40' : 
                   'bg-gray-300/90 dark:bg-gray-800 w-16'
                 }`}
                 style={{ 
                    marginTop: i % 2 === 0 ? '-10px' : '10px'
                 }}
               >
                 <div className="w-full h-full bg-gradient-to-b from-white/20 dark:from-white/5 to-transparent transition-colors duration-300" />
               </div>
             ))}
           </motion.div>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-dark-bg dark:via-transparent dark:to-dark-bg pointer-events-none transition-colors duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-white/80 dark:bg-black/60 px-6 py-3 rounded-full text-gray-900 dark:text-gray-200 font-mono font-bold border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-lg dark:shadow-2xl flex items-center gap-3 transform group-hover:scale-105 transition-all duration-300">
             <div className="flex gap-1 h-4 items-end">
                <span className="w-1 h-2 bg-neon-cyan animate-pulse"></span>
                <span className="w-1 h-4 bg-neon-purple animate-pulse delay-75"></span>
                <span className="w-1 h-3 bg-neon-green animate-pulse delay-150"></span>
             </div>
             Timeline: Video Editing Mastery
           </div>
        </div>
      </div>

    </Section>
  );
};

export default Creative;