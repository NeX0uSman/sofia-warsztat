"use client";

import { useState } from "react";
import { MotionButton } from "../MotionInteractive";

const REVIEWS = [
  {
    author: "Michał Kowalczyk",
    car: "Skoda Octavia III 2.0 TDI",
    text: "Pierwszy warsztat w Poznaniu, z którego dostałem MMS-em zdjęcia zużytych tulei i tarcz jeszcze przed wymianą. Cena co do złotówki zgodna z wcześniejszym SMS-em.",
  },
  {
    author: "Karolina Nowakowska",
    car: "Toyota Yaris Hybrid",
    text: "Bardzo kulturalna obsługa, czysta poczekalnia z dobrą kawą i nikt nie patrzy z góry, gdy pytam o szczegóły techniczne. Wszystko wytłumaczone po ludzku.",
  },
  {
    author: "Tomasz Zieliński",
    car: "BMW 320d F30",
    text: "Szybka diagnostyka usterki układu dolotowego, z którą dwa inne serwisy nie mogły sobie poradzić. Auto odebrane punktualnie o 16:30, w środku pachnąco i czysto.",
  },
];

const FAQS = [
  {
    q: "Czy przed naprawą poznam dokładny koszt części i robocizny?",
    a: "Tak. Po wstępnej weryfikacji na podnośniku wysyłamy SMS-em lub telefonicznie dokładny kosztorys. Nie rozpoczynamy wymiany żadnego podzespołu bez Twojej wyraźnej akceptacji.",
  },
  {
    q: "Czy mogę przyjechać z własnymi częściami lub wybrać zamienniki?",
    a: "Standardowo proponujemy sprawdzone części jakości OE (ATE, Lemförder, Mann, Continental) z pełną 24-miesięczną gwarancją. Na życzenie montujemy również części dostarczone przez klienta.",
  },
  {
    q: "Jak zarezerwować samochód zastępczy na czas naprawy?",
    a: "Wystarczy zaznaczyć tę potrzebę podczas rozmowy telefonicznej z doradcą lub w formularzu rezerwacji online. Auto przygotujemy na godzinę Twojego przyjazdu.",
  },
  {
    q: "Czy serwisujecie auta na gwarancji producenta (GVO)?",
    a: "Tak. Wykonujemy przeglądy okresowe zgodnie z harmonogramem producenta z użyciem części o jakości oryginału oraz wpisem do elektronicznej książki serwisowej — bez utraty gwarancji fabrycznej.",
  },
];

export default function ReviewsAndFaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="opinie" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-20">
        {/* Testimonials */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-card text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
                Opinie kierowców
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
                Zaufało nam ponad 340 właścicieli aut.
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-card text-xs font-semibold text-ink">
              <span className="text-amber-400">★★★★★</span>
              <span>Średnia ocen 4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((rev) => (
              <div
                key={rev.author}
                className="bg-white rounded-3xl p-6 shadow-card border border-zinc-200/70 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-ink leading-relaxed">“{rev.text}”</p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <div className="font-display font-bold text-sm text-ink">{rev.author}</div>
                  <div className="text-xs text-slatebody">{rev.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-card text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
              Częste pytania
            </span>
            <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight leading-tight">
              Wszystko, co warto wiedzieć przed wizytą.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slatebody leading-relaxed">
              Masz nietypowy objaw lub chcesz skonsultować kosztorys z innego warsztatu? Zadzwoń —
              chętnie podpowiemy.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.q}
                  className="bg-white rounded-2xl border border-zinc-200/80 shadow-card overflow-hidden"
                >
                  <MotionButton
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-[15px] text-ink">
                      {item.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-terracotta text-white" : "bg-oat text-ink"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </MotionButton>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slatebody leading-relaxed border-t border-zinc-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}