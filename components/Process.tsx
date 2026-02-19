import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Sprout, Truck, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Sustainably Grown",
    desc: "Sourced directly from certified organic orchards.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Sun Dried",
    desc: "Naturally dried under the Mediterranean sun.",
    image: "https://images.unsplash.com/photo-1642102903918-b97c37955bbf?auto=format&fit=crop&q=80&w=400"
  },
  {
    icon: <PackageCheck className="w-6 h-6" />,
    title: "Hand Packed",
    desc: "Carefully sealed to lock in freshness instantly.",
    image: "https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&q=80&w=400"
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-nutribowl-gold uppercase mb-4 block">Our Process</span>
          <h2 className="font-serif text-4xl md:text-5xl text-nutribowl-dark">From Orchard to Bowl</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-nutribowl-bg -z-10 transform translate-y-1/2" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-default"
            >
              <div className="flex flex-col items-center text-center space-y-6 bg-white p-4">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-nutribowl-dark/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] group-hover:opacity-0 transition-opacity">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-nutribowl-dark mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-nutribowl-brown-light leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};