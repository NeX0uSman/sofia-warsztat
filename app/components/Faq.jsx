"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
            const faqNum = (idx + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={`bg-auto-panel border-2 transition-all duration-300 ${
                  isOpen
                    ? "border-auto-danger shadow-[6px_6px_0_rgba(0,0,0,0.15)] dark:shadow-[6px_6px_0_rgba(0,0,0,0.8)]"
                    : "border-auto-border hover:border-auto-concrete/50"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-subheading text-base sm:text-lg font-bold uppercase text-auto-heading transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-auto-danger font-black tracking-widest px-2 py-1 bg-auto-matte border border-auto-border">
                      [{faqNum}]
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <div
                    className={`p-2 bg-auto-matte border border-auto-border transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 border-auto-danger text-auto-danger" : "text-auto-concrete"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-mono text-xs text-auto-concrete leading-relaxed border-t border-auto-border/60 flex items-start gap-3">
                        <HelpCircle className="w-4 h-4 text-auto-danger shrink-0 mt-0.5" />
                        <div>{faq.a}</div>
                      </div>
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