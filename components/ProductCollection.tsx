import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCollectionProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  // --- Premium Collection ---
  {
    id: '1',
    name: 'Royal Almonds',
    subname: '100% NATURAL',
    description: 'Crunchy, hand-picked almonds from California orchards, rich in Vitamin E.',
    price: 24,
    type: 'premium',
    // Ultra-Deep Rich Brown/Maroon
    theme: 'dark',
    image: '/images/premium_almond.png?v=2',
  },
  {
    id: '2',
    name: 'Obsidian Raisins',
    subname: 'PREMIUM SELECTION',
    description: 'Sun-dried black raisins with an intense, natural sweetness.',
    price: 18,
    type: 'premium',
    // Deep Violet/Ink
    theme: 'dark',
    image: '/images/premium_raisin.png?v=2',
  },
  {
    id: '3',
    name: 'Imperial Cashew',
    subname: 'HAND PICKED',
    description: 'Creamy, buttery whole cashews roasted to perfection.',
    price: 28,
    type: 'premium',
    // Deep Gold/Bronze
    theme: 'gold',
    image: '/images/premium_cashew.png?v=2',
  },

  // --- Everyday Essentials ---
  {
    id: '4',
    name: 'California Almonds',
    subname: 'DAILY ESSENTIAL',
    description: 'Perfect for daily snacking and baking needs.',
    price: 15,
    type: 'everyday',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1641430470762-13c3489762e7?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '5',
    name: 'Golden Raisins',
    subname: 'SUN DRIED',
    description: 'Naturally sweet golden raisins for your morning bowl.',
    price: 12,
    type: 'everyday',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1642102903918-b97c37955bbf?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '6',
    name: 'Whole Cashews',
    subname: 'W320 GRADE',
    description: 'Wholesome cashews for a quick energy boost.',
    price: 18,
    type: 'everyday',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?auto=format&fit=crop&q=80&w=600',
  }
];

// Helper to get card colors
const getCardColors = (product: Product) => {
  if (product.type === 'premium') {
    if (product.name.includes('Almonds')) return { bg: 'bg-[#2A1A1A]', accent: 'text-[#D4B483]', btn: 'bg-[#4A2C2C]' };
    if (product.name.includes('Raisins')) return { bg: 'bg-[#1A1521]', accent: 'text-[#D7BDE2]', btn: 'bg-[#2D1B36]' };
    return { bg: 'bg-[#1C1A16]', accent: 'text-[#E5CCA9]', btn: 'bg-[#3E3424]' };
  }
  return { bg: 'bg-white', accent: 'text-nutribowl-brown', btn: 'bg-nutribowl-dark' };
};

export const ProductCollection: React.FC<ProductCollectionProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'premium' | 'everyday'>('premium');

  const filteredProducts = products.filter(p => p.type === activeTab);

  return (
    <section className="px-4 py-24 max-w-7xl mx-auto space-y-16">

      {/* Header & Tabs */}
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <div>
          <span className="font-sans text-xs font-bold tracking-[0.2em] text-nutribowl-gold uppercase mb-3 block">Curated Selection</span>
          <h2 className="font-serif text-4xl md:text-5xl text-nutribowl-dark">Choose Your Bowl</h2>
        </div>

        <div className="flex p-1 bg-nutribowl-dark/5 rounded-full relative">
          <div className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow-sm transition-all duration-300 ${activeTab === 'everyday' ? 'translate-x-[100%]' : 'translate-x-0'}`} />
          <button onClick={() => setActiveTab('premium')} className={`relative z-10 px-8 py-2.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'premium' ? 'text-nutribowl-dark' : 'text-nutribowl-dark/50 hover:text-nutribowl-dark/80'}`}>
            Signature Premium
          </button>
          <button onClick={() => setActiveTab('everyday')} className={`relative z-10 px-8 py-2.5 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'everyday' ? 'text-nutribowl-dark' : 'text-nutribowl-dark/50 hover:text-nutribowl-dark/80'}`}>
            Daily Essentials
          </button>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const colors = getCardColors(product);
            const isPremium = product.type === 'premium';

            return (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-[2rem] overflow-hidden ${colors.bg} h-[520px] shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* 1. Background Layers */}
                {isPremium ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                    {/* Inner Border */}
                    <div className="absolute inset-[1px] rounded-[2rem] border border-white/10 pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
                )}

                {/* 2. Top Content: Price */}
                <div className="relative z-10 p-8 flex justify-end items-start">
                  <span className={`font-serif text-2xl italic ${isPremium ? 'text-white' : 'text-nutribowl-dark'}`}>
                    ${product.price}
                  </span>
                </div>

                {/* 3. Product Image (Hovers) */}
                <div className="absolute top-[20%] left-0 right-0 h-[45%] flex items-center justify-center z-10">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* 4. Bottom Information & Action */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                    <h3 className={`font-serif text-3xl leading-tight mb-2 min-h-[40px] flex items-end ${isPremium ? 'text-white' : 'text-nutribowl-dark'}`}>
                      {product.name}
                    </h3>
                    <p className={`font-sans text-xs leading-relaxed line-clamp-2 min-h-[32px] ${isPremium ? 'text-white/60' : 'text-nutribowl-dark/60'}`}>
                      {product.description}
                    </p>
                  </div>

                  {/* Add Button - Expands on Hover */}
                  <div className="mt-4 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors whitespace-nowrap">
                      View Details
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`w-12 h-12 rounded-full ${isPremium ? 'bg-white text-nutribowl-dark' : 'bg-nutribowl-dark text-white'} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};