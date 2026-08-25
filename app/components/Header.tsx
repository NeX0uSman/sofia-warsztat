'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sun, Moon, X } from 'lucide-react';
import EuropejczykLogo from './Logo';

const NAV_LINKS = [
  { name: 'Usługi', href: '#uslugi' },
  { name: 'Specjalizacja', href: '#specjalizacja' },
  { name: 'O Nas', href: '#o-nas' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const darkState = savedTheme === 'dark';
      setIsDark(darkState);
      document.documentElement.classList.toggle('dark', darkState);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <header className="dark sticky top-0 z-50 backdrop-blur-md bg-zinc-950/90 border-b-2 border-auto-border transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-1 sm:py-2' : 'py-2 sm:py-3'
        }`}
      >
        <a href="#" className="flex items-center transition-transform duration-300 origin-left">
          <div className="scale-75 sm:scale-90 origin-left">
            <EuropejczykLogo />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-auto-concrete">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-auto-danger transition-colors">
              / {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-auto-input border border-auto-border text-auto-text hover:opacity-80 transition-opacity"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-auto-heading" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-auto-heading" />}
            </button>
          )}

          <a
            href="tel:+48534762922"
            className="hidden sm:flex items-center gap-2 bg-auto-danger text-white font-subheading text-xs font-bold px-4 py-2 uppercase tracking-wider shadow-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>534 762 922</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 bg-auto-input border border-auto-border text-auto-text focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current block origin-center transition-transform"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current block transition-opacity"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current block origin-center transition-transform"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay with Top Logo Header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-[100dvh] bg-auto-matte z-50 lg:hidden flex flex-col justify-between border-b-4 border-auto-danger overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="p-4 flex items-center justify-between border-b border-auto-border bg-auto-panel">
              <div className="scale-75 origin-left">
                <EuropejczykLogo />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-auto-input border border-auto-border text-auto-heading"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4 font-subheading text-xl font-black uppercase tracking-wider px-6 py-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="flex items-center gap-3 text-auto-heading hover:text-auto-danger transition-colors border-b border-auto-border pb-2.5"
                >
                  <span className="text-xs font-mono text-auto-danger">0{idx + 1}.</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer inside Menu */}
            <div className="space-y-3 px-6 pb-6 pt-2 mt-auto">
              <a
                href="tel:+48534762922"
                className="w-full flex items-center justify-center gap-2 bg-auto-danger text-white font-subheading text-sm font-bold py-3 uppercase tracking-widest"
              >
                <Phone className="w-4 h-4" />
                <span>ZADZWONIŃ: 534 762 922</span>
              </a>
              
              <div className="text-center font-mono text-[11px] text-auto-concrete">
                Stawna 6A, 62-064 Plewiska
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
