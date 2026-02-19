import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Cookie, Sparkles, ArrowRight, X } from 'lucide-react';

export const TasteRefiner: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const categories = [
        {
            id: 1,
            name: 'Roasted & Smoky',
            tag: 'The Classic',
            desc: 'Slow-roasted to perfection, bringing out deep, earthy notes.',
            notes: ['Hickory Smoke', 'Crunchy Texture', 'Warm Finish'],
            icon: <Flame className="w-5 h-5" />,
            image: 'https://images.unsplash.com/photo-1543158181-1274e5362710?auto=format&fit=crop&q=80&w=800',
            color: 'from-orange-900/80 to-black',
        },
        {
            id: 2,
            name: 'Sweet & Glazed',
            tag: 'Indulgence',
            desc: 'Lightly coated in natural honey or maple for a guilt-free treat.',
            notes: ['Honey Glaze', 'Caramelized', 'Soft Chew'],
            icon: <Cookie className="w-5 h-5" />,
            image: 'https://images.unsplash.com/photo-1676312656038-689f55e81be7?auto=format&fit=crop&q=80&w=800',
            color: 'from-amber-900/80 to-black',
        },
        {
            id: 3,
            name: 'Salted & Savory',
            tag: 'Daily Craving',
            desc: 'A touch of sea salt to enhance the natural nut flavors.',
            notes: ['Sea Salt', 'Umami', 'Fresh Crisp'],
            icon: <Sparkles className="w-5 h-5" />,
            image: 'https://images.unsplash.com/photo-1627820752174-acae1b399128?auto=format&fit=crop&q=80&w=800',
            color: 'from-slate-900/80 to-black',
        },
    ];

    return (
        <section className="px-4 py-24 md:py-32 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 px-4 text-center md:text-left">
                <div>
                    <span className="font-sans text-xs font-bold tracking-[0.2em] text-nutribowl-gold uppercase mb-3 block">Personalized Taste</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-nutribowl-dark">The Flavor Spectrum</h2>
                </div>
                <button className="hidden md:flex items-center gap-2 group text-nutribowl-dark font-sans font-bold text-xs tracking-widest uppercase pb-1 border-b border-nutribowl-dark/20 hover:border-nutribowl-dark transition-colors mt-6 md:mt-0">
                    Explore All Flavors
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide auto-rows-[400px]">
                {/* Large Featured Card (First item spans 2 cols on desktop if desired, keeping simple 3-col for now for balance) */}
                {categories.map((cat, i) => (
                    <motion.div
                        layout
                        key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        onMouseEnter={() => setActiveId(cat.id)}
                        onMouseLeave={() => setActiveId(null)}
                        className="relative group rounded-[2rem] overflow-hidden cursor-pointer h-[400px] min-w-[85vw] md:min-w-0 md:w-auto snap-center"
                    >
                        {/* Background Image */}
                        <motion.img
                            src={cat.image}
                            alt={cat.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                            animate={{ scale: activeId === cat.id ? 1.1 : 1 }}
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                        {/* Content Container */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">

                            {/* Top Tag */}
                            <div className="flex justify-between items-start">
                                <span className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">
                                    {cat.tag}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md text-white group-hover:bg-nutribowl-gold group-hover:text-nutribowl-dark transition-colors duration-300">
                                    {cat.icon}
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div>
                                <h3 className="font-serif text-3xl text-white mb-2 leading-tight">
                                    {cat.name}
                                </h3>

                                {/* Expanded Content (Visible on Hover/Hold) */}
                                <div className="h-auto md:h-0 md:group-hover:h-auto overflow-hidden transition-all duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                    <p className="font-sans text-sm text-white/80 leading-relaxed mb-4 pt-2">
                                        {cat.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.notes.map((note, idx) => (
                                            <span key={idx} className="text-[10px] font-sans font-bold text-nutribowl-dark bg-nutribowl-gold/90 px-2 py-1 rounded-md">
                                                {note}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Simple Arrow for non-hover state */}
                                <div className="mt-4 md:group-hover:hidden transition-opacity duration-300 hidden md:block">
                                    <div className="w-8 h-1 bg-white/30 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="md:hidden w-full flex items-center justify-center gap-2 mt-8 py-4 bg-nutribowl-dark text-white rounded-full font-sans font-bold text-xs tracking-widest uppercase">
                Explore All Flavors
                <ArrowRight className="w-4 h-4" />
            </button>
        </section>
    );
};