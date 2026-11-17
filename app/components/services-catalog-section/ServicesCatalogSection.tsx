"use client";

import { useState } from "react";
import { MotionButton } from "../MotionInteractive";

type CategoryId = "all" | "periodic" | "diagnostics" | "chassis" | "comfort";

interface ServiceItem {
  id: string;
  category: Exclude<CategoryId, "all">;
  categoryLabel: string;
  title: string;
  desc: string;
  duration: string;
  price: string;
  bookingLabel: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "oil-service",
    category: "periodic",
    categoryLabel: "Przeglądy okresowe",
    title: "Serwis olejowy + komplet filtrów",
    desc: "Wymiana oleju silnikowego (Motul, Liqui Moly, Millers), filtra oleju, powietrza i kabinowego wraz z kasowaniem inspekcji.",
    duration: "ok. 60 min",
    price: "od 220 zł",
    bookingLabel: "Wymiana oleju, filtrów i kontrola rozrządu",
  },
  {
    id: "timing-belt",
    category: "periodic",
    categoryLabel: "Przeglądy okresowe",
    title: "Wymiana rozrządu i pompy wody",
    desc: "Kompleksowa wymiana zestawu paska lub łańcucha rozrządu z użyciem blokad fabrycznych i kontrolą szczelności układu chłodzenia.",
    duration: "4–6 godz.",
    price: "od 690 zł",
    bookingLabel: "Wymiana oleju, filtrów i kontrola rozrządu",
  },
  {
    id: "obd-scan",
    category: "diagnostics",
    categoryLabel: "Diagnostyka",
    title: "Pełna diagnostyka komputerowa OBD-II",
    desc: "Odczyt kodów błędów ze wszystkich sterowników (silnik, ABS, DSG, DPF), analiza parametrów bieżących i wydruk raportu.",
    duration: "ok. 45 min",
    price: "150 zł",
    bookingLabel: "Diagnostyka komputerowa i sprawdzenie błędów",
  },
  {
    id: "pre-purchase",
    category: "diagnostics",
    categoryLabel: "Diagnostyka",
    title: "Przegląd auta przed zakupem (32 pkt)",
    desc: "Pomiar grubości lakieru, weryfikacja podwozia na podnośniku, skan elektroniki oraz jazda próbna z mechanikiem.",
    duration: "ok. 90 min",
    price: "320 zł",
    bookingLabel: "Diagnostyka komputerowa i sprawdzenie błędów",
  },
  {
    id: "brakes-full",
    category: "chassis",
    categoryLabel: "Hamulce i podwozie",
    title: "Wymiana tarcz i klocków hamulcowych",
    desc: "Czyszczenie piast, smarowanie prowadnic zacisków, pomiar bicia tarcz czujnikiem zegarowym i montaż części ATE / Brembo / TRW.",
    duration: "1.5–2 godz.",
    price: "od 190 zł",
    bookingLabel: "Serwis hamulców lub zawieszenia",
  },
  {
    id: "suspension",
    category: "chassis",
    categoryLabel: "Hamulce i podwozie",
    title: "Naprawa zawieszenia i geometria 3D",
    desc: "Wymiana wahaczy, sworzni, tulei, amortyzatorów i końcówek drążków wraz z ustawieniem zbieżności kół.",
    duration: "2–3 godz.",
    price: "od 180 zł",
    bookingLabel: "Serwis hamulców lub zawieszenia",
  },
  {
    id: "ac-service",
    category: "comfort",
    categoryLabel: "Klimatyzacja",
    title: "Serwis klimatyzacji R134a / R1234yf",
    desc: "Odzysk i uzupełnienie czynnika chłodniczego, próba szczelności azotem, wymiana oleju w sprężarce i ozonowanie kabiny.",
    duration: "ok. 60 min",
    price: "od 180 zł",
    bookingLabel: "Przegląd i odgrzybianie klimatyzacji",
  },
  {
    id: "battery-electrics",
    category: "comfort",
    categoryLabel: "Klimatyzacja",
    title: "Wymiana i kodowanie akumulatora AGM/EFB",
    desc: "Test obciążeniowy rozrusznika i alternatora, dobór akumulatora z podtrzymaniem napięcia i adaptacja w sterowniku BMS.",
    duration: "ok. 30 min",
    price: "od 90 zł",
    bookingLabel: "Diagnostyka komputerowa i sprawdzenie błędów",
  },
];

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "all", label: "Wszystkie usługi" },
  { id: "periodic", label: "Przeglądy i olej" },
  { id: "diagnostics", label: "Diagnostyka" },
  { id: "chassis", label: "Hamulce i zawieszenie" },
  { id: "comfort", label: "Klimatyzacja i elektryka" },
];

type ServicesCatalogSectionProps = {
  onSelectService: (bookingLabel: string) => void;
};

export default function ServicesCatalogSection({
  onSelectService,
}: ServicesCatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="uslugi" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-card text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
              Zakres usług i orientacyjny cennik
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              Kompleksowa opieka w jednym miejscu.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <MotionButton
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-ink text-white shadow-xs"
                      : "bg-white hover:bg-oat text-slatebody border border-zinc-200/80"
                  }`}
                >
                  {cat.label}
                </MotionButton>
              );
            })}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 shadow-card border border-zinc-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-terracotta/10 text-terracotta text-[11px] font-bold">
                    {service.categoryLabel}
                  </span>
                  <span className="text-xs font-medium text-slatebody">
                    Czas: {service.duration}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink">{service.title}</h3>
                <p className="text-xs sm:text-[13.5px] text-slatebody leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-4 sm:pt-0 border-zinc-100 shrink-0 gap-3">
                <div className="text-left sm:text-right">
                  <span className="block text-[11px] font-medium text-slatebody">Robocizna</span>
                  <span className="font-display font-extrabold text-xl text-ink">
                    {service.price}
                  </span>
                </div>
                <MotionButton
                  type="button"
                  onClick={() => onSelectService(service.bookingLabel)}
                  className="px-4 py-2 rounded-xl bg-sand hover:bg-terracotta text-ink hover:text-white border border-zinc-200 hover:border-terracotta text-xs font-semibold transition-colors cursor-pointer"
                >
                  Umów usługę →
                </MotionButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}