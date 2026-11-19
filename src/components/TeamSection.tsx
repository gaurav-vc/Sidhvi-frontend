import React from 'react';
import { Users } from 'lucide-react';
import { TEAM_CONTENT } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal } from './MotionPrimitives';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      className="border-b border-[#DBDAD7] bg-[#EFEEEB] py-16 sm:py-20"
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
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#7B5455] uppercase">
              <span className="h-1.5 w-6 rounded-full bg-[#F4C2C2]" />
              <Users className="h-4 w-4 text-[#7B5455]" aria-hidden="true" />
              <span>Employees &amp; Culture</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance]">
              {TEAM_CONTENT.title}
            </h2>

            <p className="mt-2 text-base font-bold text-[#36373B]">
              {TEAM_CONTENT.lead}
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#5A5B62]">
              {TEAM_CONTENT.body}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-[#DBDAD7] pt-5 text-xs font-bold text-[#7B5455]">
              <span className="rounded-full border border-[#DBDAD7] bg-white px-3 py-1 shadow-2xs">Inclusivity</span>
              <span className="rounded-full border border-[#DBDAD7] bg-white px-3 py-1 shadow-2xs">Collaboration</span>
              <span className="rounded-full border border-[#DBDAD7] bg-white px-3 py-1 shadow-2xs">Continuous Growth</span>
              <span className="rounded-full border border-[#DBDAD7] bg-white px-3 py-1 shadow-2xs">Diverse Expertise</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
