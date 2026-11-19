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
      className="border-b border-[#DBDAD7] bg-[#EFEEEB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#7B5455] uppercase">
              <span className="h-1.5 w-6 rounded-full bg-[#F4C2C2]" />
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance]">
              Our Value Proposition
            </h2>
            <p className="mt-3 text-base text-[#5A5B62]">
              A six-stage delivery cycle connecting consultation and engineering design with
              installation, training, and ongoing lifecycle support.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#7B5455]">
              <RotateCw className="h-4 w-4 text-[#7B5455]" aria-hidden="true" />
              <span>Continuous 6-Stage Delivery Cycle</span>
            </span>

            <button
              type="button"
              onClick={() => setAutoPlay((prev) => !prev)}
              aria-label={autoPlay ? 'Pause cycle progression' : 'Auto-advance cycle'}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#DBDAD7] bg-white px-3 py-1.5 text-xs font-bold text-[#202124] transition-colors hover:border-[#7B5455] cursor-pointer shadow-2xs"
            >
              {autoPlay ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-[#7B5455]" aria-hidden="true" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-[#7B5455]" aria-hidden="true" />
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
              {/* Outer Dotted Rosewood Return Path */}
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
                  stroke="#7B5455"
                  strokeWidth="2.5"
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
                          fill: isActive ? '#7B5455' : '#FFFFFF',
                          stroke: isActive ? '#F4C2C2' : '#DBDAD7',
                          scale: isActive ? 1.03 : 1,
                        }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.25, ease: EASE_SETTLE }}
                        strokeWidth={isActive ? 2.5 : 1.2}
                        style={{ transformOrigin: '160px 160px' }}
                      />
                      <text
                        x={tx}
                        y={ty}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="pointer-events-none select-none text-[12px] font-bold"
                        fill={isActive ? '#FFFFFF' : '#202124'}
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {stage.step}
                      </text>
                    </g>
                  );
                })}
              </motion.svg>

              {/* Center Hub Readout */}
              <div className="pointer-events-none absolute flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#DBDAD7] bg-white text-center shadow-xs">
                <span className="font-mono text-xs font-bold text-[#7B5455] tabular-nums">
                  {activeStage.step}/06
                </span>
                <span className="mt-0.5 px-2 text-[10px] font-bold leading-tight text-[#202124]">
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
                  className={`group relative flex flex-col justify-between rounded-2xl border p-4.5 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] cursor-pointer ${
                    isActive
                      ? 'border-[#7B5455] bg-[#7B5455] text-white shadow-md'
                      : 'border-[#DBDAD7] bg-white text-[#202124] hover:border-[#7B5455]/60 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold tabular-nums ${
                        isActive ? 'text-[#F4C2C2]' : 'text-[#7B5455]'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 ${
                        isActive ? 'text-[#F4C2C2]' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className={`mt-2 text-sm font-bold leading-snug ${
                      isActive ? 'text-white' : 'text-[#202124]'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <span
                    className={`mt-3 inline-block h-[2px] w-8 transition-colors ${
                      isActive
                        ? 'bg-[#F4C2C2]'
                        : 'bg-[#DBDAD7] group-hover:bg-[#7B5455]'
                    }`}
                    aria-hidden="true"
                  />
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Stage Detail Bar with AnimatePresence */}
        <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-[#DBDAD7] bg-white px-6 py-5 shadow-xs sm:flex-row sm:items-center">
          <div className="min-h-[56px] max-w-3xl flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE_SETTLE }}
              >
                <div className="flex items-center gap-2 text-xs font-medium text-[#5A5B62]">
                  <span className="font-mono font-bold text-[#7B5455] tabular-nums">
                    Stage {activeStage.step} of 06
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-bold text-[#202124]">
                    {activeStage.title}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5A5B62] sm:text-base">
                  {activeStage.summary}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() =>
                handleManualSelect(
                  (activeIndex - 1 + VALUE_PROPOSITION_STAGES.length) %
                    VALUE_PROPOSITION_STAGES.length
                )
              }
              className="rounded-xl border border-[#DBDAD7] px-3.5 py-2 text-xs font-bold text-[#202124] transition-colors hover:bg-[#EFEEEB] cursor-pointer"
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
              className="rounded-xl bg-[#7B5455] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#654344] shadow-xs cursor-pointer"
            >
              Next Stage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
