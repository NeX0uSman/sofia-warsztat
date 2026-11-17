import type { FormEventHandler } from "react";
import { MotionButton } from "../MotionInteractive";

export type BookingMode = "book" | "quote";

type BookingModalProps = {
  mode: BookingMode;
  selectedService: string;
  onSelectedServiceChange: (service: string) => void;
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function BookingModal({
  mode,
  selectedService,
  onSelectedServiceChange,
  onClose,
  onSubmit,
}: BookingModalProps) {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-zinc-100">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
              {mode === "quote" ? "Bezpłatna wycena" : "Szybka rezerwacja"}
            </span>
            <h2 className="font-display font-bold text-xl text-ink mt-0.5">
              {mode === "quote" ? "Zapytaj o koszt naprawy" : "Umów wizytę w SOFIA"}
            </h2>
          </div>
          <MotionButton
            type="button"
            onClick={onClose}
            aria-label="Zamknij okno"
            className="w-8 h-8 rounded-lg bg-oat hover:bg-zinc-200 text-ink flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </MotionButton>
        </div>

        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              Twój samochód (marka, model, rocznik)
            </label>
            <input
              type="text"
              required
              placeholder="np. Toyota Corolla 1.8 Hybrid 2020"
              className="w-full px-3.5 py-2.5 rounded-xl bg-sand border border-zinc-200 focus:border-terracotta focus:bg-white focus:outline-none text-sm text-ink placeholder-zinc-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              W czym możemy pomóc?
            </label>
            <select
              value={selectedService}
              onChange={(e) => onSelectedServiceChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-sand border border-zinc-200 focus:border-terracotta focus:bg-white focus:outline-none text-sm text-ink"
            >
              <option value="Wymiana oleju, filtrów i kontrola rozrządu">
                Wymiana oleju, filtrów i kontrola rozrządu
              </option>
              <option value="Diagnostyka komputerowa i sprawdzenie błędów">
                Diagnostyka komputerowa i sprawdzenie błędów
              </option>
              <option value="Serwis hamulców lub zawieszenia">
                Serwis hamulców lub zawieszenia
              </option>
              <option value="Przegląd i odgrzybianie klimatyzacji">
                Przegląd i odgrzybianie klimatyzacji
              </option>
              <option value="Inna sprawa — proszę o telefon">
                Inna sprawa — proszę o telefon
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              Twój numer telefonu (oddzwonimy w 15 min)
            </label>
            <input
              type="tel"
              required
              placeholder="np. 500 600 700"
              className="w-full px-3.5 py-2.5 rounded-xl bg-sand border border-zinc-200 focus:border-terracotta focus:bg-white focus:outline-none text-sm text-ink placeholder-zinc-400"
            />
          </div>

          <MotionButton
            type="submit"
            className="w-full py-3.5 rounded-xl bg-terracotta hover:bg-terracottaHover text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
          >
            Wyślij — oddzwonimy z propozycją terminu
          </MotionButton>
        </form>
      </div>
    </div>
  );
}
