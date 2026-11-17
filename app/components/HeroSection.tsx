"use client";

import type { BookingMode } from "./hero-section/BookingModal";
import DiagnosticCard from "./hero-section/DiagnosticCard";
import HeroIntroduction from "./hero-section/HeroIntroduction";
import { SYSTEMS_DATA, type SystemKey } from "./hero-section/data";

type HeroSectionProps = {
  activeSystem: SystemKey;
  onSelectSystem: (system: SystemKey) => void;
  onOpenBooking: (mode: BookingMode, service: string) => void;
};

export default function SofiaHero({
  activeSystem,
  onSelectSystem,
  onOpenBooking,
}: HeroSectionProps) {
  const selectedService = SYSTEMS_DATA[activeSystem].selectOption;

  return (
    <section className="flex-1 flex items-center py-8 sm:py-12 lg:py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          <HeroIntroduction
            onBook={() => onOpenBooking("book", selectedService)}
            onQuote={() => onOpenBooking("quote", selectedService)}
          />
          <DiagnosticCard
            activeSystem={activeSystem}
            onSelectSystem={onSelectSystem}
            onBook={() => onOpenBooking("book", selectedService)}
          />
        </div>
      </div>
    </section>
  );
}
