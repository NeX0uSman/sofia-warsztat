"use client";

import { MotionButton } from "../MotionInteractive";
import { SYSTEMS_DATA, type SystemKey } from "./data";

type DiagnosticCardProps = {
  activeSystem: SystemKey;
  onSelectSystem: (system: SystemKey) => void;
  onBook: () => void;
};

const SYSTEMS_KEYS: SystemKey[] = ["engine", "brakes", "ac", "obd"];

export default function DiagnosticCard({
  activeSystem,
  onSelectSystem,
  onBook,
}: DiagnosticCardProps) {
  const currentData = SYSTEMS_DATA[activeSystem];

  return (
    <div className="lg:col-span-6">
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft border border-zinc-200/80 relative space-y-5">
        
        {/* Card Top Title */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
              Szybka wycena i zakres
            </span>
            <h2 className="font-display font-bold text-lg text-ink">
              Wybierz główny problem z auto
            </h2>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
            Wstępna wycena w 1 min
          </span>
        </div>

        {/* Unified Service Selector Pills (Replaces confusing tabs + car hotspots) */}
        <div className="grid grid-cols-2 gap-2.5">
          {SYSTEMS_KEYS.map((key) => {
            const item = SYSTEMS_DATA[key];
            const isActive = activeSystem === key;
            return (
              <MotionButton
                key={key}
                type="button"
                onClick={() => onSelectSystem(key)}
                className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-ink text-white shadow-md ring-2 ring-ink"
                    : "bg-sand hover:bg-oat text-ink border border-zinc-200/80"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-[11px] font-bold ${isActive ? "text-orange-400" : "text-slatebody"}`}>
                    {item.badge}
                  </span>
                  <span className={`text-xs font-extrabold ${isActive ? "text-white" : "text-terracotta"}`}>
                    {item.price}
                  </span>
                </div>
                <div className="font-display font-bold text-sm leading-snug">
                  {item.tabTitle}
                </div>
              </MotionButton>
            );
          })}
        </div>

        {/* Active Service Detailed Summary Box */}
        <div className="rounded-2xl bg-sand p-5 border border-zinc-200/80 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slatebody block mb-1">
                {currentData.time}
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-ink leading-snug">
                {currentData.title}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <span className="block text-[11px] text-slatebody">Od</span>
              <span className="font-display font-extrabold text-xl text-terracotta">
                {currentData.price}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slatebody leading-relaxed">
            {currentData.desc}
          </p>

          <div className="pt-2 flex items-center justify-between gap-3 border-t border-zinc-200/60">
            <div className="flex items-center gap-2 text-xs font-medium text-ink">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Zdjęcia z naprawy na SMS w cenie</span>
            </div>

            <MotionButton
              type="button"
              onClick={onBook}
              className="px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracottaHover text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              Rezerwuj ten termin →
            </MotionButton>
          </div>
        </div>

      </div>
    </div>
  );
}