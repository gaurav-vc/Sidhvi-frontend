import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2A5C] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Blurb */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block">
              <BrandLogo variant="dark" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              An integrated technology solutions company active in ICT, automation, access
              control, security, and surveillance. Founded in 2015 with over 50 years of
              combined experience.
            </p>
            <p className="mt-4 text-xs font-medium text-[#1FADE4]">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#1FADE4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1FADE4] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#1FADE4] transition-colors">
                  Value Proposition
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1FADE4] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#clients-partners"
                  className="hover:text-[#1FADE4] transition-colors"
                >
                  Clients &amp; Partners
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1FADE4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Services
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#service-${service.id}`}
                    className="hover:text-[#1FADE4] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Mumbai Office
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#1FADE4]"
                  aria-hidden="true"
                />
                <span>{COMPANY_INFO.address.full}</span>
              </li>
              {COMPANY_INFO.phones.map((phone) => (
                <li key={phone.href} className="flex items-center gap-2.5">
                  <Phone
                    className="h-4 w-4 shrink-0 text-[#1FADE4]"
                    aria-hidden="true"
                  />
                  <a
                    href={phone.href}
                    className="hover:text-white transition-colors tabular-nums"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-[#1FADE4]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-slate-300 sm:flex-row">
          <p>&copy; 2026 Sidhvi Tech Solutions. All rights reserved.</p>
          <p>Ghatkopar West, Mumbai 400086</p>
        </div>
      </div>
    </footer>
  );
};
