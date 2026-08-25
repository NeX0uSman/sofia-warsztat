"use client";

import { motion } from "framer-motion";
import { Wrench, Award, CheckCircle2, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  "20 lat doświadczenia w branży",
  "Serwis skrzyń biegów (DSG • PowerShift • AT)",
  "Wysokiej jakości części OE oraz markowe zamienniki",
  "Pełna gwarancja na wszystkie wykonane usługi",
];

export default function ONas() {
  return (
    <section id="o-nas" className="py-24 bg-auto-matte text-auto-text border-b-2 border-auto-border transition-colors">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest block">
              / O NAS
            </span>

            <h2 className="font-subheading text-3xl sm:text-5xl font-black uppercase tracking-tight text-auto-heading leading-none">
              20 LAT DOŚWIADCZENIA, <br />
              <span className="text-auto-danger">PROFEJONALNA PRECYZJA</span>.
            </h2>

            <p className="font-mono text-sm sm:text-base text-auto-concrete leading-relaxed">
              <strong className="text-auto-heading">EUROPEJCZYK AUTO SERWIS</strong> w Plewiskach to warsztat samochodowy budowany na wieloletniej praktyce i wiedzy technicznej. Zapewniamy pełną obsługę pojazdów osobowych i dostawczych dla klientów z Poznań Plewiska i okolic.
            </p>

            <p className="font-mono text-xs sm:text-sm text-auto-concrete leading-relaxed">
              Specjalizujemy się w zaawansowanych naprawach mechanicznych: od kompleksowej obsługi automatycznych skrzyń biegów (DSG, PowerShift, AT) i wymiany rozrządów, po regenerację turbosprężarek oraz wtryskiwaczy Diesla. Stawiamy na rzetelną diagnostykę i jasną komunikację.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 font-mono text-xs">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-auto-danger shrink-0" />
                  <span className="text-auto-heading font-bold">{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-auto-border">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-auto-heading block">20+</span>
                <span className="font-mono text-[10px] text-auto-concrete uppercase">Lat Doświadczenia</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-auto-heading block">100%</span>
                <span className="font-mono text-[10px] text-auto-concrete uppercase">Gwarancji Jakości</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-auto-heading block">PRO</span>
                <span className="font-mono text-[10px] text-auto-concrete uppercase">Sprzęt Diagnostyczny</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-auto-panel border-4 border-auto-border p-4 shadow-[10px_10px_0_rgba(0,0,0,0.2)] dark:shadow-[10px_10px_0_rgba(0,0,0,0.8)]">
              <img
                src="/praca.png"
                alt="Zespół Europejczyk Auto Serwis"
                className="w-full h-80 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              
              <div className="mt-4 p-4 bg-auto-matte border border-auto-border flex items-center gap-4">
                <div className="p-3 bg-auto-danger text-white shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-subheading text-sm font-black uppercase text-auto-heading">
                    Gwarancja & Jakość
                  </h3>
                  <p className="font-mono text-[11px] text-auto-concrete">
                    Wszystkie usługi wykonujemy przy użyciu sprawdzonych części i profesjonalnych narzędzi.
                  </p>
                </div>
              </div>
            </div>

            {/* Industrial Tag */}
            <div className="absolute -bottom-4 -left-4 bg-auto-danger text-white font-mono text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest hidden sm:block">
              // EUROPEJCZYK • PLEWISKA UL. STAWNA 6
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}