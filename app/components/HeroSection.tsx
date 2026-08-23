'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, Gauge, CheckCircle } from 'lucide-react';

const faders = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const TICKER_TEXT = "DIAGNOSTYKA KOMPUTEROWA · REMONTY SILNIKÓW · UKŁADY ZAWIESZENIA · UKŁADY HAMULCOWE · SERWIS KLIMATYZACJI · PLEWISKA UL. SZKOLNA 90 · TEL. 509 664 358 · ";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-auto-matte text-auto-text flex flex-col justify-between overflow-hidden border-b-2 border-auto-border transition-colors">
      
      {/* Background Images */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale contrast-[1.4] brightness-[0.3]"
        style={{ backgroundImage: 'url("/driveway.png")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-auto-matte via-transparent to-auto-matte" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        <motion.div
          initial="initial" animate="animate" transition={{ staggerChildren: 0.15, duration: 0.8 }}
          className="md:col-span-8 space-y-6 sm:space-y-8"
        >
          <motion.div variants={faders} className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-4 py-1.5 border-2 border-auto-border bg-auto-panel text-auto-heading font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-auto-danger shrink-0" />
            <CheckCircle className="w-4 h-4 text-auto-concrete shrink-0" />
            <span>AUTORYZOWANY SERWIS MOTRIO · PLEWISKA</span>
          </motion.div>

          <motion.h1 variants={faders} className="font-heading text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.0] sm:leading-[0.95]">
            NAPRAWA <br />
            BEZ <span className="text-auto-danger">WAD</span>.
          </motion.h1>

          <motion.p variants={faders} className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl font-mono leading-relaxed">
            Kompleksowy warsztat samochodowy. Specjalizacja: silniki, zawieszenia i hamulce. Tradycja i precyzyjne narzędzia diagnostyczne.
          </motion.p>

          <motion.div variants={faders} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2">
            <a
              href="#umow-wizyte"
              className="bg-auto-danger hover:opacity-90 text-white font-subheading text-sm sm:text-base font-black px-6 sm:px-10 py-3.5 sm:py-5 uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[6px_6px_0_rgba(0,0,0,0.15)] dark:shadow-[6px_6px_0_rgba(0,0,0,0.8)] border-4 border-black/10 dark:border-black/30"
            >
              <span>ZAPISZ SIĘ ONLINE</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            
            <a
              href="#uslugi"
              className="text-white font-subheading text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-5 uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all group border border-white/20 sm:border-none"
            >
              <Gauge className="w-5 h-5 text-white/80 group-hover:text-auto-danger" />
              <span>OFERTA SERWISOWA</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Industrial Accent Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:block md:col-span-4 relative p-4 border-4 border-auto-border bg-auto-panel"
        >
          <img
            src="/praca.jpg"
            alt="Renoma Exterior Close"
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute top-2 left-2 bg-auto-matte text-auto-heading font-mono text-[9px] px-2 py-1 uppercase">[ PRZEBIEG PRACY ]</div>
        </motion.div>
      </div>

      {/* Infinite Running Marquee Ticker */}
      <div className="relative z-10 w-full bg-auto-danger text-white font-mono text-[10px] sm:text-xs font-bold py-2.5 overflow-hidden select-none uppercase tracking-wider border-t-2 border-black/20">
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex whitespace-nowrap"
          >
            <span>{TICKER_TEXT.repeat(4)}</span>
            <span>{TICKER_TEXT.repeat(4)}</span>
          </motion.div>
        </div>
      </div>

    </section>
  );
}