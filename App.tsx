import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import { ArrowUp, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen text-gray-800 dark:text-gray-300 font-sans selection:bg-neon-cyan selection:text-black overflow-x-hidden transition-colors duration-300">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Creative />
        <Leadership />
        <Contact />
      </main>

      <button
        onClick={toggleTheme}
        className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 backdrop-blur-md shadow-lg"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(255,170,0,0.3)]"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(188, 19, 254, 0.05) 0%, transparent 50%)'
      }}></div>
    </div>
  );
};

export default App;