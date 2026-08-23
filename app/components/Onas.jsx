"use client";

import { motion } from "framer-motion";
import { Wrench, Award, Users, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Certyfikowany warsztat sieci Motrio",
  "Zaawansowana diagnostyka komputerowa",
  "Oryginalne części OE oraz wysokiej klasy zamienniki",
  "Transparentny kosztorys przed każdą naprawą",
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
              TRADYCJA WARSZTATOWA, <br />
              <span className="text-auto-danger">NOWOCZESNA PRECYZJA</span>.
            </h2>

            <p className="font-mono text-sm sm:text-base text-auto-concrete leading-relaxed">
              Renoma Car w Plewiskach to miejsce utworzone z pasji do mechaniki i szacunku dla czasu klienta. Jako oficjalny partner sieci <strong className="text-auto-heading">Motrio</strong> ączymy tradycyjny kunszt z zaawansowaną aparaturą diagnostyczną.
            </p>

            <p className="font-mono text-xs sm:text-sm text-auto-concrete leading-relaxed">
              Specjalizujemy się w naprawach układów hamulcowych, zawieszeń oraz remontach silników. Nie wymieniamy części „na ślepo” — precyzyjnie diagnozujemy przyczynę awarii, oferując rzetelną opiekę serwisową dla kierowców z Plewisk, Junikowa i okolic.
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
                <span className="font-heading text-2xl sm:text-3xl font-black text-auto-heading block">15+</span>
                <span className="font-mono text-[10px] text-auto-concrete uppercase">Lat Doświadczenia</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-auto-heading block">5000+</span>
                <span className="font-mono text-[10px] text-auto-concrete uppercase">Obsłużonych Aut</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-black text-auto-heading block">100%</span>
                <span className="font-mono text-[10px] text-auto-concrete uppercase">Jasnych Wycen</span>
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
                src="/praca.jpg"
                alt="Zespół Renoma Car w trakcie pracy"
                className="w-full h-80 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              
              <div className="mt-4 p-4 bg-auto-matte border border-auto-border flex items-center gap-4">
                <div className="p-3 bg-auto-danger text-white shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-subheading text-sm font-black uppercase text-auto-heading">
                    Autoryzacja Motrio
                  </h3>
                  <p className="font-mono text-[11px] text-auto-concrete">
                    Spełniamy rygorystyczne normy jakościowe napraw i części serwisowych.
                  </p>
                </div>
              </div>
            </div>

            {/* Industrial Tag */}
            <div className="absolute -bottom-4 -left-4 bg-auto-danger text-white font-mono text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest hidden sm:block">
              // RENOMA CAR PLEWISKA
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}