import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Services from "./components/ServiceGrid";
import BrandTicker from "./components/BrandTicket";
import Contact from "./components/ContactFooter";
import TrustStats from "./components/TrustStats";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import ONas from './components/Onas'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustStats />
      <ONas/>
      <BrandTicker />
      <Services />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
