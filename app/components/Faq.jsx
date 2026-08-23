"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Czy muszę umawiać się wcześniej na diagnostykę komputerową?",
    a: "Zalecamy kontakt telefoniczny przed przyjazdem. Staramy się przyjmować awaryjne przypadki na bieżąco, jednak wcześniejsza rezerwacja gwarantuje przyjęcie auta bez kolejki.",
  },
  {
    q: "Czy dostanę wstępną wycenę przed rozpoczęciem naprawy?",
    a: "Tak. Nigdy nie wykonujemy prac bez uprzedniej zgody klienta. Po przeprowadzeniu diagnostyki dzwonimy z dokładnym kosztorysem robocizny i części.",
  },
  {
    q: "Czy montujecie części powierzone przez klienta?",
    a: "Tak, naprawiamy również na częściach dostarczonych przez klienta, jednak w takim przypadku gwarancją objęta jest wyłącznie wykonana usługa (robocizna).",
  },
  {
    q: "Czy oferujecie samochód zastępczy?",
    a: "Tak, dysponujemy flotą aut zastępczych na czas trwania naprawy. Prosimy o informację przy zgłaszaniu auta.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-24 bg-auto-matte text-auto-text border-b-2 border-auto-border transition-colors">
      <div className="max-w-[1000px] mx-auto px-6">
        <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest block mb-2">
          / Odpowiedzi na pytania
        </span>
        <h2 className="font-subheading text-3xl font-black uppercase tracking-tight text-auto-heading mb-10">
          NAJCZĘŚCIEJ ZADAWANE PYTANIA
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-auto-panel border border-auto-border transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-subheading text-base sm:text-lg font-bold uppercase text-auto-heading"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-auto-danger shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 font-mono text-xs text-auto-concrete leading-relaxed border-t border-auto-border/50 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}