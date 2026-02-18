import React from 'react';
import { Flame, Cookie, Sparkles, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const TasteRefiner: React.FC = () => {
    const categories = [
        { id: 1, name: 'Roasted', icon: <Flame className="w-6 h-6 text-nutribowl-gold" />, bg: 'bg-nutribowl-dark' },
        { id: 2, name: 'Sweet', icon: <Cookie className="w-6 h-6 text-nutribowl-cream" />, bg: 'bg-nutribowl-brown' },
        { id: 3, name: 'Salty', icon: <Sparkles className="w-6 h-6 text-white/70" />, bg: 'bg-[#3E342F]' },
    ];

    return (
        <section className="px-4 pb-32 pt-10 max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-8 px-2">
                <h2 className="font-serif text-4xl text-nutribowl-dark">Refine by Taste</h2>
                <button className="text-[10px] font-bold tracking-widest text-nutribowl-gold uppercase hover:text-nutribowl-brown transition-colors flex items-center gap-2">
                    View All <MoveRight className="w-3 h-3" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`${cat.bg} rounded-3xl p-6 aspect-square flex flex-col justify-between cursor-pointer hover:scale-95 transition-transform duration-300 group will-change-transform`}
                    >
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                            {cat.icon}
                        </div>
                        <span className="font-serif text-xl text-nutribowl-cream">{cat.name}</span>
                    </motion.div>
                ))}

                {/* Visual Image Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="rounded-3xl overflow-hidden aspect-square relative group bg-black"
                >
                    <img
                        src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?auto=format&fit=crop&q=80&w=400"
                        alt="Walnut"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                            <MoveRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};