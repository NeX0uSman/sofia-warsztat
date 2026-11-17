"use client";

import { MotionButton } from "../MotionInteractive";

type HeroIntroductionProps = {
  onBook: () => void;
  onQuote: () => void;
};

export default function HeroIntroduction({
  onBook,
  onQuote,
}: HeroIntroductionProps) {
  return (
    <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
      
      {/* Google Rating Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-card">
        <div className="flex items-center gap-0.5 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs font-semibold text-ink">4.3/5 na Google</span>
        <span className="text-zinc-300">•</span>
        <span className="text-xs text-slatebody">40+ opinii w Poznaniu</span>
      </div>

      {/* Clear, Punchy Headline */}
      <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[48px] text-ink leading-[1.12] tracking-tight">
        Serwis auta bez stresu,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-orange-500 to-amber-500">
          jasne zasady
        </span>{" "}
        i zdjęcia na SMS.
      </h1>

      {/* Reassuring Copy */}
      <p className="text-slatebody text-base sm:text-[17px] leading-relaxed max-w-xl">
        W <strong className="text-ink font-semibold">Warsztacie SOFIA</strong> przy ul. Poznańskiej w Komornikach mówimy ludzkim językiem. Zawsze znasz kosztorys i zakres prac zanim dotkniemy kluczem Twojego auta.
      </p>

      {/* Direct CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
        <MotionButton
          type="button"
          onClick={onBook}
          className="px-6 py-3.5 rounded-xl bg-terracotta hover:bg-terracottaHover text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Umów wizytę w 2 minuty</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </MotionButton>

        <MotionButton
          type="button"
          onClick={onQuote}
          className="px-6 py-3.5 rounded-xl bg-white hover:bg-oat text-ink font-semibold text-sm transition-all shadow-card flex items-center justify-center gap-2 cursor-pointer border border-zinc-200"
        >
          <span>Zapytaj o wycenę SMS / Tel</span>
        </MotionButton>
      </div>

      {/* Minimal Trust Strip (Replaces overloaded 4-box feature card) */}
      <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slatebody border-t border-zinc-200/80 mb-5 w-full">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">✓</span>
          <span>Poczekalnia z kawą i Wi-Fi</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">✓</span>
          <span>Auto zastępcze</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">✓</span>
          <span>24 mies. gwarancji</span>
        </div>
      </div>

    </div>
  );
}