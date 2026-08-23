"use client";
import RenomaLogo from "./Logo";
import { MapPin, Phone, Mail, ArrowUp, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-auto-panel text-auto-text border-t-4 border-auto-danger transition-colors font-mono">
      {/* Top Footer Banner */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 border-b border-auto-border grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <RenomaLogo />
          <p className="text-xs text-auto-concrete max-w-xl mt-4 leading-relaxed">
            Niezależny warsztat samochodowy z autoryzacją Motrio. Świadczymy usługi z zakresu mechaniki ogólnej, diagnostyki komputerowej i serwisu eksploatacyjnego dla kierowców z Plewisk, Poznań-Junikowo i Komornik.
          </p>
        </div>
        <div className="md:col-span-4 flex md:justify-end">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-auto-matte border border-auto-border px-4 py-3 text-xs uppercase text-auto-heading hover:border-auto-danger transition-colors"
          >
            <span>Do góry</span>
            <ArrowUp className="w-4 h-4 text-auto-danger" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs"
      >
        {/* Col 1 */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-auto-heading tracking-widest">
            // KONTAKT
          </div>
          <div className="space-y-3 text-auto-concrete">
            <a href="tel:+48509664358" className="flex items-center gap-3 hover:text-auto-danger transition-colors">
              <Phone className="w-4 h-4 text-auto-danger" />
              <span className="font-bold text-auto-heading">+48 509 664 358</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-auto-danger shrink-0 mt-0.5" />
              <span>ul. Szkolna 90<br />62-064 Plewiska</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-auto-danger" />
              <span>kontakt@renomacar.pl</span>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-auto-heading tracking-widest">
            // NAWIGACJA
          </div>
          <ul className="space-y-2 text-auto-concrete">
            {["Usługi", "Specjalizacja", "O Nas", "Opinie", "Kontakt"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-auto-danger transition-colors">
                  &gt; {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-auto-heading tracking-widest">
            // GODZINY OTWARCIA
          </div>
          <div className="space-y-2 text-auto-concrete">
            <div className="flex justify-between border-b border-auto-border/40 pb-1">
              <span>Poniedziałek – Piątek:</span>
              <span className="text-auto-heading font-bold">08:00 – 17:00</span>
            </div>
            <div className="flex justify-between border-b border-auto-border/40 pb-1">
              <span>Sobota:</span>
              <span className="text-auto-heading font-bold">09:00 – 14:00</span>
            </div>
            <div className="flex justify-between">
              <span>Niedziela:</span>
              <span className="text-auto-danger">Zamknięte</span>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <div className="space-y-4">
          <div className="font-subheading text-sm font-black uppercase text-auto-heading tracking-widest">
            // DOJAZD
          </div>
          <p className="text-auto-concrete">
            Znajdujemy się w sercu Plewisk przy ul. Szkolnej. Łatwy dojazd z Junikowa i Ławicy.
          </p>
          <a
            href="https://maps.google.com/?q=ul.+Szkolna+90,+62-064+Plewiska"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-auto-matte border border-auto-border py-3 text-auto-heading hover:border-auto-danger transition-colors text-xs font-bold uppercase tracking-wider"
          >
            <Navigation className="w-4 h-4 text-auto-danger" />
            <span>Otwórz w Google Maps</span>
          </a>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-auto-matte py-6 border-t border-auto-border text-center text-[10px] text-auto-concrete uppercase tracking-widest">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} RENOMA CAR MOTRIO PLEWISKA. WSZELKIE PRAWA ZASTRZEŻONE.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-auto-danger transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-auto-danger transition-colors">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
}