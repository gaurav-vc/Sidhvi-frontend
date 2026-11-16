import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Building } from 'lucide-react';
import { CLIENTS, PARTNERS } from '../data/siteData';
import { Reveal, StaggerContainer, StaggerItem } from './MotionPrimitives';

export const ClientsPartnersSection: React.FC = () => {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  return (
    <section id="clients-partners" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clients Header */}
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#1FADE4] uppercase">
              Trusted Relationships
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2A5C] sm:text-4xl [text-wrap:balance]">
              Few of Our Clients
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Serving organisations across real estate, retail, telecom, finance, shipping,
              and automotive sectors.
            </p>
          </div>
          <p className="text-xs font-medium text-slate-500">
            Hover any logo tile to preview colour state
          </p>
        </Reveal>

        {/* Subtle Auto-Scroll Marquee Strip */}
        <Reveal delay={0.08}>
          <div
            className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-[#F6F8FB] py-3.5"
            aria-label="Client showcase marquee"
          >
            <div className="animate-marquee items-center gap-8 px-4">
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-slate-500 transition-colors hover:text-[#1F2A5C]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-slate-300"
                  />
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Client Logo Placeholder Grid (Greyscale -> Colour on Hover + Stagger) */}
        <StaggerContainer
          staggerDelay={0.03}
          className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {CLIENTS.map((client) => {
            const isHovered = hoveredClient === client.name;
            return (
              <StaggerItem key={client.name} y={14}>
                <motion.div
                  onMouseEnter={() => setHoveredClient(client.name)}
                  onMouseLeave={() => setHoveredClient(null)}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="group flex min-h-[96px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center transition-all duration-200 grayscale hover:grayscale-0 hover:border-slate-300 hover:shadow-md"
                >
                  {client.logoUrl ? (
                    <img
                      src={client.logoUrl}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="max-h-11 w-auto object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <Building
                        className="mb-1.5 h-4 w-4 transition-colors duration-200"
                        style={{ color: isHovered ? client.accentColor : '#94A3B8' }}
                        aria-hidden="true"
                      />
                      <span
                        className="text-xs font-bold tracking-tight leading-snug transition-colors duration-200 sm:text-[13px]"
                        style={{ color: isHovered ? client.accentColor : '#475569' }}
                      >
                        {client.name}
                      </span>
                      {client.sector && (
                        <span className="mt-0.5 text-[10px] font-medium text-slate-400">
                          {client.sector}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Partners Divider & Grid */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#E31E24] uppercase">
                Technology Ecosystem
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2A5C] sm:text-4xl [text-wrap:balance]">
                Our Partners
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Working with leading surveillance, telecom, networking, cabling, and
                storage hardware brands.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2A5C]">
              <Award className="h-4 w-4 text-[#E31E24]" aria-hidden="true" />
              Hikvision Official Partner
            </span>
          </Reveal>

          <StaggerContainer
            staggerDelay={0.035}
            className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            {PARTNERS.map((partner) => {
              const isHovered = hoveredPartner === partner.name;
              return (
                <StaggerItem key={partner.name} y={14}>
                  <motion.div
                    onMouseEnter={() => setHoveredPartner(partner.name)}
                    onMouseLeave={() => setHoveredPartner(null)}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.18 }}
                    className="group flex min-h-[96px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-[#F6F8FB] p-4 text-center transition-all duration-200 grayscale hover:grayscale-0 hover:bg-white hover:border-slate-300 hover:shadow-md"
                  >
                    {partner.logoUrl ? (
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} partner logo`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="max-h-11 w-auto object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <span
                          className="text-sm font-extrabold tracking-tight transition-colors duration-200"
                          style={{ color: isHovered ? partner.accentColor : '#334155' }}
                        >
                          {partner.name}
                        </span>
                        {partner.qualifier && (
                          <span className="mt-1 text-[11px] font-medium leading-tight text-slate-500">
                            {partner.qualifier}
                          </span>
                        )}
                      </div>
                    )}
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
