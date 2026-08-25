'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, Gauge, Phone } from 'lucide-react';

const faders = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
};

const TICKER_TEXT = "SKRZNIE AUTOMATYCZNE (DSG • POWERSHIFT • AT) · NAPRAWA SILNIKÓW · WYMIANA ROZRZĄDU · REGENERACJA TURBOSPRĘŻAREK · WTRYSKIWACZE DIESEL · OLEJE I FILTRY · UL. STAWNA 6, PLEWISKA · TEL. 534 762 922 · ";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] md:min-h-[85vh] bg-auto-matte text-auto-text flex flex-col justify-between overflow-hidden border-b-2 border-auto-border transition-colors">
      
      {/* Background Images */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale contrast-[1.4] brightness-[0.3]"
        style={{ backgroundImage: 'url("/driveway.png")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-auto-matte via-transparent to-auto-matte" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1250px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-20 grid md:grid-cols-12 gap-6 lg:gap-12 items-center my-auto">
        
        <motion.div
          initial="initial" animate="animate" transition={{ staggerChildren: 0.12, duration: 0.6 }}
          className="md:col-span-8 space-y-4 sm:space-y-8 w-full min-w-0"
        >
          <motion.div variants={faders} className="inline-flex max-w-full items-center gap-2 px-2.5 py-1 border-2 border-auto-border bg-auto-panel text-auto-heading font-mono text-[9px] sm:text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-auto-danger shrink-0" />
            <span className="truncate">EUROPEJCZYK AUTO SERWIS · PLEWISKA</span>
          </motion.div>

          {/* Heading Fix: Adjusted font sizes (text-[28px] on smallest screens) + break-words */}
          <motion.h1 variants={faders} className="font-heading text-[28px] xs:text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter sm:tracking-tight text-white leading-[1.05] sm:leading-[0.95] break-words">
            20 LAT <br />
            <span className="text-auto-danger block sm:inline">DOŚWIADCZENIA</span> W REPARACJI.
          </motion.h1>

          <motion.p variants={faders} className="text-white/90 text-xs sm:text-base lg:text-lg max-w-2xl font-mono leading-relaxed break-words">
            Profesjonalny serwis samochodów w Poznań-Plewiska. Specjalizacja: DSG, PowerShift, skrzynie AT, remonty silników, wymiana rozrządów i regeneracja turbosprężarek.
          </motion.p>

          <motion.div variants={faders} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 pt-1 sm:pt-2">
            <a
              href="tel:534762922"
              className="bg-auto-danger hover:opacity-90 text-white font-subheading text-xs sm:text-base font-black px-5 sm:px-10 py-3 sm:py-5 uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-[4px_4px_0_rgba(0,0,0,0.15)] sm:shadow-[6px_6px_0_rgba(0,0,0,0.15)] border-2 sm:border-4 border-black/10 dark:border-black/30"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>534 762 922</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>
            
            <a
              href="#uslugi"
              className="text-white font-subheading text-xs sm:text-base font-bold px-5 sm:px-8 py-3 sm:py-5 uppercase tracking-widest flex items-center justify-center gap-2 transition-all group border border-white/20 sm:border-none"
            >
              <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-auto-danger shrink-0" />
              <span>ZAKRES USŁUG</span>
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
            src="/praca2.png"
            alt="Europejczyk Workshop"
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute top-2 left-2 bg-auto-matte text-auto-heading font-mono text-[9px] px-2 py-1 uppercase">[ WARSZTAT PLEWISKA ]</div>
        </motion.div>
      </div>

      {/* Infinite Running Marquee Ticker */}
      <div className="relative z-10 w-full bg-auto-danger text-white font-mono text-[9px] sm:text-xs font-bold py-2 sm:py-2.5 overflow-hidden select-none uppercase tracking-wider border-t-2 border-black/20 shrink-0">
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