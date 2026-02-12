import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-500 ${scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
          }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className={`relative drop-shadow-md transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-14 h-14'}`}>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full group-hover:scale-105 transition-transform duration-500">
              <defs>
                <linearGradient id="gold-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#C5A059" />
                  <stop offset="0.5" stopColor="#F2E6D8" />
                  <stop offset="1" stopColor="#997B40" />
                </linearGradient>
              </defs>
              <path d="M20 110 C20 160 50 180 100 180 C150 180 180 160 180 110 L20 110 Z" fill="url(#gold-gradient)" />
              <path d="M20 110 L180 110" stroke="#FFF" strokeWidth="2" strokeOpacity="0.5" />
              <path d="M40 165 C60 175 140 175 160 165" stroke="#FFF" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
              <g transform="translate(0, -10)">
                <path d="M100 110 C100 110 80 50 100 30 C120 50 100 110 100 110 Z" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                <path d="M100 30 L100 110" stroke="#C5A059" strokeWidth="1" />
                <path d="M60 110 C50 80 40 70 50 60 C70 60 80 80 90 110" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                <path d="M55 70 C60 75 65 75 65 85" stroke="#C5A059" strokeWidth="2" fill="none" />
                <path d="M140 100 C150 90 160 80 150 60 C130 50 120 70 110 110" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold tracking-wide text-nutribowl-dark leading-none group-hover:text-nutribowl-gold transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
              NutsBowl
            </span>
            <span className={`font-sans tracking-[0.3em] text-nutribowl-brown uppercase transition-all duration-500 ${scrolled ? 'text-[8px] opacity-0 h-0 overflow-hidden' : 'text-[10px] opacity-100'}`}>
              Premium Natural
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-5 py-2 group overflow-hidden rounded-full hover:bg-nutribowl-dark/5 transition-colors"
            >
              <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-widest text-nutribowl-dark group-hover:text-nutribowl-dark transition-colors">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-nutribowl-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button className="relative p-2 group">
            <ShoppingBag className="w-6 h-6 text-nutribowl-dark group-hover:text-nutribowl-gold transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-nutribowl-brown text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-nutribowl-dark/5 transition-colors group"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-nutribowl-dark" />
            ) : (
              <Menu className="w-6 h-6 text-nutribowl-dark group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-nutribowl-cream/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (idx * 0.1) }}
                className="font-serif text-4xl text-nutribowl-dark hover:text-nutribowl-gold transition-colors"
              >
                {item.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <span className="font-sans text-xs tracking-widest text-nutribowl-dark/40 uppercase">Est. 2024</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};