import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { EASE_SETTLE, ScrollProgressBar } from './MotionPrimitives';

interface NavbarProps {
  onGetQuoteClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Clients & Partners', href: '#clients-partners', sectionId: 'clients-partners' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onGetQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollOffset = window.scrollY + 140;
      let current = 'home';
      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.sectionId);
        if (el && el.offsetTop <= scrollOffset) {
          current = item.sectionId;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-200 ${
        isScrolled
          ? 'border-[#DBDAD7] bg-[#FAF9F7]/95 backdrop-blur-md shadow-xs'
          : 'border-[#DBDAD7]/70 bg-[#FAF9F7]/90 backdrop-blur-xs'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B5455] whitespace-nowrap shrink-0"
        >
          <BrandLogo compact />
        </a>

        {/* Zone 2: Single-line Navigation Links with animated active underline */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5A5B62]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B5455] ${
                  isActive
                    ? 'font-bold text-[#202124]'
                    : 'hover:text-[#202124]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ duration: 0.25, ease: EASE_SETTLE }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#7B5455]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            type="button"
            onClick={onGetQuoteClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#7B5455] px-4.5 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#654344] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            Get a Quote
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#DBDAD7] text-[#202124] transition-colors hover:bg-[#EFEEEB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_SETTLE }}
            className="border-t border-[#DBDAD7] bg-[#FAF9F7] px-4 pb-5 pt-3 shadow-md lg:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] ${
                      isActive
                        ? 'bg-[#EFEEEB] font-bold text-[#7B5455]'
                        : 'text-[#202124] hover:bg-[#EFEEEB]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetQuoteClick();
                }}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#7B5455] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#654344] cursor-pointer shadow-xs"
              >
                Get a Quote
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
