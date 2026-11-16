import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Cctv,
  MapPin,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, HERO_CONTENT } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { EASE_SETTLE } from './MotionPrimitives';

interface HeroProps {
  onContactClick: () => void;
}

const SYSTEM_NODES = [
  { icon: Cctv, label: 'CCTV Surveillance', angle: 0 },
  { icon: ShieldCheck, label: 'Access Control', angle: 90 },
  { icon: Network, label: 'Data & FTTH', angle: 180 },
  { icon: Building2, label: 'IBMS & Automation', angle: 270 },
];

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#F6F8FB] via-white to-white"
    >
      {/* Subtle architectural ambient gradient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#1FADE4]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#1F2A5C]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column - immediate availability with subtle orchestrated reveal */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_SETTLE }}
              className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#333F6B]"
            >
              <span className="inline-flex items-center gap-1.5 text-[#1F2A5C]">
                <MapPin className="h-3.5 w-3.5 text-[#E31E24]" aria-hidden="true" />
                Mumbai, India
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>ICT, Automation, Access Control &amp; Surveillance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE_SETTLE }}
              className="max-w-2xl text-[clamp(2.15rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#1F2A5C] [text-wrap:balance]"
            >
              {HERO_CONTENT.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_SETTLE }}
              className="mt-4 text-sm font-semibold tracking-wide text-[#1FADE4] sm:text-base"
            >
              {HERO_CONTENT.subline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE_SETTLE }}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-600"
            >
              {HERO_CONTENT.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: EASE_SETTLE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E31E24] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#c5181d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A5C] whitespace-nowrap shrink-0"
              >
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>

              <motion.button
                type="button"
                onClick={onContactClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center rounded-lg border border-[#1F2A5C]/25 bg-white px-6 py-3 text-sm font-semibold text-[#1F2A5C] transition-colors duration-150 hover:border-[#1F2A5C] hover:bg-[#F6F8FB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FADE4] whitespace-nowrap shrink-0 cursor-pointer"
              >
                {HERO_CONTENT.secondaryCta}
              </motion.button>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE_SETTLE }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            {HERO_CONTENT.heroImage ? (
              <ImagePlaceholder
                src={HERO_CONTENT.heroImage}
                alt="Sidhvi Tech Solutions integrated surveillance, access control, and ICT infrastructure"
                label={HERO_CONTENT.heroImagePlaceholderLabel}
                aspectClass="h-full min-h-[280px] lg:min-h-[370px]"
                theme="navy"
                icon="security"
                priority
              />
            ) : (
              /* Animated Architectural Integrated-Security Schematic Placeholder (replace via HERO_CONTENT.heroImage) */
              <div
                role="img"
                aria-label="Sidhvi Tech Solutions integrated surveillance, access control, and ICT schematic"
                className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-[#1F2A5C]/15 bg-gradient-to-br from-[#1F2A5C] via-[#243169] to-[#151D43] p-6 text-white shadow-lg lg:min-h-[380px]"
              >
                {/* Technical Grid Overlay */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="hero-schematic-grid"
                      width="28"
                      height="28"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 28 0 L 0 0 0 28"
                        fill="none"
                        stroke="#1FADE4"
                        strokeWidth="0.7"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-schematic-grid)" />
                </svg>

                {/* Top caption */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-slate-300">
                  <span>Integrated Systems Architecture</span>
                  <span className="font-mono text-[#1FADE4]">16:9 Photo Slot</span>
                </div>

                {/* Animated Orbital Security & ICT Diagram */}
                <div className="relative z-10 my-4 flex flex-1 items-center justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center sm:h-52 sm:w-52">
                    {/* Outer rotating dashed ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border border-dashed border-[#1FADE4]/40"
                    />
                    {/* Inner counter-rotating ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-6 rounded-full border border-white/15"
                    />

                    {/* Central Hub */}
                    <motion.div
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xs shadow-md"
                    >
                      <ShieldCheck className="h-7 w-7 text-[#1FADE4]" aria-hidden="true" />
                      <span className="mt-1 text-[10px] font-bold tracking-wider text-white">
                        SIDHVI
                      </span>
                    </motion.div>

                    {/* 4 Corner Subsystem Nodes */}
                    {SYSTEM_NODES.map((node, index) => {
                      const NodeIcon = node.icon;
                      const positions = [
                        '-top-3 left-1/2 -translate-x-1/2',
                        'top-1/2 -right-5 -translate-y-1/2',
                        '-bottom-3 left-1/2 -translate-x-1/2',
                        'top-1/2 -left-5 -translate-y-1/2',
                      ];
                      return (
                        <motion.div
                          key={node.label}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.3 + index * 0.08,
                            ease: EASE_SETTLE,
                          }}
                          whileHover={{ scale: 1.08 }}
                          className={`absolute ${positions[index]} flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#1F2A5C] text-white shadow-md`}
                          title={node.label}
                        >
                          <NodeIcon
                            className={`h-4 w-4 ${
                              index % 2 === 0 ? 'text-[#1FADE4]' : 'text-[#E31E24]'
                            }`}
                            aria-hidden="true"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom capability strip */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-3 text-[11px] text-slate-300">
                  <span>{HERO_CONTENT.heroImagePlaceholderLabel}</span>
                </div>
              </div>
            )}

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1FADE4]" aria-hidden="true" />
                Business, Home &amp; Personal Needs
              </span>
              <span>End-to-End Integration</span>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Trust Strip with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: EASE_SETTLE }}
          className="mt-12 grid grid-cols-1 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <div className="px-6 py-5 transition-colors hover:bg-[#F6F8FB]/70">
            <p className="font-mono text-xs font-medium text-[#1FADE4]">ESTABLISHED</p>
            <p className="mt-1 text-lg font-bold text-[#1F2A5C] tabular-nums">
              Founded {COMPANY_INFO.foundedYear}
            </p>
            <p className="mt-0.5 text-sm text-slate-600">
              Headquartered in Ghatkopar West, Mumbai
            </p>
          </div>

          <div className="px-6 py-5 transition-colors hover:bg-[#F6F8FB]/70">
            <p className="font-mono text-xs font-medium text-[#1FADE4]">DOMAIN DEPTH</p>
            <p className="mt-1 text-lg font-bold text-[#1F2A5C] tabular-nums">
              {COMPANY_INFO.experienceSummary}
            </p>
            <p className="mt-0.5 text-sm text-slate-600">
              Specialised integrated technology solutions
            </p>
          </div>

          <div className="px-6 py-5 transition-colors hover:bg-[#F6F8FB]/70">
            <p className="font-mono text-xs font-medium text-[#1FADE4]">FULL LIFECYCLE</p>
            <p className="mt-1 text-sm font-semibold leading-snug text-[#1F2A5C]">
              {COMPANY_INFO.lifecycleSummary}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Single-source delivery &amp; after-sales support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
