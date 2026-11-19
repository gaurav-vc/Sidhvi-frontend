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
      className="relative overflow-hidden border-b border-[#DBDAD7] bg-gradient-to-b from-[#F7F6F4] via-[#FAF9F7] to-[#FAF9F7]"
    >
      {/* Luminous Minimalist ambient gradient glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#F4C2C2]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-36 h-[380px] w-[380px] rounded-full bg-[#7B5455]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_SETTLE }}
              className="mb-5 flex flex-wrap items-center gap-2.5 text-xs font-medium"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DBDAD7] bg-[#EFEEEB] px-3.5 py-1 text-xs font-bold text-[#7B5455] shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7B5455] animate-pulse" />
                <MapPin className="h-3.5 w-3.5 text-[#7B5455]" aria-hidden="true" />
                Mumbai, India
              </span>
              <span className="rounded-full border border-[#DBDAD7] bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#5A5B62]">
                ICT • Automation • Access Control • Surveillance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE_SETTLE }}
              className="max-w-2xl text-[clamp(2.15rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#202124] [text-wrap:balance]"
            >
              Integrated Security, Surveillance &amp; <span className="text-[#7B5455] underline decoration-[#F4C2C2] decoration-wavy decoration-2 underline-offset-8">ICT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_SETTLE }}
              className="mt-4 text-sm font-semibold tracking-wide text-[#7B5455] sm:text-base"
            >
              {HERO_CONTENT.subline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE_SETTLE }}
              className="mt-4 max-w-xl text-base leading-relaxed text-[#5A5B62]"
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B5455] px-6.5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#654344] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] whitespace-nowrap shrink-0"
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
                className="inline-flex items-center justify-center rounded-xl border border-[#DBDAD7] bg-[#EFEEEB] px-6.5 py-3.5 text-sm font-semibold text-[#202124] transition-colors duration-150 hover:bg-[#E2E1DE] hover:border-[#C8C7C4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] whitespace-nowrap shrink-0 cursor-pointer"
              >
                {HERO_CONTENT.secondaryCta}
              </motion.button>
            </motion.div>
          </div>

          {/* Right Visual Column - Framed with Rose & Rosewood luxury borders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE_SETTLE }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            {HERO_CONTENT.heroImage ? (
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#F4C2C2]/60 bg-[#202124] shadow-[0_12px_40px_rgba(123,84,85,0.15)]">
                <div className="relative h-[320px] sm:h-[380px] lg:h-[440px] w-full overflow-hidden">
                  <img
                    src={HERO_CONTENT.heroImage}
                    alt="Sidhvi Tech Solutions integrated surveillance, access control, and ICT infrastructure"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202124] via-[#202124]/40 to-transparent pointer-events-none" />

                  {/* Top Live Ops Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-[#202124]/90 px-3.5 py-1.5 backdrop-blur-md border border-[#F4C2C2]/30 text-white shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4C2C2] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F4C2C2]" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-wide">
                      Live Command &amp; Surveillance Ops
                    </span>
                  </div>

                  {/* Corner Calibration Accents in Rose & Rosewood */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 border-[#F4C2C2]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 bottom-4 h-4 w-4 border-l-2 border-b-2 border-[#7B5455]"
                  />

                  {/* Bottom capability strip */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#202124]/90 px-4 py-2.5 backdrop-blur-md border border-white/10 text-white">
                    <div>
                      <p className="text-[11px] font-semibold text-[#F4C2C2] uppercase tracking-wider">
                        Integrated Infrastructure
                      </p>
                      <p className="text-xs font-bold text-slate-100">
                        CCTV • Access Control • EPBX • FTTH
                      </p>
                    </div>
                    <span className="rounded-md bg-[#7B5455] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-xs">
                      24/7 Monitored
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Animated Architectural Integrated-Security Schematic Placeholder (replace via HERO_CONTENT.heroImage) */
              <div
                role="img"
                aria-label="Sidhvi Tech Solutions integrated surveillance, access control, and ICT schematic"
                className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#202124] via-[#2A2B30] to-[#1A1C1A] p-6 text-white shadow-lg lg:min-h-[380px]"
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
                        stroke="#7B5455"
                        strokeWidth="0.7"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-schematic-grid)" />
                </svg>

                {/* Top caption */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-slate-300">
                  <span>Integrated Systems Architecture</span>
                  <span className="font-mono text-[#F4C2C2]">16:9 Photo Slot</span>
                </div>

                {/* Animated Orbital Security & ICT Diagram */}
                <div className="relative z-10 my-4 flex flex-1 items-center justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center sm:h-52 sm:w-52">
                    {/* Outer rotating dashed ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border border-dashed border-[#7B5455]/40"
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
                      <ShieldCheck className="h-7 w-7 text-[#F4C2C2]" aria-hidden="true" />
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
                          className={`absolute ${positions[index]} flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#202124] text-white shadow-md`}
                          title={node.label}
                        >
                          <NodeIcon
                            className={`h-4 w-4 ${
                              index % 2 === 0 ? 'text-[#F4C2C2]' : 'text-[#7B5455]'
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

            <div className="mt-3.5 flex items-center justify-between text-xs text-[#5A5B62]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#7B5455]" aria-hidden="true" />
                Business, Home &amp; Personal Needs
              </span>
              <span className="font-medium text-[#7B5455]">End-to-End Integration</span>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Trust Strip with Luminous Minimalist Cards */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: EASE_SETTLE }}
          className="mt-12 grid grid-cols-1 divide-y divide-[#DBDAD7] rounded-2xl border border-[#DBDAD7] bg-[#EFEEEB] shadow-xs md:grid-cols-3 md:divide-x md:divide-y-0 overflow-hidden"
        >
          <div className="px-6 py-5 transition-colors hover:bg-white/80">
            <p className="font-mono text-xs font-bold text-[#7B5455]">ESTABLISHED</p>
            <p className="mt-1 text-lg font-extrabold text-[#202124] tabular-nums">
              Founded {COMPANY_INFO.foundedYear}
            </p>
            <p className="mt-0.5 text-sm text-[#5A5B62]">
              Headquartered in Ghatkopar West, Mumbai
            </p>
          </div>

          <div className="px-6 py-5 transition-colors hover:bg-white/80">
            <p className="font-mono text-xs font-bold text-[#7B5455]">DOMAIN DEPTH</p>
            <p className="mt-1 text-lg font-extrabold text-[#202124] tabular-nums">
              {COMPANY_INFO.experienceSummary}
            </p>
            <p className="mt-0.5 text-sm text-[#5A5B62]">
              Specialised integrated technology solutions
            </p>
          </div>

          <div className="px-6 py-5 transition-colors hover:bg-white/80">
            <p className="font-mono text-xs font-bold text-[#7B5455]">FULL LIFECYCLE</p>
            <p className="mt-1 text-sm font-bold leading-snug text-[#202124]">
              {COMPANY_INFO.lifecycleSummary}
            </p>
            <p className="mt-1 text-xs text-[#5A5B62]">
              Single-source delivery &amp; after-sales support
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
