import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E8E2D2] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
         
         {/* Brand Column */}
         <div className="space-y-6">
            <div className="flex items-center gap-2">
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M10 50 C10 75 30 90 50 90 C70 90 90 75 90 50 L10 50 Z" fill="#C5A059" />
                    <path d="M50 50 C50 50 40 20 50 10 C60 20 50 50 50 50 Z" fill="#F5F0E6" stroke="#2A231E" strokeWidth="2"/>
                 </svg>
                <span className="font-serif font-bold text-2xl text-nutribowl-dark">NutsBowl</span>
            </div>
            <p className="font-sans text-sm text-nutribowl-dark/60 leading-relaxed">
               Premium artisanal nuts and dried fruits, sourced ethically from the world's best orchards.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-nutribowl-dark/5 flex items-center justify-center text-nutribowl-dark hover:bg-nutribowl-dark hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-nutribowl-dark/5 flex items-center justify-center text-nutribowl-dark hover:bg-nutribowl-dark hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-nutribowl-dark/5 flex items-center justify-center text-nutribowl-dark hover:bg-nutribowl-dark hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
               </a>
            </div>
         </div>

         {/* Links Column 1 */}
         <div>
            <h4 className="font-serif text-lg text-nutribowl-dark mb-6">Shop</h4>
            <ul className="space-y-4 font-sans text-sm text-nutribowl-dark/70">
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">All Products</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Best Sellers</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">New Arrivals</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Gift Sets</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Subscription</a></li>
            </ul>
         </div>

         {/* Links Column 2 */}
         <div>
            <h4 className="font-serif text-lg text-nutribowl-dark mb-6">Company</h4>
            <ul className="space-y-4 font-sans text-sm text-nutribowl-dark/70">
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Our Story</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Sustainability</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Orchards</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-nutribowl-gold transition-colors">Contact</a></li>
            </ul>
         </div>

         {/* Contact Column */}
         <div>
            <h4 className="font-serif text-lg text-nutribowl-dark mb-6">Contact</h4>
            <ul className="space-y-4 font-sans text-sm text-nutribowl-dark/70">
               <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  hello@nutsbowl.com
               </li>
               <li>
                  123 Orchard Way<br/>
                  Sunnyvale, CA 94086
               </li>
               <li>+1 (555) 123-4567</li>
            </ul>
         </div>
      </div>

      <div className="border-t border-nutribowl-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="font-sans text-xs text-nutribowl-dark/40">&copy; 2024 NutsBowl Inc. All rights reserved.</p>
         <div className="flex gap-6 font-sans text-xs text-nutribowl-dark/40">
            <a href="#" className="hover:text-nutribowl-dark">Privacy Policy</a>
            <a href="#" className="hover:text-nutribowl-dark">Terms of Service</a>
         </div>
      </div>
    </footer>
  );
};