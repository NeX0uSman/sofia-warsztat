import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { MotionButton, MotionLink } from "../MotionInteractive";
import type { SystemKey } from "./data";
import Image from "next/image";
import logo from '@/public/logo-sofia-nav.png'
type NavigationBarProps = {
  onSelectSystem: (system: SystemKey) => void;
  onCopyPhone: () => void;
  onBook: () => void;
};

export default function NavigationBar({
  onSelectSystem,
  onCopyPhone,
  onBook,
}: NavigationBarProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const wasScrolled = useRef(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextIsScrolled = latest > 32;
    if (wasScrolled.current !== nextIsScrolled) {
      wasScrolled.current = nextIsScrolled;
      setIsScrolled(nextIsScrolled);
    }
  });

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-30 pt-3.5 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        animate={{ height: isScrolled ? 50 : 56 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-float px-3 sm:px-5 flex items-center justify-between gap-3 sm:gap-4"
      >
        {/* Brand Identity */}
        <MotionLink href="#" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
          <div className="w-8 h-8 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-colors">
            <Image src={logo} alt="logo" className="rounded-lg"/>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-base tracking-tight text-ink">
              SOFIA
            </span>
            <span className="hidden sm:inline-block text-[11px] font-medium text-slatebody border-l border-zinc-200 pl-1.5">
              Serwis &amp; Diagnostyka
            </span>
          </div>
        </MotionLink>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slatebody">
          <MotionLink
            href="#uslugi"
            onClick={() => onSelectSystem("engine")}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Zakres usług
          </MotionLink>
          <MotionLink
            href="#uslugi"
            onClick={() => onSelectSystem("obd")}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Diagnostyka
          </MotionLink>
          <MotionLink
            href="#jak-pracujemy"
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Jak pracujemy
          </MotionLink>
          <MotionLink
            href="#kontakt"
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Kontakt
          </MotionLink>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">

          <MotionButton
            type="button"
            onClick={onCopyPhone}
            title="Kliknij, aby skopiować numer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-oat text-ink text-[13px] font-semibold transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 text-terracotta"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>698 744 738</span>
          </MotionButton>

          <MotionButton
            type="button"
            onClick={() => onBook()}
            aria-label="Umów wizytę online"
            className="px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-terracotta hover:bg-terracottaHover text-white font-semibold text-[12px] sm:text-[13px] transition-all shadow-xs cursor-pointer"
          >
            <span className="sm:hidden">Umów</span>
            <span className="hidden sm:inline">Umów wizytę</span>
          </MotionButton>
        </div>
      </motion.div>
    </motion.header>
  );
}
