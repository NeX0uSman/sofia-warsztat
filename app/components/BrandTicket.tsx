'use client';

const BRANDS = [
  'VOLKSWAGEN',
  'ŠKODA',
  'AUDI',
  'SEAT',
  'RENAULT',
  'DACIA',
  'CITROËN',
  'PEUGEOT',
  'BMW',
  'MERCEDES-BENZ',
];

const TRACK_BRANDS = [...BRANDS, ...BRANDS];

export default function BrandTicker() {
  return (
    <section id="specjalizacja" className="w-full min-w-0 max-w-full overflow-x-clip bg-auto-matte py-12">
      <div className="mx-auto w-full max-w-[1400px] overflow-x-clip border-y-2 border-auto-border bg-auto-panel py-8">
        <div className="mb-4 px-6 text-center">
          <span className="text-xs text-auto-danger font-mono font-bold uppercase tracking-widest">
            / OBSŁUGIWANE MARKI I SPECJALIZACJA
          </span>
        </div>

        <div className="relative w-full min-w-0 overflow-x-clip touch-pan-y [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="pointer-events-none flex w-max animate-[ticker_25s_linear_infinite] items-center will-change-transform">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={group === 1}>
                {TRACK_BRANDS.map((brand, index) => (
                  <div key={`${brand}-${index}`} className="flex shrink-0 items-center gap-8">
                    <span className="font-[var(--font-subheading)] text-xl sm:text-2xl font-black tracking-wider text-[var(--color-auto-concrete)] uppercase hover:text-[var(--color-auto-danger)] transition-colors cursor-default">
                      {brand}
                    </span>
                    <span className="text-[var(--color-auto-danger)] font-mono text-sm font-bold">{'///'}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Keyframes Rule to guarantee smooth looping */}
      <style jsx global>{`
        @keyframes ticker {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  );
}