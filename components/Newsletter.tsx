import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-nutribowl-dark rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center">
         
         {/* Background Patterns */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
               <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
               </pattern>
               <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
            </svg>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
         >
            <h2 className="font-serif text-3xl md:text-5xl text-nutribowl-cream mb-6">
               Get Cracking
            </h2>
            <p className="text-white/60 font-sans mb-10 max-w-lg mx-auto">
               Join our nut-loving community. Receive exclusive recipes, harvest updates, and a 10% discount on your first order.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-colors font-sans"
               />
               <button className="px-8 py-4 bg-nutribowl-gold text-nutribowl-dark rounded-full font-bold font-sans hover:bg-white transition-colors flex items-center justify-center gap-2">
                  <span>Join</span>
                  <Send className="w-4 h-4" />
               </button>
            </form>

            <p className="text-white/20 text-xs mt-6 font-sans">No spam, just nutritious goodness.</p>
         </motion.div>
      </div>
    </section>
  );
};