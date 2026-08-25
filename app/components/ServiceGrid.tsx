'use client';
import { SERVICES_LIST } from '@/constants/data';
import { ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="uslugi" className="py-24 bg-auto-matte text-auto-text border-b-2 border-auto-border transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        
        {/* Engine & Workshop Visual Block */}
        <div className="md:col-span-5 relative aspect-[5/6] bg-auto-panel border-4 border-auto-border p-2 shadow-[8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.8)] overflow-hidden">
          <img
            src="/engine2.jpg"
            alt="Europejczyk Auto Serwis Engine Repair"
            className="w-full h-full object-cover grayscale contrast-150 brightness-[0.7] hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-auto-matte/20 mix-blend-color-burn pointer-events-none" />
          
          {/* Experience Badge */}
          <div className="absolute top-4 left-4 bg-auto-danger text-white font-mono text-xs font-bold px-3 py-1.5 uppercase tracking-widest flex items-center gap-1.5 shadow-md">
            <Award className="w-4 h-4" />
            <span>20 LAT DOŚWIADCZENIA</span>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-5 left-5 right-5 text-auto-heading bg-auto-matte/90 p-5 font-mono border border-auto-border backdrop-blur-md">
            <div className="text-lg font-bold uppercase tracking-tight text-auto-heading">
              [ SPECJALIZACJA: DSG • POWERSHIFT • AT ]
            </div>
            <p className="text-xs text-auto-concrete mt-1 leading-relaxed">
              Kompleksowy serwis automatycznych skrzyń biegów, remonty silników oraz regeneracja turbosprężarek.
            </p>
            <div className="mt-3 pt-3 border-t border-auto-border flex items-center justify-between text-[11px] font-bold text-auto-danger">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> GWARANCJA NA USŁUGI
              </span>
              <span>PLEWISKA, UL. STAWNA 6</span>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="md:col-span-7 space-y-1">
          <div className="mb-10 text-right">
            <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest">/ Zakres Usług</span>
            <h2 className="font-subheading text-4xl font-black uppercase tracking-tight text-auto-heading mt-1">
              EUROPEJCZYK <span className="text-auto-danger">AUTO SERWIS</span>
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
                  transition={{ delay: index * 0.08 }}
                  className="bg-auto-panel border border-auto-border p-6 flex flex-col justify-between hover:border-auto-danger transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-auto-danger/5 rounded-bl-full pointer-events-none group-hover:bg-auto-danger/10 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-bold text-auto-concrete group-hover:text-auto-danger transition-colors">
                        0{index + 1}
                      </span>
                      <div className="p-2.5 rounded-lg bg-auto-matte border border-auto-border text-auto-concrete group-hover:text-auto-danger group-hover:border-auto-danger/30 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-subheading text-xl font-black uppercase tracking-wide text-auto-heading mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-auto-concrete text-xs leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <a
                    href="tel:534762922"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-auto-danger group-hover:opacity-80 transition-opacity"
                  >
                    <span>Zadzwoń: 534 762 922</span>
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