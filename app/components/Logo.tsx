export default function EuropejczykLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Emblem / Badge */}
      <div className="relative w-9 h-9 rounded-lg bg-[var(--color-auto-danger)] flex items-center justify-center border border-white/30 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
        {/* Shield & Star Vector */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-white fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
        >
          {/* Outer Shield Contour */}
          <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
          {/* Center EU Style Star */}
          <polygon
            points="12 7 13.5 10 17 10.5 14.5 13 15 16.5 12 15 9 16.5 9.5 13 7 10.5 10.5 10 12 7"
            className="fill-white stroke-none"
          />
        </svg>

        {/* Electric Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-[var(--color-auto-danger)] blur-sm opacity-40 -z-10 group-hover:opacity-70 transition-opacity" />
      </div>

      {/* Typography Block */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline">
          <span className="font-[var(--font-subheading)] text-2xl font-black uppercase tracking-tight text-auto-heading">
            EUROPEJ
          </span>
          <span className="font-[var(--font-subheading)] text-2xl font-black uppercase tracking-tight text-[var(--color-auto-danger)] underline decoration-2 underline-offset-4">
            CZYK
          </span>
        </div>

        <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-auto-concrete uppercase mt-0.5">
          AUTO SERWIS
        </span>
      </div>
    </div>
  );
}