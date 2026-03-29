import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past roughly the hero section height (e.g. 600px)
      if (window.scrollY > 600) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Engineering', href: '#projects' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="https://www.youtube.com/@16_bit_Jitu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-gray-300 dark:border-white/10 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(255,170,0,0.4)] transition-all duration-300 bg-black">
              <img 
                src="https://lh3.googleusercontent.com/d/11TItxHcHFFJYp_pl3wE-V3y8kiWLKYZO" 
                alt="16-Bit Jitu" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-oswald font-bold text-xl md:text-2xl tracking-wide text-gray-900 dark:text-white group-hover:text-neon-cyan transition-colors">
              16-Bit Jitu
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <AnimatePresence>
              {showTop && (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-neon-cyan hover:text-gray-900 dark:hover:text-white hover:shadow-[0_2px_0_0_#FFAA00] transition-all duration-300 font-bold text-sm uppercase tracking-wide py-2 cursor-pointer flex items-center gap-1"
                >
                  <ArrowUp size={14} /> Top
                </motion.a>
              )}
            </AnimatePresence>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:shadow-[0_2px_0_0_#FFAA00] transition-all duration-300 font-medium text-sm uppercase tracking-wide py-2 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-card border-b border-gray-200 dark:border-white/10"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              {showTop && (
                 <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-neon-cyan hover:text-gray-900 dark:hover:text-white hover:pl-2 transition-all duration-300 block text-lg font-bold cursor-pointer flex items-center gap-2"
                >
                  <ArrowUp size={16} /> Top
                </a>
              )}

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-neon-cyan hover:pl-2 transition-all duration-300 block text-lg font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;