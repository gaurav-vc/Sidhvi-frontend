import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Pause, Play, RotateCw } from 'lucide-react';
import { VALUE_PROPOSITION_STAGES } from '../data/siteData';
import { EASE_SETTLE, Reveal } from './MotionPrimitives';

export const ValueProposition: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const activeStage = VALUE_PROPOSITION_STAGES[activeIndex];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VALUE_PROPOSITION_STAGES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [autoPlay]);

  const handleManualSelect = (idx: number) => {
    setAutoPlay(false);
    setActiveIndex(idx);
  };

  return (
    <section
      id="process"
      className="border-y border-slate-200 bg-[#F6F8FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#1FADE4] uppercase">
              How We Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2A5C] sm:text-4xl [text-wrap:balance]">
              Our Value Proposition
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A six-stage delivery cycle connecting consultation and engineering design with
              installation, training, and ongoing lifecycle support.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#333F6B]">
              <RotateCw className="h-4 w-4 text-[#E31E24]" aria-hidden="true" />
              <span>Continuous 6-Stage Delivery Cycle</span>
            </span>

            <button
              type="button"
              onClick={() => setAutoPlay((prev) => !prev)}
              aria-label={autoPlay ? 'Pause cycle progression' : 'Auto-advance cycle'}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-[#1F2A5C] transition-colors hover:border-[#1FADE4] cursor-pointer"
            >
              {autoPlay ? (
                <>
                  <Pause className="h-3 w-3 text-[#E31E24]" aria-hidden="true" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-[#1FADE4]" aria-hidden="true" />
                  <span>Auto</span>
                </>
              )}
            </button>
          </div>
        </Reveal>

        {/* Interactive Circular Cycle + Stage Cards */}
        <Reveal delay={0.1} className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: Interactive 6-Sector SVG Cycle Diagram (matches PDF Page 9 structure) */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              {/* Outer Dotted Red Return Path */}
              <motion.svg
                viewBox="0 0 320 320"
                className="h-full w-full"
                aria-hidden="true"
              >
                <motion.circle
                  cx="160"
                  cy="160"
                  r="146"
                  fill="none"
                  stroke="#E31E24"
                  strokeWidth="3"
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '160px 160px' }}
                />

                {/* 6 Interactive Circular Wedges */}
                {VALUE_PROPOSITION_STAGES.map((stage, idx) => {
                  const startAngle = -90 + idx * 60 + 3;
                  const endAngle = startAngle + 54;
                  const rOuter = 132;
                  const rInner = 54;
                  const toRad = (deg: number) => (deg * Math.PI) / 180;

                  const x1 = 160 + rOuter * Math.cos(toRad(startAngle));
                  const y1 = 160 + rOuter * Math.sin(toRad(startAngle));
                  const x2 = 160 + rOuter * Math.cos(toRad(endAngle));
                  const y2 = 160 + rOuter * Math.sin(toRad(endAngle));
                  const x3 = 160 + rInner * Math.cos(toRad(endAngle));
                  const y3 = 160 + rInner * Math.sin(toRad(endAngle));
                  const x4 = 160 + rInner * Math.cos(toRad(startAngle));
                  const y4 = 160 + rInner * Math.sin(toRad(startAngle));

                  const d = `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;

                  const midAngle = toRad(startAngle + 27);
                  const textR = 94;
                  const tx = 160 + textR * Math.cos(midAngle);
                  const ty = 160 + textR * Math.sin(midAngle);

                  const isActive = idx === activeIndex;

                  return (
                    <g
                      key={stage.step}
                      onClick={() => handleManualSelect(idx)}
                      className="cursor-pointer"
                    >
                      <motion.path
                        d={d}
                        initial={false}
                        animate={{
                          fill: isActive ? '#1F2A5C' : '#FFFFFF',
                          stroke: isActive ? '#1FADE4' : '#CBD5E1',
                          scale: isActive ? 1.03 : 1,
                        }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.25, ease: EASE_SETTLE }}
                        strokeWidth={isActive ? 2 : 1.2}
                        style={{ transformOrigin: '160px 160px' }}
                      />
                      <text
                        x={tx}
                        y={ty}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="pointer-events-none select-none text-[12px] font-bold"
                        fill={isActive ? '#FFFFFF' : '#1F2A5C'}
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {stage.step}
                      </text>
                    </g>
                  );
                })}
              </motion.svg>

              {/* Center Hub Readout */}
              <div className="pointer-events-none absolute flex h-24 w-24 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-sm">
                <span className="font-mono text-xs font-bold text-[#E31E24] tabular-nums">
                  {activeStage.step}/06
                </span>
                <span className="mt-0.5 px-2 text-[10px] font-bold leading-tight text-[#1F2A5C]">
                  Lifecycle
                </span>
              </div>
            </div>
          </div>

          {/* Right: 6 Interactive Stage Selector Tiles */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {VALUE_PROPOSITION_STAGES.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.button
                  key={stage.step}
                  type="button"
                  onClick={() => handleManualSelect(idx)}
                  aria-pressed={isActive}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.15 }}
                  className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1FADE4] cursor-pointer ${
                    isActive
                      ? 'border-[#1F2A5C] bg-[#1F2A5C] text-white shadow-md'
                      : 'border-slate-200 bg-white text-[#1F2A5C] hover:border-[#1FADE4]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums ${
                        isActive ? 'text-[#1FADE4]' : 'text-[#E31E24]'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 ${
                        isActive ? 'text-[#1FADE4]' : 'text-slate-300'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={`mt-2 text-sm font-bold leading-snug ${
                      isActive ? 'text-white' : 'text-[#1F2A5C]'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <span
                    className={`mt-3 inline-block h-[2px] w-8 transition-colors ${
                      isActive
                        ? 'bg-[#E31E24]'
                        : 'bg-slate-200 group-hover:bg-[#1FADE4]'
                    }`}
                    aria-hidden="true"
                  />
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Stage Detail Bar with AnimatePresence */}
        <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-xs sm:flex-row sm:items-center">
          <div className="min-h-[56px] max-w-3xl flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_SETTLE }}
              >
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="font-mono text-[#E31E24] tabular-nums">
                    Stage {activeStage.step} of 06
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#1F2A5C]">
                    {activeStage.title}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeStage.summary}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() =>
                handleManualSelect(
                  (activeIndex - 1 + VALUE_PROPOSITION_STAGES.length) %
                    VALUE_PROPOSITION_STAGES.length
                )
              }
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-[#1F2A5C] transition-colors hover:bg-[#F6F8FB] cursor-pointer"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() =>
                handleManualSelect(
                  (activeIndex + 1) % VALUE_PROPOSITION_STAGES.length
                )
              }
              className="rounded-lg bg-[#1F2A5C] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#333F6B] cursor-pointer"
            >
              Next Stage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
