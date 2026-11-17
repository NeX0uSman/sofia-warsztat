"use client";

import { MotionButton } from "../MotionInteractive";

type FooterSectionProps = {
  onBook: () => void;
  onQuote: () => void;
  onCopyPhone: () => void;
};

export default function FooterSection({
  onBook,
  onQuote,
  onCopyPhone,
}: FooterSectionProps) {
  return (
    <footer id="kontakt" className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-8">
        {/* Final Comfort CTA Banner with Dotted Background Pattern */}
        <div className="relative bg-ink text-white rounded-[32px] p-7 sm:p-10 lg:p-12 shadow-soft overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Subtle Dotted Background Pattern & Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-terracotta/20 blur-3xl pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              Szybkie terminy w tym tygodniu
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight leading-tight">
              Oddaj auto w dobre ręce i jedź spokojnie.
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Zostaw numer telefonu — doradca techniczny SOFIA oddzwoni w ciągu 15 minut i
              dobierze dogodny termin wizyty.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <MotionButton
              type="button"
              onClick={onBook}
              className="px-6 py-3.5 rounded-xl bg-terracotta hover:bg-terracottaHover text-white font-semibold text-sm transition-colors cursor-pointer shadow-md"
            >
              Umów wizytę online
            </MotionButton>
            <MotionButton
              type="button"
              onClick={onQuote}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors cursor-pointer border border-white/15"
            >
              Poproś o wycenę
            </MotionButton>
          </div>
        </div>

        {/* Location, Hours & Bottom Links */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-zinc-200/80 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="12" height="7" rx="2" />
                  <path d="M9 11v4a3 3 0 0 0 6 0v-4" />
                  <path d="M12 18v3" />
                  <path d="M8 21h8" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-base text-ink">
                Warsztat Samochodowy SOFIA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slatebody leading-relaxed">
              Nowoczesny serwis mechaniczny i diagnostyka komputerowa dla samochodów osobowych i
              dostawczych do 3.5t.
            </p>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className="font-display font-bold text-ink">Adres i godziny otwarcia</div>
            <p className="text-slatebody">ul. Bukowska 114, 60-398 Poznań</p>
            <p className="text-slatebody">Poniedziałek – Piątek: 07:30 – 18:00</p>
            <p className="text-slatebody">Sobota: 08:00 – 14:00 (odbiór i wydania)</p>
          </div>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className="font-display font-bold text-ink">Kontakt bezpośredni</div>
            <MotionButton
              type="button"
              onClick={onCopyPhone}
              className="block font-display font-extrabold text-lg text-terracotta hover:underline cursor-pointer"
            >
              +48 61 840 29 10
            </MotionButton>
            <p className="text-slatebody">kontakt@sofia-warsztat.pl</p>
            <p className="text-xs text-slatebody pt-1">
              Wygodny parking dla klientów bezpośrednio przed halą serwisową.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}