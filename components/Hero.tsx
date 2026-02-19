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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 md:px-10 lg:px-16 pt-20 pb-16">

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
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-4">

        {/* ── Text (bottom on mobile, left on desktop) ── */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 md:space-y-5"
            >
              <span className={`font-sans text-[10px] md:text-xs tracking-[0.22em] font-bold uppercase ${SLIDES[current].accent}`}>
                {SLIDES[current].sub}
              </span>

              <h1 className="font-serif text-[clamp(3rem,10vw,7rem)] text-nutribowl-dark leading-[0.88]">
                <span className="block italic font-light opacity-75">{SLIDES[current].title1}</span>
                <span className="block font-bold mt-1">{SLIDES[current].title2}</span>
              </h1>

              <p className="font-sans text-sm md:text-base text-nutribowl-dark/65 max-w-sm leading-relaxed pt-1">
                {SLIDES[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-nutribowl-dark/15 flex items-center justify-center hover:bg-nutribowl-dark hover:text-white hover:border-nutribowl-dark transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-nutribowl-dark/15 flex items-center justify-center hover:bg-nutribowl-dark hover:text-white hover:border-nutribowl-dark transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current
                      ? 'w-5 h-1.5 bg-nutribowl-gold'
                      : 'w-1.5 h-1.5 bg-nutribowl-dark/20 hover:bg-nutribowl-dark/40'
                    }`}
                />
              ))}
            </div>

            <span className="font-mono text-xs text-nutribowl-dark/35 ml-2 hidden sm:block">
              0{current + 1} / 0{SLIDES.length}
            </span>
          </div>
        </div>

        {/* ── Image (top on mobile, right on desktop) ── */}
        <div className="order-1 md:order-2 relative flex justify-center items-center">
          {/* Decorative rings — sized with clamp to avoid compression */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[clamp(220px,55vw,480px)] h-[clamp(220px,55vw,480px)] border border-dashed border-nutribowl-dark/15 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-[clamp(175px,44vw,380px)] h-[clamp(175px,44vw,380px)] border border-dotted border-nutribowl-gold/35 rounded-full"
          />

          {/* The circular image frame — fluid sizing */}
          <div className="relative w-[clamp(180px,48vw,380px)] h-[clamp(180px,48vw,380px)] rounded-full shadow-2xl overflow-hidden bg-nutribowl-cream border-[5px] md:border-[6px] border-white">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={current}
                src={SLIDES[current].image}
                alt={SLIDES[current].title2}
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1.08 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.7, ease: "anticipate" }}
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
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
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