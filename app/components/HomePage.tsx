"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import BookingModal, { type BookingMode } from "./hero-section/BookingModal";
import ToastNotification from "./hero-section/ToastNotification";
import { SYSTEMS_DATA, type SystemKey } from "./hero-section/data";
import ComfortLoungeSection from "./comfort-lounge-section/comfortLoungeSection";
import FooterSection from "./footer/footer";
import SofiaHero from "./HeroSection";
import HowWeWorkSection from "./home-work/homeWorkSection";
import NavigationBar from "./hero-section/NavigationBar";
import ReviewsAndFaqSection from "./review-and-faq/ReviewAndFaqSection";
import ServicesCatalogSection from "./services-catalog-section/ServicesCatalogSection";
import SocialVideosSection from "./videos-socials/Videos";
import ScrollReveal from "./ScrollReveal";

export default function HomePage() {
  const [activeSystem, setActiveSystem] = useState<SystemKey>("engine");
  const [modalMode, setModalMode] = useState<BookingMode | null>(null);
  const [selectedService, setSelectedService] = useState(
    SYSTEMS_DATA.engine.selectOption,
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMessage(null), 3200);
  };

  const openBooking = (
    mode: BookingMode,
    service = SYSTEMS_DATA[activeSystem].selectOption,
  ) => {
    setSelectedService(service);
    setModalMode(mode);
  };

  const copyPhone = async () => {
    const phone = "+48 698 744 738";
    try {
      await navigator.clipboard.writeText(phone);
      showToast(`Skopiowano numer: ${phone}`);
    } catch {
      showToast(`Telefon: ${phone}`);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalMode(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModalMode(null);
    showToast("Dziękujemy! Doradca SOFIA oddzwoni w ciągu 15 minut.");
    event.currentTarget.reset();
  };

  return (
    <>
      <NavigationBar
        onSelectSystem={setActiveSystem}
        onCopyPhone={copyPhone}
        onBook={() => openBooking("book")}
      />
      <main>
        <ScrollReveal>
          <SofiaHero
            activeSystem={activeSystem}
            onSelectSystem={setActiveSystem}
            onOpenBooking={openBooking}
          />
        </ScrollReveal>
        <ScrollReveal>
          <HowWeWorkSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesCatalogSection
            onSelectService={(service) => openBooking("book", service)}
          />
        </ScrollReveal>
        <ScrollReveal>
          <ComfortLoungeSection onBook={() => openBooking("book")} />
        </ScrollReveal>
        <ScrollReveal>
          <SocialVideosSection />
        </ScrollReveal>
        <ScrollReveal>
          <ReviewsAndFaqSection />
        </ScrollReveal>
        <ScrollReveal>
          <FooterSection
            onBook={() => openBooking("book")}
            onQuote={() => openBooking("quote")}
            onCopyPhone={copyPhone}
          />
        </ScrollReveal>
      </main>
      {modalMode && (
        <BookingModal
          mode={modalMode}
          selectedService={selectedService}
          onSelectedServiceChange={setSelectedService}
          onClose={() => setModalMode(null)}
          onSubmit={handleFormSubmit}
        />
      )}
      <ToastNotification message={toastMessage} />
    </>
  );
}
