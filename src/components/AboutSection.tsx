import React from 'react';
import { motion } from 'motion/react';
import { Compass, Target } from 'lucide-react';
import { ABOUT_CONTENT, CORE_VALUES } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal, StaggerContainer, StaggerItem } from './MotionPrimitives';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#FAF9F7] py-16 sm:py-20 lg:py-24 border-b border-[#DBDAD7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Our Story Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="flex flex-col justify-center lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#7B5455] uppercase">
              <span className="h-1.5 w-6 rounded-full bg-[#F4C2C2]" />
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance]">
              {ABOUT_CONTENT.title}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5A5B62]">
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
              className="flex h-full flex-col justify-between rounded-2xl border border-[#DBDAD7] bg-[#EFEEEB] p-7 shadow-xs transition-all hover:border-[#C8C7C4] hover:shadow-md sm:p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B5455] text-white shadow-xs">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">Our Vision</h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#36373B] font-medium">
                  &ldquo;{ABOUT_CONTENT.vision}&rdquo;
                </p>
              </div>
              <p className="mt-6 border-t border-[#DBDAD7] pt-4 text-xs font-semibold text-[#7B5455]">
                Long-term value creation &amp; social responsibility
              </p>
            </motion.article>
          </StaggerItem>

          <StaggerItem>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-[#2A2B30] bg-[#202124] p-7 text-white shadow-md transition-all hover:border-[#F4C2C2]/50 hover:shadow-[0_8px_30px_rgba(123,84,85,0.15)] sm:p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B5455] text-white shadow-xs">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {ABOUT_CONTENT.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4C2C2]"
                      />
                      <span>&ldquo;{item}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 border-t border-white/15 pt-4 text-xs font-medium text-[#F4C2C2]">
                Quality, fairness, transparency &amp; ownership
              </p>
            </motion.article>
          </StaggerItem>
        </StaggerContainer>

        {/* Core Values Grid */}
        <div className="mt-14">
          <Reveal className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-wider text-[#7B5455] uppercase">
                Principles We Operate By
              </p>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#202124]">
                Core Values
              </h3>
            </div>
            <p className="text-sm text-[#5A5B62]">
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
                  className="group flex h-full items-center gap-3 rounded-xl border border-[#DBDAD7] bg-white px-4 py-3.5 transition-all duration-150 hover:border-[#7B5455] hover:bg-[#EFEEEB] hover:shadow-xs"
                >
                  <span className="font-mono text-xs font-bold text-[#7B5455] tabular-nums transition-colors group-hover:text-[#202124]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-bold text-[#202124]">{value}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
