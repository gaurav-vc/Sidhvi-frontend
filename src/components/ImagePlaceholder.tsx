import React, { useState } from 'react';
import {
  Building2,
  Camera,
  Image as ImageIcon,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';

interface ImagePlaceholderProps {
  /** Pass a real image URL/path when replacing placeholder assets */
  src?: string;
  alt: string;
  label: string;
  aspectClass?: string;
  theme?: 'navy' | 'light' | 'slate';
  icon?: 'security' | 'building' | 'network' | 'team' | 'camera' | 'default';
  className?: string;
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  label,
  aspectClass = 'aspect-[4/3]',
  theme = 'light',
  icon = 'default',
  className = '',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  const IconComponent = {
    security: ShieldCheck,
    building: Building2,
    network: Network,
    team: Users,
    camera: Camera,
    default: ImageIcon,
  }[icon];

  if (src && !hasError) {
    return (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-[#DBDAD7] bg-[#EFEEEB] ${aspectClass} ${className}`}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  const isDark = theme === 'navy' || theme === 'slate';

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border p-6 text-center ${aspectClass} ${
        isDark
          ? 'border-[#2A2B30] bg-gradient-to-br from-[#202124] via-[#2A2B30] to-[#1A1C1A] text-white'
          : 'border-[#DBDAD7] bg-gradient-to-br from-[#EFEEEB] via-white to-[#FAF9F7] text-[#202124]'
      } ${className}`}
    >
      {/* Subtle architectural grid pattern */}
      <svg
        className={`pointer-events-none absolute inset-0 h-full w-full ${
          isDark ? 'opacity-[0.14]' : 'opacity-[0.45]'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${icon}-${theme}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke={isDark ? '#7B5455' : '#DBDAD7'}
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${icon}-${theme})`} />
      </svg>

      {/* Corner calibration brackets in Deep Rosewood & Rose */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 ${
          isDark ? 'border-[#7B5455]' : 'border-[#7B5455]'
        }`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 ${
          isDark ? 'border-[#7B5455]' : 'border-[#7B5455]'
        }`}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-[#F4C2C2]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-[#F4C2C2]"
      />

      <div className="relative z-10 flex max-w-xs flex-col items-center">
        <div
          className={`mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl border ${
            isDark
              ? 'border-white/15 bg-white/10 text-[#F4C2C2]'
              : 'border-[#DBDAD7] bg-white text-[#7B5455] shadow-xs'
          }`}
        >
          <IconComponent className="h-5 w-5" aria-hidden="true" />
        </div>
        <p
          className={`text-xs font-bold tracking-wide ${
            isDark ? 'text-slate-200' : 'text-[#202124]'
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-1.5 text-[11px] ${
            isDark ? 'text-slate-400' : 'text-[#5A5B62]'
          }`}
        >
          {alt}
        </p>
      </div>
    </div>
  );
};
