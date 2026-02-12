import React from 'react';
import { ArrowRight, ShoppingBasket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingCheckoutProps {
  count: number;
}

export const FloatingCheckout: React.FC<FloatingCheckoutProps> = ({ count }) => {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none"
        >
          <div className="bg-nutribowl-dark text-nutribowl-cream px-1.5 py-1.5 rounded-full shadow-2xl flex items-center gap-4 pointer-events-auto cursor-pointer group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-2 px-3">
                <ShoppingBasket className="w-4 h-4 text-nutribowl-gold" />
                <span className="font-sans font-medium text-sm">{count}</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <div className="flex items-center gap-2 pr-4 pl-1">
                <span className="font-serif italic text-sm">Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};