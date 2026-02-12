import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    sub: "01. The Classic",
    title1: "Royal",
    title2: "Almonds",
    desc: "100% Natural, hand-picked from the coastal orchards. Rich in heart-healthy fats.",
    image: "/images/Almonds.png",
    color: "#4A1D24",
    accent: "text-[#D4B483]"
  },
  {
    id: 2,
    sub: "02. The Sweetness",
    title1: "Obsidian",
    title2: "Raisins",
    desc: "Sun-dried jewels of sweetness. A chewy contrast to the crunchy nuts.",
    image: "/images/Raisins.png",
    color: "#2D1B36",
    accent: "text-[#D7BDE2]"
  },
  {
    id: 3,
    sub: "03. The Creamy",
    title1: "Imperial",
    title2: "Cashew",
    desc: "Creamy, buttery, and roasted to a golden perfection.",
    image: "/images/Cashews.png",
    color: "#D8CCBB",
    accent: "text-[#8D7F71]"
  }
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-8">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{ backgroundColor: SLIDES[current].color }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]"
        />
        <motion.div
          animate={{ backgroundColor: SLIDES[current].color }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-[80px]"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-4 relative z-10">

        {/* Left Content */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className={`font-sans text-xs tracking-[0.2em] font-bold uppercase block ${SLIDES[current].accent}`}>
                {SLIDES[current].sub}
              </span>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-nutribowl-dark leading-[0.85]">
                <span className="block italic font-light opacity-80">{SLIDES[current].title1}</span>
                <span className="block font-bold mt-2">{SLIDES[current].title2}</span>
              </h1>
              <p className="font-sans text-nutribowl-dark/70 max-w-md text-base md:text-lg leading-relaxed pt-4">
                {SLIDES[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-nutribowl-dark/10 flex items-center justify-center hover:bg-nutribowl-dark hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-nutribowl-dark/10 flex items-center justify-center hover:bg-nutribowl-dark hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="h-[1px] w-20 bg-nutribowl-dark/10 mx-4 hidden md:block"></div>
            <span className="font-mono text-xs text-nutribowl-dark/40 hidden md:block">0{current + 1} / 0{SLIDES.length}</span>
          </div>
        </div>

        {/* Right Content - Rotating Bowl */}
        <div className="order-1 md:order-2 relative flex justify-center items-center h-[400px] md:h-[600px]">
          {/* Rotating Circle Backgrounds */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-dashed border-nutribowl-dark/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-dotted border-nutribowl-gold/40 rounded-full"
          />

          {/* The Bowl Image */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden bg-nutribowl-cream border-[6px] border-white">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={current}
                src={SLIDES[current].image}
                alt={SLIDES[current].title2}
                initial={{ rotate: 120, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1.1 }}
                exit={{ rotate: -120, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="absolute inset-0 w-full h-full object-cover scale-110"
              />
            </AnimatePresence>

            {/* Inner Shadow / Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none z-10" />
          </div>

          {/* Tag */}
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 right-10 md:bottom-20 md:right-0 bg-white/90 backdrop-blur shadow-lg px-6 py-4 rounded-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-nutribowl-gold flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">A</div>
                <div className="w-8 h-8 rounded-full bg-nutribowl-brown flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">B</div>
              </div>
              <div>
                <p className="text-xs font-bold text-nutribowl-dark">Premium Grade</p>
                <p className="text-[10px] text-nutribowl-dark/60">Sourced Globally</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase">Explore</span>
        <div className="w-[1px] h-12 bg-nutribowl-dark"></div>
      </motion.div>

    </section>
  );
};