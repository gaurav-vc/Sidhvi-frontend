import React from 'react';
import { Users } from 'lucide-react';
import { TEAM_CONTENT } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal } from './MotionPrimitives';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      className="border-t border-slate-200 bg-[#F6F8FB] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <ImagePlaceholder
              src={TEAM_CONTENT.teamImage}
              alt="Sidhvi Tech Solutions engineering and support workforce"
              label={TEAM_CONTENT.teamImagePlaceholderLabel}
              aspectClass="h-full min-h-[260px] lg:min-h-[320px]"
              theme="light"
              icon="team"
            />
          </Reveal>

          <Reveal delay={0.1} className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1FADE4] uppercase">
              <Users className="h-4 w-4 text-[#E31E24]" aria-hidden="true" />
              <span>Employees &amp; Culture</span>
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2A5C] sm:text-4xl [text-wrap:balance]">
              {TEAM_CONTENT.title}
            </h2>

            <p className="mt-2 text-base font-semibold text-[#333F6B]">
              {TEAM_CONTENT.lead}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {TEAM_CONTENT.body}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 pt-5 text-xs font-medium text-[#333F6B]">
              <span>Inclusivity</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Collaboration</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Continuous Growth</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>Diverse Expertise</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
