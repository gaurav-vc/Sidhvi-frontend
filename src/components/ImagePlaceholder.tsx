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
        className={`relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${aspectClass} ${className}`}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const isNavy = theme === 'navy';

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl border p-6 text-center ${aspectClass} ${
        isNavy
          ? 'border-white/15 bg-gradient-to-br from-[#1F2A5C] via-[#28356E] to-[#172047] text-white'
          : 'border-slate-200 bg-gradient-to-br from-[#F6F8FB] via-white to-[#EDF3FA] text-[#1F2A5C]'
      } ${className}`}
    >
      {/* Subtle architectural grid pattern */}
      <svg
        className={`pointer-events-none absolute inset-0 h-full w-full ${
          isNavy ? 'opacity-[0.12]' : 'opacity-[0.45]'
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
              stroke={isNavy ? '#1FADE4' : '#CBD5E1'}
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${icon}-${theme})`} />
      </svg>

      {/* Corner calibration brackets */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 ${
          isNavy ? 'border-[#1FADE4]/60' : 'border-[#1FADE4]'
        }`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-2 border-t-2 ${
          isNavy ? 'border-[#1FADE4]/60' : 'border-[#1FADE4]'
        }`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 ${
          isNavy ? 'border-[#E31E24]/70' : 'border-[#E31E24]/80'
        }`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 ${
          isNavy ? 'border-[#E31E24]/70' : 'border-[#E31E24]/80'
        }`}
      />

      <div className="relative z-10 flex max-w-xs flex-col items-center">
        <div
          className={`mb-3.5 flex h-12 w-12 items-center justify-center rounded-lg border ${
            isNavy
              ? 'border-white/15 bg-white/10 text-[#1FADE4]'
              : 'border-slate-200 bg-white text-[#1F2A5C] shadow-xs'
          }`}
        >
          <IconComponent className="h-5 w-5" aria-hidden="true" />
        </div>
        <p
          className={`text-xs font-medium tracking-wide ${
            isNavy ? 'text-slate-200' : 'text-[#333F6B]'
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-1.5 text-[11px] ${
            isNavy ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {alt}
        </p>
      </div>
    </div>
  );
};
