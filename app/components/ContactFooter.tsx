"use client";

import {
  Clock,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    issue: "",
  });

  // Calculate completion percentage dynamically to reward progress
  const completedFields = Object.values(formData).filter(
    (val) => val.trim().length > 0,
  ).length;
  const progressPercent = Math.round((completedFields / 4) * 100);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getFieldBorder = (val) =>
    val.trim().length > 0
      ? "border-green-500/80 focus:border-green-400"
      : "border-auto-border focus:border-auto-danger";

  return (
    <section
      id="kontakt"
      className="py-24 bg-auto-matte text-auto-text font-mono relative overflow-hidden transition-colors border-b-2 border-auto-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 border-b border-auto-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs text-auto-danger font-bold uppercase tracking-widest block mb-2">
              // SERWIS & DIAGNOSTYKA
            </span>
            <h2 className="font-subheading text-3xl sm:text-4xl font-black uppercase tracking-tight text-auto-heading">
              ZAREZERWUJ TERMIN WARSZTATOWY
            </h2>
          </div>
          <div className="text-xs text-auto-concrete max-w-xs">
            Średni czas odpowiedzi dyżurnego mechanika:{" "}
            <span className="text-green-500 font-bold">&lt; 60 minut</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Form Side - Diagnostic Ticket Design */}
          <div className="lg:col-span-7 bg-auto-panel border-2 border-auto-border p-6 sm:p-10 relative shadow-[10px_10px_0_rgba(0,0,0,0.15)] dark:shadow-[10px_10px_0_rgba(0,0,0,0.8)] transition-colors">
            {/* Form Top Bar Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-auto-border">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-auto-danger" />
                <span className="text-xs uppercase font-bold text-auto-heading tracking-wider">
                  PROTOKÓŁ ZGŁOSZENIOWY
                </span>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase text-auto-concrete">
                  Postęp:
                </span>
                <div className="w-24 h-2 bg-auto-matte border border-auto-border overflow-hidden rounded-full">
                  <div
                    className="h-full bg-auto-danger transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-auto-danger">
                  {progressPercent}%
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formSent ? (
                /* Interactive Success Ticket Screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 px-6 text-center bg-auto-matte border-2 border-green-500/40 space-y-6 relative overflow-hidden"
                >
                  <div className="w-16 h-16 bg-green-500/10 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-auto-concrete uppercase tracking-widest block mb-1">
                      KOD ZGŁOSZENIA: #REQ-
                      {Math.floor(1000 + Math.random() * 9000)}
                    </span>
                    <h3 className="text-2xl font-black text-auto-heading uppercase tracking-tight">
                      ZGŁOSZENIE ZOSTAŁO PRZYJĘTE!
                    </h3>
                  </div>

                  <p className="text-xs text-auto-concrete max-w-md mx-auto leading-relaxed">
                    Nasz doradca serwisowy analizuje opisaną usterkę. Oddzwonimy
                    na numer{" "}
                    <span className="text-auto-heading font-bold">
                      {formData.phone}
                    </span>{" "}
                    w celu potwierdzenia dogodnego terminu.
                  </p>

                  <div className="p-4 bg-auto-panel border border-auto-border text-left text-xs space-y-2">
                    <div className="text-auto-concrete uppercase text-[10px] tracking-wider">
                      Podsumowanie zgłoszenia:
                    </div>
                    <div className="text-auto-concrete">
                      <strong className="text-auto-heading">Pojazd:</strong>{" "}
                      {formData.car || "Nie podano"}
                    </div>
                    <div className="text-auto-concrete">
                      <strong className="text-auto-heading">Klient:</strong>{" "}
                      {formData.name || "Klient"}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: "", phone: "", car: "", issue: "" });
                    }}
                    className="text-xs text-auto-concrete underline hover:text-auto-heading transition-colors uppercase pt-2"
                  >
                    Wyślij kolejne zgłoszenie
                  </button>
                </motion.div>
              ) : (
                /* Active Form */
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase text-auto-concrete mb-2 font-bold">
                        1. Imię i Nazwisko *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Jan Kowalski"
                        className={`w-full bg-auto-matte border-2 px-4 py-3 text-sm text-auto-heading placeholder:text-auto-concrete/50 focus:outline-none transition-colors ${getFieldBorder(
                          formData.name,
                        )}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-auto-concrete mb-2 font-bold">
                        2. Telefon kontaktowy *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="500 000 000"
                        className={`w-full bg-auto-matte border-2 px-4 py-3 text-sm text-auto-heading placeholder:text-auto-concrete/50 focus:outline-none transition-colors ${getFieldBorder(
                          formData.phone,
                        )}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-auto-concrete mb-2 font-bold">
                      3. Pojazd (Marka, Model, Rok, Silnik) *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.car}
                      onChange={(e) => handleInputChange("car", e.target.value)}
                      placeholder="np. Ford Mondeo MK5 2018 2.0 TDCi (PowerShift)"
                      className={`w-full bg-auto-matte border-2 px-4 py-3 text-sm text-auto-heading placeholder:text-auto-concrete/50 focus:outline-none transition-colors ${getFieldBorder(
                        formData.car,
                      )}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-auto-concrete mb-2 font-bold">
                      4. Opis objawów / Zakres prac *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.issue}
                      onChange={(e) =>
                        handleInputChange("issue", e.target.value)
                      }
                      placeholder="Opisz niepokojące objawy (np. szarpanie przy zmianie biegów)..."
                      className={`w-full bg-auto-matte border-2 px-4 py-3 text-sm text-auto-heading placeholder:text-auto-concrete/50 focus:outline-none resize-none transition-colors ${getFieldBorder(
                        formData.issue,
                      )}`}
                    />
                  </div>

                  {/* Dynamic Action Button */}
                  <button
                    type="submit"
                    className="w-full bg-auto-danger hover:bg-red-700 text-white font-subheading text-sm font-black py-4 uppercase tracking-widest transition-all flex items-center justify-center gap-3 border-2 border-black/40 shadow-[4px_4px_0_rgba(0,0,0,0.3)] active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>ZATWIERDŹ ZGŁOSZENIE DO DIAGNOSTYKI</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-auto-concrete uppercase pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                    <span>
                      Bezpieczna transmisja danych · Gwarancja szybkiego
                      kontaktu
                    </span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Direct Details Side Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Call Card */}
            <div className="bg-auto-panel border-2 border-auto-border p-6 space-y-4 shadow-[10px_10px_0_rgba(0,0,0,0.15)] dark:shadow-[10px_10px_0_rgba(0,0,0,0.8)] transition-colors">
              <span className="text-[10px] text-auto-danger font-bold uppercase tracking-widest block">
                // SZYBKA ŚCIEŻKA
              </span>
              <h3 className="font-subheading text-xl font-bold text-auto-heading uppercase">
                WOLIMY ROZMAWIAĆ BEZPOŚREDNIO?
              </h3>
              <p className="text-xs text-auto-concrete leading-relaxed">
                Jeśli zależy Ci na natychmiastowej konsultacji usterki, zadzwoń
                bezpośrednio do mistrza serwisu.
              </p>
              <a
                href="tel:+48534762922"
                className="inline-flex items-center justify-center gap-3 w-full bg-auto-matte border-2 border-auto-border hover:border-auto-danger p-4 text-auto-heading font-bold text-sm tracking-wider uppercase transition-all"
              >
                <Phone className="w-4 h-4 text-auto-danger" />
                <span>+48 534 762 922</span>
              </a>
            </div>

            {/* Address & Hours Information */}
            <div className="bg-auto-panel border-2 border-auto-border p-6 space-y-4 text-xs shadow-[10px_10px_0_rgba(0,0,0,0.15)] dark:shadow-[10px_10px_0_rgba(0,0,0,0.8)] transition-colors">
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-3 border-b border-auto-border">
                  <MapPin className="w-5 h-5 text-auto-danger shrink-0 mt-0.5" />
                  <div>
                    <div className="text-auto-concrete text-[10px] uppercase font-bold">
                      Lokalizacja
                    </div>
                    <div className="text-auto-heading font-bold text-sm">
                      ul. Stawna 6, 62-064 Plewiska
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-3 border-b border-auto-border">
                  <Clock className="w-5 h-5 text-auto-danger shrink-0 mt-0.5" />
                  <div className="w-full space-y-1">
                    <div className="text-auto-concrete text-[10px] uppercase font-bold">
                      Godziny przyjęć pojazdów
                    </div>
                    <div className="flex justify-between text-auto-concrete">
                      <span>Poniedziałek – Piątek:</span>
                      <strong className="text-auto-heading">
                        09:00 – 18:00
                      </strong>
                    </div>
                    <div className="flex justify-between text-auto-concrete">
                      <span>Sobota:</span>
                      <strong className="text-auto-heading">09:00 - 14:00</strong>
                    </div>
                    <div className="flex justify-between text-auto-concrete">
                      <span>Niedziela:</span>
                      <strong className="text-auto-danger">Zamknięte</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Capability Tag */}
              <div className="bg-auto-matte p-4 border border-auto-border text-[10px] text-auto-concrete space-y-1">
                <div className="text-auto-heading font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-auto-danger" />
                  <span>Autoryzacja i Diagnostyka</span>
                </div>
                <p>
                  Dysponujemy stanowiskami diagnostyki komputerowej skrzyń
                  automatycznych, geometrii 3D oraz urządzeniami do płukania
                  układów chłodzenia i klimatyzacji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
