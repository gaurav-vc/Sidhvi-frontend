import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { EASE_SETTLE } from './MotionPrimitives';

export const FloatingContact: React.FC = () => {
  const primaryPhone = COMPANY_INFO.phones[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: EASE_SETTLE }}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:hidden"
      aria-label="Quick Contact Actions"
    >
      <motion.a
        href={primaryPhone.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.94 }}
        aria-label="Chat on WhatsApp with Sidhvi Tech Solutions"
        className="inline-flex h-11 items-center gap-1.5 rounded-full bg-[#1F2A5C] px-4 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20"
      >
        <MessageCircle className="h-4 w-4 text-[#1FADE4]" aria-hidden="true" />
        <span>WhatsApp</span>
      </motion.a>

      <motion.a
        href={primaryPhone.href}
        whileTap={{ scale: 0.94 }}
        aria-label={`Call ${primaryPhone.display}`}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E31E24] text-white shadow-lg ring-1 ring-white/20"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
      </motion.a>
    </motion.div>
  );
};
