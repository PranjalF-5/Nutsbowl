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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' }, // Renamed for premium feel
    { name: 'Collection', href: '#products' }, // Renamed for premium feel
    { name: 'Journal', href: '#contact' } // Renamed for premium feel
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 will-change-transform ${scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-4 border-b border-white/20'
          : 'bg-transparent py-8'
          }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
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
            <span className={`font-serif tracking-wide text-nutribowl-dark leading-none transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              NutsBowl
            </span>
            <span className={`font-sans tracking-[0.3em] text-nutribowl-brown uppercase transition-all duration-500 ${scrolled ? 'text-[0px] h-0 opacity-0 overflow-hidden' : 'text-[9px] opacity-80 mt-1'}`}>
              Pure & Natural
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group py-2"
            >
              <span className="relative z-10 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-nutribowl-dark/70 group-hover:text-nutribowl-dark transition-colors duration-300">
                {item.name}
              </span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-nutribowl-gold transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="relative group p-1">
            <ShoppingBag className="w-5 h-5 text-nutribowl-dark/80 group-hover:text-nutribowl-dark transition-colors" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-nutribowl-gold text-white text-[9px] font-medium flex items-center justify-center rounded-full shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden p-1 hover:bg-nutribowl-dark/5 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-nutribowl-dark/80" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6 text-nutribowl-dark/80" strokeWidth={1.5} />
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (idx * 0.1), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-3xl md:text-4xl text-nutribowl-dark/90 hover:text-nutribowl-gold transition-colors tracking-tight"
              >
                {item.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-12"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="w-8 h-[1px] bg-nutribowl-dark/20 mb-2"></span>
                <span className="font-sans text-[10px] tracking-[0.3em] text-nutribowl-dark/40 uppercase">Est. 2024</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};