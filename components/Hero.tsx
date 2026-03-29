import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { HERO_TITLES } from '../constants';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  
  // Typing Effect Logic
  useEffect(() => {
    const currentFullText = HERO_TITLES[textIndex];
    
    let timer: number;
    
    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timer = window.setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  // Animation Helpers
  const transitionConfig = { duration: 0.4, type: "spring" as const, stiffness: 200, damping: 20 };

  const getBubble1Animate = () => {
    // Top Right Bubble
    if (hoveredBubble === 1) return { scale: 2, x: -20, y: 20, zIndex: 50 }; // Grow 2x & Move to center
    if (hoveredBubble === 2) return { scale: 0.9, x: 0, y: -40, zIndex: 10 };   // Shrink & Move Up (away from B2)
    if (hoveredBubble === 3) return { scale: 0.9, x: 40, y: 0, zIndex: 10 };    // Shrink & Move Right (away from B3)
    return { scale: 1, x: 0, y: 0, zIndex: 20 };
  };

  const getBubble2Animate = () => {
    // Bottom Right Bubble
    if (hoveredBubble === 2) return { scale: 2, x: -20, y: -20, zIndex: 50 }; // Grow 2x & Move to center
    if (hoveredBubble === 1) return { scale: 0.9, x: 0, y: 40, zIndex: 10 };     // Shrink & Move Down (away from B1)
    if (hoveredBubble === 3) return { scale: 0.9, x: 40, y: 0, zIndex: 10 };     // Shrink & Move Right (away from B3)
    return { scale: 1, x: 0, y: 0, zIndex: 20 };
  };

  const getBubble3Animate = () => {
    // Left Center Bubble
    if (hoveredBubble === 3) return { scale: 2, x: 30, y: 0, zIndex: 50 };    // Grow 2x & Move to center (Right)
    if (hoveredBubble === 1) return { scale: 0.9, x: -40, y: 0, zIndex: 10 };    // Shrink & Move Left (away from B1)
    if (hoveredBubble === 2) return { scale: 0.9, x: -40, y: 0, zIndex: 10 };    // Shrink & Move Left (away from B2)
    return { scale: 1, x: 0, y: 0, zIndex: 20 };
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* User Image Background */}
        <div className="absolute inset-0 bg-white dark:bg-dark-bg transition-colors duration-300">
            <img 
                src="https://lh3.googleusercontent.com/d/117oEKNk8swAlZ0LX4jzxc-af_ykc-z9Q" 
                alt="Salman Sany Jetu"
                className="w-full h-full object-cover object-[75%_center] opacity-60 dark:opacity-40 blur-[3px]" 
            />
        </div>

        {/* Vignette Effect - Darkened edges to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-90 transition-colors duration-300" />
        
        {/* Additional Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 transition-colors duration-300" />

        {/* Animated Background Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none transition-colors duration-300" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 dark:bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 dark:bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-block px-4 py-1 mb-6 border border-neon-cyan/30 rounded-full bg-neon-cyan/10 dark:bg-neon-cyan/5 backdrop-blur-sm">
                <span className="text-neon-cyan font-mono text-sm tracking-wider font-bold">AVAILABLE FOR HIRE</span>
              </div>

              {/* Updated Typography */}
              <div className="mb-2">
                <span className="block text-xl md:text-2xl font-nunito font-light text-gray-700 dark:text-gray-300 mb-2">
                  Hi, I'm
                </span>
                <h1 className="text-[40px] sm:text-[54px] md:text-[78px] font-fjalla font-bold text-gray-900 dark:text-white tracking-tight drop-shadow-2xl leading-none whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400">
                    Salman Sany Jetu
                  </span>
                </h1>
              </div>

              <div className="h-10 md:h-14 mb-4 flex items-center justify-start">
                <span className="text-xl md:text-3xl text-neon-cyan font-mono font-bold drop-shadow-[0_0_15px_rgba(255,170,0,0.6)]">
                  {displayText}
                  <span className="animate-blink ml-1">|</span>
                </span>
              </div>

              <p className="max-w-xl text-gray-800 dark:text-gray-200 text-lg md:text-xl mb-10 leading-relaxed font-medium drop-shadow-md bg-white/40 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-white/5">
                Blending hardware engineering with digital creativity. I build smart IoT solutions and craft compelling visual narratives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                <a 
                  href="#projects"
                  className="group relative px-8 py-3 w-full sm:w-auto overflow-hidden rounded-md bg-gray-900 dark:bg-white text-white dark:text-black font-bold transition-all hover:bg-neon-cyan dark:hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_rgba(255,170,0,0.5)]"
                >
                  <div className="absolute inset-0 w-3 bg-neon-cyan transition-all duration-[250ms] ease-out group-hover:w-full opacity-20 dark:opacity-10"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    View Engineering Projects <ArrowRight size={20} />
                  </span>
                </a>

                <a 
                  href="#creative"
                  className="px-8 py-3 w-full sm:w-auto rounded-md border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm bg-white/40 dark:bg-black/20"
                >
                  <Play size={20} className="fill-current" /> Watch My Edits
                </a>
              </div>
            </motion.div>

            {/* Right Column: Floating Images (Visible on Desktop) in Left-Pointing Triangle Formation */}
            <div className="hidden lg:block relative h-[600px] w-full">
                 
                 {/* Floating Image 1 - Top Right */}
                 <motion.div 
                    className="absolute top-0 right-8 cursor-pointer"
                    animate={getBubble1Animate()}
                    transition={transitionConfig}
                    onHoverStart={() => setHoveredBubble(1)}
                    onHoverEnd={() => setHoveredBubble(null)}
                 >
                    <motion.div
                      className="w-56 h-56 rounded-full border-4 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(255,170,0,0.3)] bg-black"
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img src="https://lh3.googleusercontent.com/d/1Cc-xbLzBiZzlIBPz24YE0Eq6HsiNpjuo" alt="Gallery Image 1" className="w-full h-full object-cover opacity-80" />
                    </motion.div>
                 </motion.div>
                 
                 {/* Floating Image 2 - Bottom Right (Moved UP to bottom-28) */}
                  <motion.div 
                    className="absolute bottom-28 right-8 cursor-pointer"
                    animate={getBubble2Animate()}
                    transition={transitionConfig}
                    onHoverStart={() => setHoveredBubble(2)}
                    onHoverEnd={() => setHoveredBubble(null)}
                 >
                    <motion.div
                      className="w-56 h-56 rounded-full border-4 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(188,19,254,0.3)] bg-black"
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <img src="https://lh3.googleusercontent.com/d/15lBo_39cxzQEe6TZzrri_XirPdgSta5l" alt="Gallery Image 2" className="w-full h-full object-cover opacity-80" />
                    </motion.div>
                 </motion.div>

                 {/* Floating Image 3 - Left Center */}
                  <motion.div 
                    className="absolute top-[30%] -translate-y-1/2 right-80 cursor-pointer"
                    animate={getBubble3Animate()}
                    transition={transitionConfig}
                    onHoverStart={() => setHoveredBubble(3)}
                    onHoverEnd={() => setHoveredBubble(null)}
                 >
                    <motion.div
                      className="w-56 h-56 rounded-full border-4 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(10,255,10,0.3)] bg-black"
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <img src="https://lh3.googleusercontent.com/d/1kNbpIWPky7KP_SZ8Mzt56shIOS3GIas5" alt="Gallery Image 3" className="w-full h-full object-cover opacity-80" />
                    </motion.div>
                 </motion.div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <div className="w-1 h-2 bg-neon-cyan rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;