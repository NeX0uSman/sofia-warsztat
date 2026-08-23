"use client";
import { Clock, Phone, MapPin, Target, Send, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);

  return (
    <section id="kontakt" className="py-24 bg-auto-matte text-auto-text transition-colors">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Asymmetrical Layout for Trust/Form */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Side - Checklist Style */}
          <div className="lg:col-span-7 bg-auto-panel border-4 border-auto-border shadow-[8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.8)] p-10 relative backdrop-blur-md">
            {/* Brands Panel integrated cleanly */}
            <div className="absolute -top-3 -left-3 bg-auto-heading text-auto-matte font-subheading text-[10px] font-black px-4 py-1 uppercase tracking-widest z-10 border border-auto-border">
              SPECJALIZACJA TECHNICZNA
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest">
                  / Zgłoszenie naprawy
                </span>
                <h2 className="font-subheading text-3xl font-black uppercase tracking-tight text-auto-heading mt-1 mb-4">
                  FORMULARZ WIZYTY
                </h2>
                <p className="text-auto-concrete text-sm max-w-sm">
                  Zostaw numer. Wstępna diagnoza i termin w ciągu 60 minut.
                </p>
              </div>
            </div>

            {formSent ? (
              <div className="text-center py-12 bg-auto-matte/50 border border-green-800/50 space-y-3">
                <Check className="w-10 h-10 text-green-500 mx-auto" />
                <div className="font-heading text-xl font-bold uppercase text-auto-heading">
                  Zgłoszenie otrzymane!
                </div>
                <p className="text-xs font-mono text-auto-concrete">
                  Oddzwonimy najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSent(true);
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block font-mono text-xs uppercase text-auto-concrete mb-2">
                    Imię / Nazwisko
                  </label>
                  <input
                    type="text"
                    placeholder="Jan Kowalski"
                    className="w-full bg-auto-input border border-auto-border px-4 py-3 text-sm text-auto-text focus:outline-none focus:border-auto-danger font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase text-auto-concrete mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="500 000 000"
                    className="w-full bg-auto-input border border-auto-border px-4 py-3 text-sm text-auto-text focus:outline-none focus:border-auto-danger font-mono transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs uppercase text-auto-concrete mb-2">
                    Marka, Model i Rok
                  </label>
                  <input
                    type="text"
                    placeholder="np. Renault Megane 2017 1.5 dCi"
                    className="w-full bg-auto-input border border-auto-border px-4 py-3 text-sm text-auto-text focus:outline-none focus:border-auto-danger font-mono transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs uppercase text-auto-concrete mb-2">
                    Opis Usterki / Zlecenie
                  </label>
                  <textarea
                    rows={4}
                    placeholder="np. Wymiana rozrządu, stuki w zawieszeniu z przodu..."
                    className="w-full bg-auto-input border border-auto-border px-4 py-3 text-sm text-auto-text focus:outline-none focus:border-auto-danger font-mono resize-none transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 bg-auto-danger hover:opacity-90 text-white font-subheading text-sm font-bold py-4 uppercase tracking-widest transition-opacity flex items-center justify-center gap-2 group border-4 border-black/10 dark:border-black/30"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>WYŚLIJ ZGŁOSZENIE</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details side */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest">
                / Lokalizacja
              </span>
              <h2 className="font-subheading text-3xl font-black uppercase tracking-tight text-auto-heading mt-1 mb-4">
                SERWIS PLEWISKA
              </h2>
            </div>

            <div className="space-y-6 font-mono text-sm border-t border-auto-border pt-8">
              {[
                {
                  icon: MapPin,
                  title: "Adres Warsztatu",
                  val: "ul. Szkolna 90, 62-064 Plewiska",
                },
                {
                  icon: Phone,
                  title: "Telefon Direct",
                  val: "509 664 358",
                  href: "tel:+48509664358",
                },
                {
                  icon: Target,
                  title: "Godziny Pracy",
                  val: "Pn - Pt: 08:00 – 17:00",
                },
                { icon: Clock, title: "Sobota", val: "Sobota: 09:00 – 14:00" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-auto-danger shrink-0 mt-0.5" />
                    <div>
                      <div className="text-auto-concrete text-xs uppercase leading-tight">
                        {item.title}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-auto-heading font-bold hover:text-auto-danger transition-colors"
                        >
                          {item.val}
                        </a>
                      ) : (
                        <div className="text-auto-heading font-bold">{item.val}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ticker Tape style Footer */}
            <div className="bg-auto-danger/10 text-auto-danger font-mono text-[10px] font-bold p-4 border border-auto-danger/30 text-center uppercase tracking-wider">
              DIAGNOSTYKA KOMPUTEROWA · REMONTY SILNIKÓW · SERWIS KLIMATYZACJI ·
              PLEWISKA UL. SZKOLNA 90 · TEL. 509 664 358 · MOTRIO PARTNER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}