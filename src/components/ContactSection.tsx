import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CheckCircle2,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';
import { EASE_SETTLE, Reveal } from './MotionPrimitives';

interface ContactSectionProps {
  preselectedService: string;
  contactFormRef: React.RefObject<HTMLDivElement | null>;
}

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Biometric Solutions',
  'Home & Office Automation',
  'General Enquiry',
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  contactFormRef,
}) => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICES[0].title,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showLiveMap, setShowLiveMap] = useState(true);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
      setSubmitted(false);
    }
  }, [preselectedService]);

  const validate = (formValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!formValues.name.trim() || formValues.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim() || !emailPattern.test(formValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = formValues.phone.replace(/[\s\-()+]/g, '');
    if (!digitsOnly || digitsOnly.length < 7 || !/^\d+$/.test(digitsOnly)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formValues.service.trim()) {
      nextErrors.service = 'Please select a service of interest.';
    }

    if (!formValues.message.trim() || formValues.message.trim().length < 10) {
      nextErrors.message = 'Please share brief project details (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    /**
     * BACKEND / FORM SERVICE INTEGRATION POINT:
     * Connect Formspree, EmailJS, or your custom API endpoint here.
     *
     * Example (Formspree):
     * await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(values),
     * });
     *
     * Example (EmailJS):
     * await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_PUBLIC_KEY');
     */

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setValues({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: SERVICES[0].title,
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="border-b border-[#DBDAD7] bg-[#FAF9F7] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#7B5455] uppercase">
            <span className="h-1.5 w-6 rounded-full bg-[#F4C2C2]" />
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#202124] sm:text-4xl [text-wrap:balance]">
            Request a Consultation or Quote
          </h2>
          <p className="mt-3 text-base text-[#5A5B62]">
            Speak with our Mumbai team for solution consultation, site design,
            installation, or maintenance support.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Enquiry Form */}
          <Reveal
            delay={0.05}
            ref={contactFormRef}
            className="rounded-3xl border border-[#DBDAD7] bg-white p-6 shadow-xs sm:p-8 lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted-state"
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: EASE_SETTLE }}
                  className="flex flex-col items-start justify-center py-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-[#202124]">
                    Enquiry Received
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#5A5B62]">
                    Thank you,{' '}
                    <span className="font-bold text-[#202124]">{values.name}</span>.
                    Your enquiry regarding{' '}
                    <span className="font-bold text-[#202124]">{values.service}</span>{' '}
                    has been validated. For immediate assistance, call us on{' '}
                    <a
                      href={COMPANY_INFO.phones[0].href}
                      className="font-bold text-[#7B5455] underline hover:text-[#202124]"
                    >
                      {COMPANY_INFO.phones[0].display}
                    </a>{' '}
                    or email{' '}
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-bold text-[#7B5455] underline hover:text-[#202124]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    .
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 rounded-xl border border-[#DBDAD7] px-4.5 py-2 text-sm font-bold text-[#202124] hover:bg-[#EFEEEB] cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold text-[#202124]"
                      >
                        Full Name <span className="text-[#7B5455]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder="Your full name"
                        className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-[#9E3A3E] focus:ring-[#9E3A3E]/20'
                            : 'border-[#DBDAD7] bg-[#FAF9F7]/60 focus:bg-white focus:border-[#7B5455] focus:ring-[#7B5455]/15'
                        }`}
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1 text-xs font-medium text-[#9E3A3E]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-bold text-[#202124]"
                      >
                        Company / Organisation
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Company or society name (optional)"
                        className="mt-1.5 w-full rounded-xl border border-[#DBDAD7] bg-[#FAF9F7]/60 focus:bg-white px-3.5 py-2.5 text-sm text-[#202124] placeholder:text-slate-400 focus:border-[#7B5455] focus:outline-none focus:ring-2 focus:ring-[#7B5455]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold text-[#202124]"
                      >
                        Email Address <span className="text-[#7B5455]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder="you@company.com"
                        className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-[#9E3A3E] focus:ring-[#9E3A3E]/20'
                            : 'border-[#DBDAD7] bg-[#FAF9F7]/60 focus:bg-white focus:border-[#7B5455] focus:ring-[#7B5455]/15'
                        }`}
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1 text-xs font-medium text-[#9E3A3E]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold text-[#202124]"
                      >
                        Phone Number <span className="text-[#7B5455]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        placeholder="+91 98XXX XXXXX"
                        className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-[#9E3A3E] focus:ring-[#9E3A3E]/20'
                            : 'border-[#DBDAD7] bg-[#FAF9F7]/60 focus:bg-white focus:border-[#7B5455] focus:ring-[#7B5455]/15'
                        }`}
                      />
                      {errors.phone && (
                        <p id="error-phone" className="mt-1 text-xs font-medium text-[#9E3A3E]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold text-[#202124]"
                    >
                      Service of Interest <span className="text-[#7B5455]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={values.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'error-service' : undefined}
                      className="mt-1.5 w-full rounded-xl border border-[#DBDAD7] bg-[#FAF9F7]/60 focus:bg-white px-3.5 py-2.5 text-sm text-[#202124] focus:border-[#7B5455] focus:outline-none focus:ring-2 focus:ring-[#7B5455]/15"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="error-service" className="mt-1 text-xs font-medium text-[#9E3A3E]">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-[#202124]"
                    >
                      Requirement Details <span className="text-[#7B5455]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      placeholder="Share site location, system requirements, or maintenance enquiry details..."
                      className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-[#9E3A3E] focus:ring-[#9E3A3E]/20'
                          : 'border-[#DBDAD7] bg-[#FAF9F7]/60 focus:bg-white focus:border-[#7B5455] focus:ring-[#7B5455]/15'
                      }`}
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1 text-xs font-medium text-[#9E3A3E]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col justify-between gap-3 pt-1 sm:flex-row sm:items-center">
                    <p className="text-xs text-[#5A5B62]">
                      All fields marked <span className="text-[#7B5455] font-bold">*</span> are required.
                    </p>
                    <motion.button
                      type="submit"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B5455] px-6.5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#654344] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B5455] shadow-xs cursor-pointer"
                    >
                      Submit Enquiry
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Right: Direct Contact Details & Map */}
          <Reveal delay={0.12} className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-3xl border border-[#2A2B30] bg-[#202124] p-6 text-white shadow-md sm:p-8">
              <span className="text-xs font-bold tracking-wider text-[#F4C2C2] uppercase">Direct Channel</span>
              <h3 className="mt-1 text-2xl font-extrabold text-white">Our Contact Details</h3>
              <p className="mt-1 text-sm text-slate-300">{COMPANY_INFO.name}</p>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F4C2C2]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-[#F4C2C2] uppercase">
                      Office Address
                    </dt>
                    <dd className="mt-1 leading-relaxed text-white font-medium">
                      {COMPANY_INFO.address.line1}
                      <br />
                      {COMPANY_INFO.address.line2}
                      <br />
                      {COMPANY_INFO.address.cityStatePin}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F4C2C2]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-[#F4C2C2] uppercase">
                      Phone Numbers
                    </dt>
                    <dd className="mt-1 flex flex-col gap-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          className="font-bold text-white transition-colors hover:text-[#F4C2C2] tabular-nums"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F4C2C2]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-[#F4C2C2] uppercase">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-bold text-white transition-colors hover:text-[#F4C2C2] break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F4C2C2]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-[#F4C2C2] uppercase">
                      Website
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={COMPANY_INFO.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white transition-colors hover:text-[#F4C2C2]"
                      >
                        {COMPANY_INFO.website}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Ghatkopar West Map */}
            <div className="overflow-hidden rounded-3xl border border-[#DBDAD7] bg-white shadow-xs">
              {showLiveMap ? (
                <div className="relative h-56 w-full bg-slate-100">
                  <iframe
                    title="Sidhvi Tech Solutions, Ghatkopar West, Mumbai Location Map"
                    src={COMPANY_INFO.address.googleMapsEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="relative flex h-56 flex-col items-center justify-center bg-[#EFEEEB] p-6 text-center">
                  <MapPin className="h-7 w-7 text-[#7B5455]" aria-hidden="true" />
                  <p className="mt-2.5 text-sm font-bold text-[#202124]">
                    Ghatkopar West, Mumbai 400086
                  </p>
                  <p className="mt-1 max-w-xs text-xs text-[#5A5B62]">
                    C-20 Kailash Esplanade, LBS Marg, Opp Shreyas Cinema
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowLiveMap(true)}
                    className="mt-4 rounded-xl border border-[#DBDAD7] bg-white px-3.5 py-1.5 text-xs font-bold text-[#202124] transition-colors hover:border-[#7B5455] cursor-pointer"
                  >
                    Load Interactive Map
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-[#DBDAD7] px-4 py-3 text-xs bg-[#FAF9F7]">
                <span className="font-semibold text-[#5A5B62]">
                  Google Map · Ghatkopar West
                </span>
                <a
                  href={COMPANY_INFO.address.googleMapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#7B5455] hover:text-[#202124]"
                >
                  Open in Maps
                  <ExternalLink className="h-3.5 w-3.5 text-[#7B5455]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
