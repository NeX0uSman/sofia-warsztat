'use client';
import { SERVICES_LIST } from '@/constants/data';
import { Cog, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="uslugi" className="py-24 bg-auto-matte text-auto-text border-b-2 border-auto-border transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        
        {/* Engine Visual Block */}
        <div className="md:col-span-5 relative aspect-[5/6] bg-auto-panel border-4 border-auto-border p-2 shadow-[8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.8)] overflow-hidden">
          <img
            src="/engine.png"
            alt="Technical Engine Block"
            className="w-full h-fit object-cover grayscale contrast-150 brightness-[0.7] animate-engine-rumble"
          />
          <div className="absolute inset-0 bg-auto-matte/20 mix-blend-color-burn" />
          <div className="absolute bottom-5 left-5 right-5 text-auto-heading bg-auto-matte/90 p-5 font-mono border border-auto-border backdrop-blur-md">
            <div className="text-xl font-bold uppercase tracking-tight">[ SPECJALIZACJA VAG/RENAULT ]</div>
            <p className="text-xs text-auto-concrete mt-1">Kapitalne remonty silników, regeneracja turbosprężarek i adaptacje układów.</p>
          </div>
        </div>

        {/* Services List */}
        <div className="md:col-span-7 space-y-1">
          <div className="mb-10 text-right">
            <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest">/ Oferta Warsztatu</span>
            <h2 className="font-subheading text-4xl font-black uppercase tracking-tight text-auto-heading mt-1">
              TECHNIKA REPARACYJNA
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {SERVICES_LIST.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-auto-panel border border-auto-border p-6 flex flex-col justify-between hover:border-auto-danger transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-auto-danger/5 rounded-bl-full pointer-events-none group-hover:bg-auto-danger/10 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-2xl font-bold text-auto-concrete group-hover:text-auto-danger transition-colors">0{index + 1}</span>
                      <Icon className="w-8 h-8 text-auto-concrete group-hover:text-auto-heading transition-colors" />
                    </div>

                    <h3 className="font-subheading text-xl font-black uppercase tracking-wide text-auto-heading mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-auto-concrete text-xs leading-relaxed mb-8 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <a href="#kontakt" className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-auto-danger group-hover:opacity-80 transition-opacity">
                    <span>Zapisz się</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}