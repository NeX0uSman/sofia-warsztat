"use client";

import Logo from "./Logo";
import { MapPin, Phone, Mail, ArrowUp, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 text-zinc-300 border-t-4 border-auto-danger font-mono transition-colors overflow-hidden">
      {/* Fitted Watermark (Fully fits inside screen) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden px-4">
        <span className="font-heading text-[10vw] font-black tracking-tight text-white whitespace-nowrap">
          EUROPEJCZYK
        </span>
      </div>

      {/* Top Banner */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-10 border-b border-zinc-800 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <div className="dark">
            <Logo />
          </div>
          <p className="text-xs text-zinc-400 max-w-xl mt-4 leading-relaxed">
            Niezależny, profesjonalny warsztat samochodowy z 20-letnim
            doświadczeniem. Specjalizacja: naprawy skrzyń biegów (DSG,
            PowerShift, AT), remonty silników i mechanika pojazdowa dla
            kierowców z Plewisk, Poznań-Junikowa i Komornik.
          </p>
        </div>
        <div className="md:col-span-4 flex md:justify-end">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-zinc-900 border-2 border-zinc-700 hover:border-auto-danger px-5 py-3 text-xs uppercase text-white transition-all shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
          >
            <span>Do góry</span>
            <ArrowUp className="w-4 h-4 text-auto-danger" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs"
      >
        {/* Col 1: Contact */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-white tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-auto-danger inline-block" />
            <span>KONTAKT</span>
          </div>
          <div className="space-y-3 text-zinc-400">
            <a
              href="tel:+48534762922"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-auto-danger shrink-0" />
              <span className="font-bold text-white text-sm">
                +48 534 762 922
              </span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-auto-danger shrink-0 mt-0.5" />
              <span>
                ul. Stawna 6<br />
                62-064 Plewiska
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-auto-danger shrink-0" />
              <span>kontakt@europejczyk.pl</span>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-white tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-auto-danger inline-block" />
            <span>NAWIGACJA</span>
          </div>
          <ul className="space-y-2 text-zinc-400">
            {[
              { label: "O Nas", href: "#o-nas" },
              { label: "Opinie", href: "#opinie" },
              { label: "Usługi", href: "#uslugi" },
              { label: "Kontakt", href: "#kontakt" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-auto-danger transition-colors"
                >
                  &gt; {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Hours */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-white tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-auto-danger inline-block" />
            <span>GODZINY OTWARCIA</span>
          </div>
          <div className="space-y-2 text-zinc-400">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>Poniedziałek – Piątek:</span>
              <span className="text-white font-bold">09:00 – 18:00</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span>Sobota:</span>
              <span className="text-white font-bold">09:00 - 14:00</span>
            </div>
            <div className="flex justify-between">
              <span>Niedziela:</span>
              <span className="text-auto-danger font-bold">Zamknięte</span>
            </div>
          </div>
        </div>

        {/* Col 4: Location */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-white tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-auto-danger inline-block" />
            <span>DOJAZD</span>
          </div>
          <p className="text-zinc-400">
            Siedziba warsztatu znajduje się przy ul. Stawnej 6 w Plewiskach k.
            Poznania.
          </p>
          <a
            href="https://maps.app.goo.gl/68UxWkvWK7KcYERdA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-zinc-900 border-2 border-zinc-700 hover:border-auto-danger py-3 text-white transition-all text-xs font-bold uppercase tracking-wider"
          >
            <Navigation className="w-4 h-4 text-auto-danger" />
            <span>Google Maps</span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Legal Bar */}
      <div className="relative z-10 bg-black py-6 border-t border-zinc-800 text-center text-[10px] text-zinc-500 uppercase tracking-widest">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} EUROPEJCZYK AUTO SERWIS PLEWISKA.
            WSZELKIE PRAWA ZASTRZEŻONE.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Polityka Prywatności
            </a>
            <a href="#" className="hover:text-white transition-colors">
              RODO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
