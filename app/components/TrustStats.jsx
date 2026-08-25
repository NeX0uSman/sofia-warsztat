"use client";
import { Star, ShieldCheck, FileCheck, Car } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnoza",
    desc: "Podłączenie komputera, precyzyjna lokalizacja usterki.",
  },
  {
    num: "02",
    title: "Wycena",
    desc: "Zawsze dzwonimy z kosztorysem przed rozpoczęciem prac.",
  },
  {
    num: "03",
    title: "Naprawa",
    desc: "Obsługa silników, skrzyń DSG/AT oraz podzespołów z gwarancją.",
  },
  {
    num: "04",
    title: "Odbiór",
    desc: "Jazda próbna, protokół wykonanych usług i zwrot części.",
  },
];

export default function TrustStats() {
  return (
    <section className="py-20 bg-auto-matte text-auto-text border-b-2 border-auto-border transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 space-y-16">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 items-center bg-auto-panel border-4 border-auto-border p-8 shadow-[8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.8)]"
        >
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-auto-border pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 lg:w-6 lg:h-6 fill-current"
                  />
                ))}
              </div>
              <span className="font-heading text-l lg:text-3xl font-black text-auto-heading">
                4.5 / 5.0
              </span>
            </div>
            <p className="font-mono text-xs text-auto-concrete">
              Wysoka jakość usług potwierdzona zadowoleniem kierowców w Poznaniu
              i Plewiskach.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6 font-mono text-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-auto-danger shrink-0" />
              <div>
                <strong className="block text-auto-heading uppercase font-subheading text-sm">
                  20 Lat Praktyki
                </strong>
                <span className="text-auto-concrete">
                  Doświadczenie warsztatowe
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-auto-danger shrink-0" />
              <div>
                <strong className="block text-auto-heading uppercase font-subheading text-sm">
                  Brak Ukrytych Kosztów
                </strong>
                <span className="text-auto-concrete">
                  Jasny kosztorys naprawy
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-auto-danger shrink-0" />
              <div>
                <strong className="block text-auto-heading uppercase font-subheading text-sm">
                  Pełna Gwarancja
                </strong>
                <span className="text-auto-concrete">
                  Na części i robociznę
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div>
          <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest block mb-2">
            / Standard obsługi w Plewiskach
          </span>
          <h2 className="font-subheading text-3xl font-black uppercase tracking-tight text-auto-heading mb-8">
            JAK PRACUJEMY?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-auto-panel border border-auto-border p-6 relative"
              >
                <span className="font-mono text-3xl font-black text-auto-danger/30 absolute top-4 right-4">
                  {s.num}
                </span>
                <h3 className="font-subheading text-lg font-black uppercase text-auto-heading mb-2">
                  {s.title}
                </h3>
                <p className="font-mono text-xs text-auto-concrete leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
