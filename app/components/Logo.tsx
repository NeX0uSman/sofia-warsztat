export default function RenomaLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <span className="font-[var(--font-heading)] text-2xl font-normal tracking-tight text-auto-heading lowercase">
        ren
      </span>

      <div className="w-8 h-8 rounded-full bg-[var(--color-auto-danger)] flex items-center justify-center border border-white/20 shadow-md">
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-white stroke-current stroke-[8] fill-none">
          <line x1="25" y1="25" x2="25" y2="75" />
          <line x1="50" y1="25" x2="50" y2="75" />
          <line x1="75" y1="25" x2="75" y2="75" />
          <line x1="25" y1="50" x2="75" y2="50" />
          <text x="25" y="18" textAnchor="middle" fill="white" stroke="none" className="text-[18px] font-mono font-black">1</text>
          <text x="50" y="18" textAnchor="middle" fill="white" stroke="none" className="text-[18px] font-mono font-black">3</text>
          <text x="75" y="18" textAnchor="middle" fill="white" stroke="none" className="text-[18px] font-mono font-black">5</text>
          <text x="25" y="92" textAnchor="middle" fill="white" stroke="none" className="text-[18px] font-mono font-black">2</text>
          <text x="50" y="92" textAnchor="middle" fill="white" stroke="none" className="text-[18px] font-mono font-black">4</text>
          <text x="75" y="92" textAnchor="middle" fill="white" stroke="none" className="text-[18px] font-mono font-black">R</text>
        </svg>
      </div>

      <span className="font-[var(--font-heading)] text-2xl font-normal tracking-tight text-auto-heading lowercase">
        ma
      </span>

      <span className="font-[var(--font-subheading)] text-2xl font-black italic text-[var(--color-auto-danger)] -rotate-6 ml-0.5 tracking-wider uppercase">
        CAR
      </span>
    </div>
  );
}