import React, { useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ClientsPartnersSection } from './components/ClientsPartnersSection';
import { ContactSection } from './components/ContactSection';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MotionProvider } from './components/MotionPrimitives';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { ValueProposition } from './components/ValueProposition';
import { SERVICES } from './data/siteData';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>(
    SERVICES[0].title
  );
  const contactFormRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    window.setTimeout(() => {
      const nameInput = document.getElementById('contact-name');
      nameInput?.focus({ preventScroll: true });
    }, 500);
  };

  return (
    <MotionProvider>
      <div className="min-h-screen bg-white text-[#1F2A5C]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#1F2A5C] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar onGetQuoteClick={() => scrollToContact()} />

        <main id="main-content">
          <Hero onContactClick={() => scrollToContact()} />
          <AboutSection />
          <ValueProposition />
          <ServicesSection onEnquireService={(serviceTitle) => scrollToContact(serviceTitle)} />
          <TeamSection />
          <ClientsPartnersSection />
          <ContactSection
            preselectedService={preselectedService}
            contactFormRef={contactFormRef}
          />
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </MotionProvider>
  );
}
