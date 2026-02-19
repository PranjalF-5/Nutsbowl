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
    image: "/images/almond.png",
    color: "#4A1D24",
    accent: "text-[#D4B483]"
  },
  {
    id: 2,
    sub: "02. The Sweetness",
    title1: "Obsidian",
    title2: "Raisins",
    desc: "Sun-dried jewels of sweetness. A chewy contrast to the crunchy nuts.",
    image: "/images/raisin.png",
    color: "#2D1B36",
    accent: "text-[#D7BDE2]"
  },
  {
    id: 3,
    sub: "03. The Creamy",
    title1: "Imperial",
    title2: "Cashew",
    desc: "Creamy, buttery, and roasted to a golden perfection.",
    image: "/images/cashew.png",
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
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-5 md:px-10 lg:px-16 pt-24 pb-20 md:pt-20 md:pb-16">

      {/* Background colour blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ backgroundColor: SLIDES[current].color }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-15%] right-[-5%] w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full opacity-10 blur-[80px]"
        />
        <motion.div
          animate={{ backgroundColor: SLIDES[current].color }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-[-10%] left-[-5%] w-[min(400px,70vw)] h-[min(400px,70vw)] rounded-full opacity-10 blur-[60px]"
        />
      </div>

      {/* ── Main Grid ── */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-4">

        {/* ── Text (bottom on mobile, left on desktop) ── */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left z-10 w-full">
          <div className="relative w-full h-[280px] md:h-[320px] flex flex-col items-center md:items-start justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-6"
              >
                <span className={`font-sans text-xs md:text-xs tracking-[0.22em] font-bold uppercase ${SLIDES[current].accent}`}>
                  {SLIDES[current].sub}
                </span>

                <h1 className="font-serif text-[clamp(3.5rem,12vw,7rem)] text-nutribowl-dark leading-[0.9]">
                  <span className="block italic font-light opacity-75">{SLIDES[current].title1}</span>
                  <span className="block font-bold mt-1">{SLIDES[current].title2}</span>
                </h1>

                <p className="font-sans text-sm md:text-base text-nutribowl-dark/65 max-w-md leading-relaxed pt-2">
                  {SLIDES[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-8 md:mt-10">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-nutribowl-dark/15 flex items-center justify-center hover:bg-nutribowl-dark hover:text-white hover:border-nutribowl-dark transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-nutribowl-dark/15 flex items-center justify-center hover:bg-nutribowl-dark hover:text-white hover:border-nutribowl-dark transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="hidden md:flex items-center gap-2 ml-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-500 ${i === current
                    ? 'w-6 h-1.5 bg-nutribowl-gold'
                    : 'w-1.5 h-1.5 bg-nutribowl-dark/20 hover:bg-nutribowl-dark/40'
                    }`}
                />
              ))}
            </div>

            <span className="font-mono text-xs text-nutribowl-dark/35 ml-3 hidden sm:block">
              0{current + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>

        {/* ── Image (top on mobile, right on desktop) ── */}
        <div className="order-1 md:order-2 relative flex justify-center items-center py-6 md:py-0">
          {/* Decorative rings — sized with clamp to avoid compression */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[clamp(320px,65vw,600px)] h-[clamp(320px,65vw,600px)] border border-dashed border-nutribowl-dark/15 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-[clamp(280px,55vw,480px)] h-[clamp(280px,55vw,480px)] border border-dotted border-nutribowl-gold/35 rounded-full"
          />

          {/* The circular image frame — fluid sizing */}
          <div className="relative w-[clamp(300px,60vw,520px)] h-[clamp(300px,60vw,520px)] rounded-full shadow-2xl overflow-hidden bg-nutribowl-cream border-[6px] md:border-[8px] border-white">
            <AnimatePresence>
              <motion.img
                key={current}
                src={SLIDES[current].image}
                alt={SLIDES[current].title2}
                initial={{ opacity: 0, rotate: 20 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none z-10" />
          </div>

          {/* Floating badge — only desktop */}
          <AnimatePresence>
            <motion.div
              key={`tag-${current}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 -right-2 md:right-0 bg-white/90 backdrop-blur shadow-lg px-5 py-3 rounded-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-nutribowl-gold flex items-center justify-center text-[9px] text-white font-bold border-2 border-white">A</div>
                  <div className="w-7 h-7 rounded-full bg-nutribowl-brown flex items-center justify-center text-[9px] text-white font-bold border-2 border-white">B</div>
                </div>
                <div>
                  <p className="text-xs font-bold text-nutribowl-dark leading-none">Premium Grade</p>
                  <p className="text-[10px] text-nutribowl-dark/55 mt-0.5">Sourced Globally</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Scroll indicator — hidden on small mobile to save space */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 cursor-pointer hidden sm:flex"
      >
        <span className="text-[9px] tracking-widest uppercase font-sans">Explore</span>
        <div className="w-px h-10 bg-nutribowl-dark" />
      </motion.div>

    </section>
  );
};