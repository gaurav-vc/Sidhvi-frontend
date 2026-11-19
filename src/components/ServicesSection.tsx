import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Car,
  Cctv,
  Check,
  Fingerprint,
  Home,
  Monitor,
  Network,
  PhoneCall,
  Radio,
  Server,
  ShieldCheck,
  Video,
  Wrench,
  X,
} from 'lucide-react';
import {
  SERVICE_HIGHLIGHTS,
  SERVICES,
  ServiceItem,
  WHO_WE_SERVE,
} from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { EASE_SETTLE, Reveal, StaggerContainer, StaggerItem } from './MotionPrimitives';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
}

type FilterKey = 'all' | 'security' | 'ict' | 'infrastructure';

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Solutions' },
  { key: 'security', label: 'Security & Access' },
  { key: 'ict', label: 'ICT & Connectivity' },
  { key: 'infrastructure', label: 'Displays, IBMS & Support' },
];

const ICON_MAP: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  Cctv,
  ShieldCheck,
  PhoneCall,
  Video,
  Network,
  Server,
  Car,
  Radio,
  Monitor,
  Building2,
  Wrench,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onEnquireService,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeFilter);

  const openServiceById = (serviceId: string) => {
    const match = SERVICES.find((s) => s.id === serviceId);
    if (match) {
      setSelectedService(match);
    }
  };

  return (
    <section id="services" className="bg-[#FAF9F7] py-16 sm:py-20 lg:py-24 border-b border-[#DBDAD7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Sliding Filter Bar */}
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#7B5455] uppercase">
              <span className="h-1.5 w-6 rounded-full bg-[#F4C2C2]" />
              Products &amp; Services
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance]">
              Integrated Technology &amp; Security Portfolio
            </h2>
            <p className="mt-3 text-base text-[#5A5B62]">{WHO_WE_SERVE}</p>
          </div>

          <div
            role="tablist"
            aria-label="Filter services by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl bg-[#EFEEEB] p-1.5 border border-[#DBDAD7] self-start lg:self-auto shadow-2xs"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`relative rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#5A5B62] hover:text-[#202124]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="serviceFilterActiveTab"
                      transition={{ duration: 0.25, ease: EASE_SETTLE }}
                      className="absolute inset-0 rounded-lg bg-[#7B5455] shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tagline Highlights: Biometric Solutions & Home & Office Automation */}
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICE_HIGHLIGHTS.map((highlight, idx) => (
            <StaggerItem key={highlight.id} y={14}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
                className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-[#DBDAD7] bg-[#EFEEEB] p-5.5 transition-all hover:border-[#7B5455]/40 hover:shadow-xs sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#DBDAD7] text-[#7B5455] shadow-2xs">
                    {idx === 0 ? (
                      <Fingerprint className="h-5 w-5 text-[#7B5455]" aria-hidden="true" />
                    ) : (
                      <Home className="h-5 w-5 text-[#7B5455]" aria-hidden="true" />
                    )}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#202124]">{highlight.title}</h3>
                    <p className="mt-1 text-sm text-[#5A5B62]">{highlight.description}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openServiceById(highlight.targetServiceId)}
                  className="inline-flex items-center gap-1.5 self-start text-xs font-bold text-[#7B5455] hover:text-[#202124] transition-colors whitespace-nowrap shrink-0 sm:self-center cursor-pointer"
                >
                  {highlight.targetLabel}
                  <ArrowRight className="h-3.5 w-3.5 text-[#7B5455]" aria-hidden="true" />
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 3-Column Animated Services Card Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = ICON_MAP[service.iconName];
              const visibleOfferings = service.offerings.slice(0, 5);
              const remainingCount = service.offerings.length - visibleOfferings.length;

              return (
                <motion.article
                  key={service.id}
                  id={`service-${service.id}`}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.035, 0.25),
                    ease: EASE_SETTLE,
                  }}
                  className="group flex flex-col justify-between rounded-2xl border border-[#DBDAD7] bg-white transition-all duration-200 hover:border-[#7B5455] hover:shadow-[0_12px_32px_rgba(123,84,85,0.12)]"
                >
                  <div>
                    <div className="p-3 pb-0">
                      <ImagePlaceholder
                        src={service.image}
                        alt={`${service.title} — Sidhvi Tech Solutions`}
                        label={service.imagePlaceholderLabel}
                        aspectClass="aspect-[16/9]"
                        theme="light"
                        icon={
                          service.category === 'security'
                            ? 'camera'
                            : service.category === 'ict'
                              ? 'network'
                              : 'building'
                        }
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFEEEB] text-[#7B5455] transition-colors duration-200 group-hover:bg-[#7B5455] group-hover:text-white shadow-2xs">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-bold text-[#202124]">{service.title}</h3>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[#5A5B62]">
                        {service.shortSummary}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-[#E9E8E5] pt-4">
                        {visibleOfferings.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-[#36373B]"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#7B5455]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                        {remainingCount > 0 && (
                          <li className="pl-6 text-xs font-semibold text-[#7B5455]">
                            + {remainingCount} more offerings in detail view
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E9E8E5] px-6 py-4 bg-[#FAF9F7]/60 rounded-b-2xl">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-[#5A5B62] hover:text-[#7B5455] underline-offset-4 hover:underline cursor-pointer"
                    >
                      View Full Details
                    </button>

                    <button
                      type="button"
                      onClick={() => onEnquireService(service.title)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7B5455] hover:text-[#202124] transition-colors cursor-pointer"
                    >
                      Enquire
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 text-[#7B5455]"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Animated Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#202124]/75 p-4 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: EASE_SETTLE }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#DBDAD7] bg-[#FAF9F7] p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#7B5455] uppercase">
                    Service Specifications
                  </span>
                  <h3
                    id="service-modal-title"
                    className="mt-1 text-2xl font-extrabold text-[#202124]"
                  >
                    {selectedService.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close service details"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#DBDAD7] text-[#5A5B62] hover:bg-[#EFEEEB] hover:text-[#202124] cursor-pointer"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-5">
                <ImagePlaceholder
                  src={selectedService.image}
                  alt={`${selectedService.title} detailed visual`}
                  label={selectedService.imagePlaceholderLabel}
                  aspectClass="aspect-[16/9]"
                  theme="light"
                />
              </div>

              <p className="mt-5 text-base leading-relaxed text-[#5A5B62]">
                {selectedService.shortSummary}
              </p>

              {selectedService.relatedTaglineHighlight && (
                <p className="mt-3 text-xs font-bold text-[#7B5455] bg-[#F4C2C2]/20 inline-block px-3 py-1 rounded-full border border-[#F4C2C2]/40">
                  Related Capability: {selectedService.relatedTaglineHighlight}
                </p>
              )}

              <div className="mt-6 border-t border-[#DBDAD7] pt-5">
                <h4 className="text-sm font-extrabold text-[#202124]">
                  Complete Offerings Included
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {selectedService.offerings.map((offering) => (
                    <li
                      key={offering}
                      className="flex items-start gap-2 rounded-xl border border-[#DBDAD7] bg-white px-3.5 py-2.5 text-sm font-medium text-[#202124]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#7B5455]"
                        aria-hidden="true"
                      />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-[#DBDAD7] pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="rounded-xl border border-[#DBDAD7] px-4.5 py-2.5 text-sm font-bold text-[#5A5B62] hover:bg-[#EFEEEB] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onEnquireService(title);
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7B5455] px-5.5 py-2.5 text-sm font-bold text-white hover:bg-[#654344] shadow-xs cursor-pointer"
                >
                  Enquire About {selectedService.title}
                  <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
