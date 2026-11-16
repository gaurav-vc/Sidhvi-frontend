import React from 'react';

interface BrandLogoProps {
  /** Supply your official logo file path here (e.g. "/images/sidhvi-logo.png") to replace the placeholder mark */
  logoSrc?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  logoSrc,
  variant = 'light',
  compact = false,
}) => {
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt="Sidhvi Tech Solutions"
        className="h-9 w-auto object-contain shrink-0"
      />
    );
  }

  const wordmarkColor = variant === 'dark' ? 'text-white' : 'text-[#E31E24]';
  const subBarColor = variant === 'dark' ? 'bg-white/25' : 'bg-[#1F2A5C]';

  return (
    <span
      className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none"
      aria-label="Sidhvi Tech Solutions"
    >
      {/* Logo Mark Placeholder Slot: Replace SVG below with official stylized "S" emblem if supplied separately */}
      <svg
        viewBox="0 0 40 36"
        className={compact ? 'h-7 w-8 shrink-0' : 'h-8 w-9 shrink-0'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M29.5 6.2C26.2 4.1 21.1 3.7 16.2 5.3C11.1 7 7.8 10.6 8.3 14.3C8.8 18.2 13.7 19.6 19.4 20.5C25.3 21.4 30.8 22.8 30.2 27.1C29.6 31.1 24.4 33.4 18.4 33.2C12.9 33 8.1 30.9 5.5 27.9"
          stroke="#E31E24"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M32.5 8.8C29.1 6.7 23.6 6.2 18.6 7.8C13.6 9.4 10.7 12.2 11.1 15C11.6 18 16.1 19 21.7 19.9C27.4 20.8 32.8 22 32.3 26.2"
          stroke="#E31E24"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M6 12.2H12.5M27.5 23.8H34"
          stroke="#1FADE4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="inline-flex flex-col leading-none">
        <span
          className={`font-bold tracking-[0.06em] ${wordmarkColor} ${
            compact ? 'text-[13px] sm:text-sm' : 'text-sm sm:text-base'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          SIDHVI TECH SOLUTIONS
        </span>
        <span className="mt-1 flex items-center gap-0.5" aria-hidden="true">
          <span className="h-[2px] w-10 bg-[#1FADE4]" />
          <span className={`h-[2px] flex-1 ${subBarColor}`} />
          <span className="h-[2px] w-6 bg-[#E31E24]" />
        </span>
      </span>
    </span>
  );
};
