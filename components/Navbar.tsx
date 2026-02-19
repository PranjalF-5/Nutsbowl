import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Collection', href: '#products' },
    { name: 'Journal', href: '#contact' },
  ];

  return (
    <>
      {/* ── Main Nav Bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_24px_rgba(0,0,0,0.06)] border-b border-black/5'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 group-hover:scale-105 transition-transform duration-300">
              <defs>
                <linearGradient id="gold-g" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#C5A059" />
                  <stop offset="0.5" stopColor="#F2E6D8" />
                  <stop offset="1" stopColor="#997B40" />
                </linearGradient>
              </defs>
              <path d="M20 110 C20 160 50 180 100 180 C150 180 180 160 180 110 L20 110 Z" fill="url(#gold-g)" />
              <path d="M20 110 L180 110" stroke="#FFF" strokeWidth="2" strokeOpacity="0.5" />
              <g transform="translate(0,-10)">
                <path d="M100 110 C100 110 80 50 100 30 C120 50 100 110 100 110 Z" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                <path d="M60 110 C50 80 40 70 50 60 C70 60 80 80 90 110" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                <path d="M140 100 C150 90 160 80 150 60 C130 50 120 70 110 110" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
              </g>
            </svg>
            <div className="flex flex-col leading-none">
              <span className={`font-serif font-semibold tracking-wide text-nutribowl-dark transition-all duration-300 ${scrolled ? 'text-base' : 'text-lg'}`}>
                NutsBowl
              </span>
              <span className="hidden sm:block font-sans text-[8px] tracking-[0.35em] text-nutribowl-brown uppercase opacity-70 mt-0.5">
                Pure &amp; Natural
              </span>
            </div>
          </a>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-nutribowl-dark/60 hover:text-nutribowl-dark transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-nutribowl-gold rounded-full group-hover:w-4/5 transition-all duration-300 ease-out" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-nutribowl-dark/5 transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px] text-nutribowl-dark/80" strokeWidth={1.6} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-[14px] h-[14px] bg-nutribowl-gold text-white text-[8px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA — desktop only */}
            <a
              href="#products"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-nutribowl-dark text-nutribowl-cream font-sans text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-nutribowl-gold hover:text-nutribowl-dark transition-all duration-300"
            >
              Shop Now
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-nutribowl-dark/5 transition-colors"
            >
              {isMobileMenuOpen
                ? <X className="w-5 h-5 text-nutribowl-dark" strokeWidth={1.8} />
                : <Menu className="w-5 h-5 text-nutribowl-dark" strokeWidth={1.8} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-black/5">
                <span className="font-serif text-lg text-nutribowl-dark font-semibold">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-nutribowl-dark/5 transition-colors"
                >
                  <X className="w-5 h-5 text-nutribowl-dark" strokeWidth={1.8} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-6 pt-6 gap-1 flex-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.07, duration: 0.3 }}
                    className="flex items-center justify-between py-3.5 border-b border-black/5 font-sans text-sm font-semibold text-nutribowl-dark/80 hover:text-nutribowl-gold transition-colors tracking-wide"
                  >
                    {link.name}
                    <span className="text-nutribowl-gold/40 text-xs">→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-6 pb-10 pt-4">
                <a
                  href="#products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3.5 bg-nutribowl-dark text-nutribowl-cream font-sans text-xs font-bold uppercase tracking-widest rounded-full hover:bg-nutribowl-gold hover:text-nutribowl-dark transition-all duration-300"
                >
                  Shop Collection
                </a>
                <p className="text-center font-sans text-[9px] tracking-[0.3em] text-nutribowl-dark/30 uppercase mt-4">
                  Est. 2024 · Pure &amp; Natural
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};