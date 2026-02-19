import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    description: 'Natural & Healthy',
    price: 24,
    type: 'premium',
    theme: 'dark',
    // Deep Maroon/Burgundy
    image: '/images/premium_almonds.png',
  },
  {
    id: '2',
    name: 'Obsidian Raisins',
    subname: 'PREMIUM SELECTION',
    description: 'Sweet & Chewy',
    price: 18,
    type: 'premium',
    theme: 'dark',
    // Deep Purple
    image: '/images/premium_raisins.png',
  },
  {
    id: '3',
    name: 'Imperial Cashew',
    subname: 'HAND PICKED',
    description: 'Creamy Delight',
    price: 28,
    type: 'premium',
    theme: 'gold',
    // Beige
    image: '/images/premium_cashew.png',
  },

  // --- Everyday Essentials ---
  {
    id: '4',
    name: 'California Almonds',
    subname: 'DAILY ESSENTIAL',
    description: 'Crunchy & Fresh',
    price: 15,
    type: 'everyday',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1641430470762-13c3489762e7?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '5',
    name: 'Golden Raisins',
    subname: 'SUN DRIED',
    description: 'Natural Sweetness',
    price: 12,
    type: 'everyday',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1642102903918-b97c37955bbf?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '6',
    name: 'Whole Cashews',
    subname: 'W320 GRADE',
    description: 'Perfect for Snacking',
    price: 18,
    type: 'everyday',
    theme: 'light',
    image: 'https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?auto=format&fit=crop&q=80&w=600',
  }
];

// Helper to get styles based on theme/type
const getCardStyles = (product: Product) => {
  if (product.type === 'premium') {
    // Premium: Unified Luxury Dark Background + Product Specific Glow
    const base = { bg: 'bg-[#1a1a1a]', text: 'text-[#F5E6D3]', accent: 'text-[#D4B483]' };

    if (product.name.includes('Almonds')) return { ...base, glow: 'bg-[#4A1D24]' }; // Maroon Glow
    if (product.name.includes('Raisins')) return { ...base, glow: 'bg-[#2D1B36]' }; // Purple Glow
    return { ...base, glow: 'bg-[#D8CCBB]' }; // Beige/Gold Glow
  }
  // Everyday styles (Lighter, fresher)
  return { bg: 'bg-white', text: 'text-nutribowl-dark', accent: 'text-nutribowl-gold', border: 'border border-nutribowl-bg' };
};

export const ProductCollection: React.FC<ProductCollectionProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'premium' | 'everyday'>('premium');

  const filteredProducts = products.filter(p => p.type === activeTab);

  return (
    <section className="px-4 py-24 max-w-7xl mx-auto space-y-12">

      {/* Section Header */}
      <div className="text-center mb-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-nutribowl-gold/10 rounded-full blur-3xl -z-10" />
        <span className="font-serif italic text-nutribowl-brown-light text-xl">Our Collection</span>
        <h2 className="font-serif text-4xl mt-2 text-nutribowl-dark">Choose Your Selection</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('premium')}
          className={`px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'premium'
            ? 'bg-nutribowl-dark text-nutribowl-gold shadow-lg scale-105'
            : 'bg-white text-nutribowl-dark/60 hover:bg-gray-50'
            }`}
        >
          Signature Premium
        </button>
        <button
          onClick={() => setActiveTab('everyday')}
          className={`px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'everyday'
            ? 'bg-nutribowl-green text-white shadow-lg scale-105'
            : 'bg-white text-nutribowl-dark/60 hover:bg-gray-50'
            }`}
          style={activeTab === 'everyday' ? { backgroundColor: '#668F8D', color: '#fff' } : {}}
        >
          Daily Essentials
        </button>
      </div>

      <motion.div
        layout
        className="grid md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, idx) => {
            const styles = getCardStyles(product);

            return (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${styles.bg} ${styles.border || ''} flex flex-col h-[500px] will-change-transform`}
              >
                {/* Premium Background Effects */}
                {product.type === 'premium' && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-black z-0" />
                    {/* Animated Glow Aura - Optimized blur and opacity */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] ${styles.glow} opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity duration-700`} />
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay"
                      style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
                    />
                  </>
                )}

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full items-center text-center">

                  {/* Header Info */}
                  <div className="w-full flex justify-between items-start">
                    <div className={`border ${product.type === 'premium' ? 'border-[#D4B483]/30 bg-black/20' : 'border-nutribowl-dark/10'} px-3 py-1 rounded-full backdrop-blur-md`}>
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${styles.accent}`}>{product.subname}</span>
                    </div>
                    <span className={`font-serif text-xl italic ${styles.accent}`}>${product.price}</span>
                  </div>

                  {/* Packet Image Placeholder */}
                  <div className="flex-1 w-full relative flex items-center justify-center my-4 group-hover:scale-105 transition-transform duration-500 will-change-transform">
                    {/* Simplified Shadow for performance */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-lg rounded-full" />

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain relative z-10 mask-packet"
                    // Removed filter: drop-shadow which is very expensive
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className={`bg-white/90 text-nutribowl-dark px-4 py-2 rounded-lg text-xs font-bold shadow-lg backdrop-blur-sm`}>
                        View Packet
                      </span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="mt-auto space-y-2 pb-4">
                    <h3 className={`font-serif text-3xl leading-[0.9] ${styles.text}`}>
                      {product.name}
                    </h3>
                    <p className={`font-sans text-[11px] tracking-wide opacity-80 ${styles.text} uppercase`}>
                      {product.description}
                    </p>
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`mt-4 w-full ${product.type === 'premium'
                        ? 'bg-gradient-to-r from-[#D4B483] to-[#C5A059] text-nutribowl-dark hover:brightness-110 shadow-[0_0_15px_rgba(212,180,131,0.2)]'
                        : 'bg-nutribowl-dark text-white hover:bg-nutribowl-gold'
                        } py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-widest transition-transform duration-300 transform group-hover:-translate-y-1`}
                    >
                      Add to Bowl
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