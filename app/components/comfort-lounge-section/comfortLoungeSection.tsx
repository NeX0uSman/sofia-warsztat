"use client";

import { useState } from "react";
import { MotionButton } from "../MotionInteractive";

type ComfortLoungeSectionProps = {
  onBook: () => void;
};

export default function ComfortLoungeSection({
  onBook,
}: ComfortLoungeSectionProps) {
  // Switched to real workshop and car service photography
  const [liftImg, setLiftImg] = useState(
    "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80",
  );
  const [bayImg, setBayImg] = useState(
    "https://images.unsplash.com/photo-1655811938572-fea6e98fefad?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  );

  return (
    <section id="komfort" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-8">
        {/* Top Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-card text-xs font-bold uppercase tracking-wider text-terracotta mb-4">
              Uczciwość i wygoda
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight leading-[1.1]">
              Zero zgadywania. Widzisz dokładnie to, <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-orange-500 to-amber-500">co naprawiamy.</span>
            </h2>
          </div>

          <p className="text-slatebody text-base sm:text-lg max-w-md leading-relaxed">
            Zanim zakręcimy śrubą, przesyłamy zdjęcia z podnośnika i jasną
            wycenę. Do tego auto zastępcze i elastyczny odbiór.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary Visual Tile: Photo Documentation from Lift (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[460px] bg-ink group shadow-soft">
            <img
              src={liftImg}
              onError={() =>
                setLiftImg(
                  "https://placehold.co/1100x750/18181B/F8F7F4?text=Zdjęcia+z+Podnośnika",
                )
              }
              alt="Inspekcja techniczna i dokumentacja zdjęciowa w Warsztacie SOFIA"
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

            <div className="relative h-full p-7 sm:p-9 flex flex-col justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-ink text-xs font-bold">
                  Zdjęcia &amp; Wideo na SMS
                </span>
                <span className="px-3 py-1 rounded-full bg-ink/70 backdrop-blur-md text-white text-xs font-medium border border-white/15">
                  Decydujesz Ty • Pełna transparentność
                </span>
              </div>

              <div className="max-w-lg space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                  Dowód na telefon przed każdą wymianą
                </h3>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                  Pokazujemy zużyty element na podnośniku w powiększeniu. Wiesz
                  dokładnie, dlaczego część kwalifikuje się do wymiany i ile to
                  kosztuje, zanim kiwnierzymy palcem.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stacked Bento Tiles (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tile 2: Replacement Car & Key Drop */}
            <div className="flex-1 rounded-[28px] bg-white p-7 sm:p-8 shadow-card border border-zinc-200/80 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="7.5" cy="15.5" r="4.5" />
                      <path d="m21 2-9.6 9.6" />
                      <path d="m15.5 7.5 3 3L22 7l-3-3" />
                    </svg>
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    Otware od 07:30
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                  Auto zastępcze i kluczyki do 22:00
                </h3>
                <p className="text-sm sm:text-[15px] text-slatebody leading-relaxed">
                  Przesiadasz się w czyste auto miejskie na czas naprawy. Nie
                  zdążysz przed 18:00? Odbierz kluczyki ze skrytkomatu na kod
                  SMS po opłaceniu faktury online.
                </p>
              </div>

              <MotionButton
                type="button"
                onClick={onBook}
                className="w-full py-3.5 px-5 rounded-xl bg-ink hover:bg-terracotta text-white font-semibold text-sm transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>Zarezerwuj termin z autem zastępczym</span>
                <span>→</span>
              </MotionButton>
            </div>

            {/* Tile 3: Clean Service Bay & Protection Visual */}
            <div className="relative rounded-[28px] overflow-hidden min-h-[195px] bg-oat border border-zinc-200/80 p-7 flex items-end group shadow-card">
              <img
                src={bayImg}
                onError={() =>
                  setBayImg(
                    "https://placehold.co/800x400/E85D2A/FFFFFF?text=Ochrona+Wnętrza",
                  )
                }
                alt="Ochrona wnętrza pojazdu w Warsztacie SOFIA"
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />

              <div className="relative max-w-sm space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                  Szacunek do Twojego auta
                </span>
                <h4 className="font-display font-bold text-lg text-ink">
                  Pokrowiec na fotel i kierownicę w standardzie
                </h4>
                <p className="text-xs sm:text-sm text-slatebody leading-relaxed">
                  Mechanik wchodzi do kabiny wyłącznie w zabezpieczeniach.
                  Oddajemy auto w takim stanie, w jakim je zostawiłeś.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
