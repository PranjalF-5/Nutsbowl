import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
   return (
      <footer className="bg-[#E8E2D2] py-16 px-6">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">

            {/* ── Logo (Exact from Navbar) ── */}
            <a href="#home" className="flex flex-col items-center gap-2 group shrink-0">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 group-hover:scale-105 transition-transform duration-300">
                  <defs>
                     <linearGradient id="gold-g-footer" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#C5A059" />
                        <stop offset="0.5" stopColor="#F2E6D8" />
                        <stop offset="1" stopColor="#997B40" />
                     </linearGradient>
                  </defs>
                  <path d="M20 110 C20 160 50 180 100 180 C150 180 180 160 180 110 L20 110 Z" fill="url(#gold-g-footer)" />
                  <path d="M20 110 L180 110" stroke="#FFF" strokeWidth="2" strokeOpacity="0.5" />
                  <g transform="translate(0,-10)">
                     <path d="M100 110 C100 110 80 50 100 30 C120 50 100 110 100 110 Z" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                     <path d="M60 110 C50 80 40 70 50 60 C70 60 80 80 90 110" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                     <path d="M140 100 C150 90 160 80 150 60 C130 50 120 70 110 110" fill="#F5F0E6" stroke="#C5A059" strokeWidth="2" />
                  </g>
               </svg>
               <div className="flex flex-col leading-none items-center">
                  <span className="font-serif font-semibold tracking-wide text-nutribowl-dark text-xl">
                     NutsBowl
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.35em] text-nutribowl-brown uppercase opacity-70 mt-1">
                     Pure &amp; Natural
                  </span>
               </div>
            </a>

            {/* ── Minimal Links ── */}
            <nav>
               <ul className="flex flex-wrapjustify-center gap-8 md:gap-12 font-sans text-xs font-bold tracking-widest text-nutribowl-dark/70 uppercase">
                  <li><a href="#products" className="hover:text-nutribowl-gold transition-colors">Shop</a></li>
                  <li><a href="#about" className="hover:text-nutribowl-gold transition-colors">Our Story</a></li>
                  <li><a href="#journal" className="hover:text-nutribowl-gold transition-colors">Journal</a></li>
                  <li><a href="#contact" className="hover:text-nutribowl-gold transition-colors">Contact</a></li>
               </ul>
            </nav>

            {/* ── Socials ── */}
            <div className="flex gap-6">
               <a href="#" aria-label="Instagram" className="text-nutribowl-dark/60 hover:text-nutribowl-gold transition-colors">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href="#" aria-label="Twitter" className="text-nutribowl-dark/60 hover:text-nutribowl-gold transition-colors">
                  <Twitter className="w-5 h-5" />
               </a>
               <a href="#" aria-label="Facebook" className="text-nutribowl-dark/60 hover:text-nutribowl-gold transition-colors">
                  <Facebook className="w-5 h-5" />
               </a>
            </div>

            {/* ── Copyright ── */}
            <div className="pt-8 w-full border-t border-nutribowl-dark/10">
               <p className="font-sans text-[10px] text-nutribowl-dark/40 uppercase tracking-widest">
                  &copy; 2024 NutsBowl Inc. All rights reserved.
               </p>
            </div>

         </div>
      </footer>
   );
};