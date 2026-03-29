import React, { useState } from 'react';
import Section from './ui/Section';
import { Linkedin, Github, Youtube, Instagram, Facebook, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/SalmanSanyJetu', color: 'hover:text-blue-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/salman-sany-jetu-80bb03292/', color: 'hover:text-blue-500' },
    { icon: Github, href: 'https://github.com/SalmanSanyJetu', color: 'hover:text-white' },
    { icon: Instagram, href: 'https://www.instagram.com/16bitjitu/', color: 'hover:text-pink-500' },
    { icon: Youtube, href: 'https://www.youtube.com/@16_bit_Jitu', color: 'hover:text-red-600' }
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build something extraordinary together." className="bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        
        {/* Socials & Info */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-dark-card p-8 rounded-2xl border border-gray-200 dark:border-white/5 transition-colors duration-300 shadow-sm dark:shadow-none">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Connect</h3>
             <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
               I'm currently available for freelance video editing projects and engineering collaborations.
             </p>
             
             <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 ${social.color} hover:bg-gray-200 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1 hover:scale-110 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]`}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Form */}
        <div>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Name</label>
                 <input 
                   type="text" 
                   required
                   value={formState.name}
                   onChange={e => setFormState({...formState, name: e.target.value})}
                   className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-white/10 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                   placeholder="Your Name"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email</label>
                 <input 
                   type="email" 
                   required
                   value={formState.email}
                   onChange={e => setFormState({...formState, email: e.target.value})}
                   className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-white/10 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                   placeholder="your@email.com"
                 />
               </div>
             </div>
             
             <div className="space-y-2">
               <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Message</label>
               <textarea 
                 rows={5}
                 required
                 value={formState.message}
                 onChange={e => setFormState({...formState, message: e.target.value})}
                 className="w-full bg-white dark:bg-dark-card border border-gray-300 dark:border-white/10 rounded-lg p-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                 placeholder="How can I help you?"
               />
             </div>

             <button 
               type="submit" 
               disabled={isSubmitting || submitted}
               className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                 submitted 
                 ? 'bg-green-500 text-white' 
                 : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-neon-cyan dark:hover:bg-neon-cyan hover:text-black dark:hover:text-black hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,170,0,0.4)]'
               }`}
             >
               {isSubmitting ? (
                 <span className="animate-pulse">Sending...</span>
               ) : submitted ? (
                 <span>Message Sent!</span>
               ) : (
                 <>Send Message <Send size={18} /></>
               )}
             </button>
           </form>
        </div>

      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-white/5 text-center text-gray-500 dark:text-gray-600 text-sm transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Salman Sany Jetu. All rights reserved.</p>
        <p className="mt-1">Built with React, Tailwind & Motion.</p>
      </footer>
    </Section>
  );
};

export default Contact;