import React from 'react';
import { motion } from 'motion/react';
import { Compass, Target } from 'lucide-react';
import { ABOUT_CONTENT, CORE_VALUES } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal, StaggerContainer, StaggerItem } from './MotionPrimitives';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Our Story Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider text-[#1FADE4] uppercase">
              Our Story
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2A5C] sm:text-4xl [text-wrap:balance]">
              {ABOUT_CONTENT.title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              {ABOUT_CONTENT.storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-5">
            <ImagePlaceholder
              src={ABOUT_CONTENT.aboutImage}
              alt="Sidhvi Tech Solutions corporate engineering and security infrastructure"
              label={ABOUT_CONTENT.aboutImagePlaceholderLabel}
              aspectClass="h-full min-h-[260px] lg:min-h-[340px]"
              theme="light"
              icon="building"
            />
          </Reveal>
        </div>

        {/* Vision & Mission Highlighted Cards */}
        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <StaggerItem>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-[#F6F8FB] p-7 shadow-xs transition-shadow hover:shadow-md sm:p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F2A5C] text-white">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-[#1F2A5C]">Our Vision</h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#333F6B]">
                  &ldquo;{ABOUT_CONTENT.vision}&rdquo;
                </p>
              </div>
              <p className="mt-6 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                Long-term value creation &amp; social responsibility
              </p>
            </motion.article>
          </StaggerItem>

          <StaggerItem>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-[#1F2A5C] p-7 text-white shadow-xs transition-shadow hover:shadow-md sm:p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1FADE4] text-[#1F2A5C]">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-slate-200 sm:text-base">
                  {ABOUT_CONTENT.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1FADE4]"
                      />
                      <span>&ldquo;{item}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-t border-white/15 pt-4 text-xs font-medium text-slate-300">
                Quality, fairness, transparency &amp; ownership
              </p>
            </motion.article>
          </StaggerItem>
        </StaggerContainer>

        {/* Core Values Grid (All 10 PDF Values) */}
        <div className="mt-14">
          <Reveal className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#E31E24] uppercase">
                Principles We Operate By
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#1F2A5C]">
                Core Values
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              Ten foundational commitments guiding every customer engagement
            </p>
          </Reveal>

          <StaggerContainer
            staggerDelay={0.04}
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            {CORE_VALUES.map((value, index) => (
              <StaggerItem key={value} y={14}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="group flex h-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5 transition-colors duration-150 hover:border-[#1FADE4] hover:bg-[#F6F8FB]"
                >
                  <span className="font-mono text-xs font-medium text-[#1FADE4] tabular-nums transition-colors group-hover:text-[#E31E24]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-[#1F2A5C]">{value}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
