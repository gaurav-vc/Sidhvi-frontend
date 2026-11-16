export interface ServiceItem {
  id: string;
  title: string;
  category: 'security' | 'ict' | 'infrastructure';
  iconName:
    | 'Cctv'
    | 'ShieldCheck'
    | 'PhoneCall'
    | 'Video'
    | 'Network'
    | 'Server'
    | 'Car'
    | 'Radio'
    | 'Monitor'
    | 'Building2'
    | 'Wrench';
  shortSummary: string;
  offerings: string[];
  /** Replace with a real photo path (e.g., "/images/services/cctv.jpg") when ready */
  image?: string;
  imagePlaceholderLabel: string;
  relatedTaglineHighlight?: string;
}

export interface ClientItem {
  name: string;
  sector?: string;
  /** Replace with a real logo path (e.g., "/images/clients/mayfair.png") when ready */
  logoUrl?: string;
  accentColor: string;
}

export interface PartnerItem {
  name: string;
  qualifier?: string;
  /** Replace with a real logo path (e.g., "/images/partners/hikvision.png") when ready */
  logoUrl?: string;
  accentColor: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  summary: string;
}

export const COMPANY_INFO = {
  name: 'Sidhvi Tech Solutions',
  tagline:
    'CCTV Surveillance | Video Door Phones | EPBX | Biometric Solutions | Home & Office Automation',
  foundedYear: '2015',
  experienceSummary: '50+ years of combined experience',
  lifecycleSummary:
    'Consultation • Design • Installation • Commissioning • Maintenance • Monitoring',
  address: {
    line1: 'C-20 Kailash Esplanade, LBS Marg',
    line2: 'Opp Shreyas Cinema, Ghatkopar West',
    cityStatePin: 'Mumbai 400086',
    full: 'C-20 Kailash Esplanade, LBS Marg, Opp Shreyas Cinema, Ghatkopar West, Mumbai 400086',
    googleMapsQuery:
      'https://www.google.com/maps/search/?api=1&query=Kailash+Esplanade+LBS+Marg+Ghatkopar+West+Mumbai+400086',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Kailash%20Esplanade,%20LBS%20Marg,%20Ghatkopar%20West,%20Mumbai%20400086&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  phones: [
    {
      display: '+91 98198 84814',
      href: 'tel:+919819884814',
      whatsappHref: 'https://wa.me/919819884814',
    },
    {
      display: '+91 98198 95476',
      href: 'tel:+919819895476',
    },
  ],
  email: 'sales@sidhvitechsolutions.com',
  website: 'www.sidhvitechsolutions.com',
  websiteUrl: 'http://www.sidhvitechsolutions.com',
};

export const HERO_CONTENT = {
  headline: 'Integrated Security, Surveillance & ICT Solutions',
  subline: COMPANY_INFO.tagline,
  description:
    'Tailored systems for business, home, and personal needs—delivered end to end from solution consultation and design through installation, commissioning, maintenance, and monitoring.',
  primaryCta: 'Our Services',
  secondaryCta: 'Contact Us',
  /** Modern commercial surveillance and security operations command center */
  heroImage:
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  heroImagePlaceholderLabel:
    'Hero Visual — Modern Commercial Surveillance & Access Control Operations',
};

export const ABOUT_CONTENT = {
  title: 'About Sidhvi Tech Solutions',
  storyParagraphs: [
    'An integrated technology solutions company active in the fields of ICT, automation, access control, security and surveillance.',
    'Founded in 2015, Sidhvi Tech Solutions has over 50 years of combined experience in providing specialized integrated technology solutions to a variety of customers.',
    'The company currently offers all its customers complete security systems and solutions tailored to their business, home and personal needs. We pride ourselves on our ability to supply and deliver fully integrated advanced surveillance, security and ICT systems, including solution consultation, design, installation, commissioning, maintenance and monitoring.',
  ],
  /** Corporate facility and integrated architecture */
  aboutImage:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
  aboutImagePlaceholderLabel:
    'About Visual — Corporate Facility & Integrated Systems Architecture',
  vision:
    'Be a globally respected technology enterprise enriching lives by creating value for stakeholders and being socially responsible.',
  mission: [
    'Provide globally cost effective, best-in-class technology solutions and services to enable profitable growth through superior customer service, innovation, quality and commitment by maintaining fairness, transparency and ethical practices.',
    'Create an environment of success where there is freedom and empowerment which comes with ownership.',
  ],
};

export const CORE_VALUES: string[] = [
  'Integrity',
  'Customer delight',
  'Ethical & compliant',
  'Empowerment',
  'Honesty & Trust',
  'Transparency',
  'Fairness',
  'Passion to succeed',
  'Deliver on promises',
  'Ownership',
];

export const VALUE_PROPOSITION_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Presales Support',
    summary:
      'Understanding site requirements and aligning technical capabilities for business, home, and personal needs.',
  },
  {
    step: '02',
    title: 'End Customer Sales Support',
    summary:
      'Transparent solution consultation and scoping tailored to operational and security objectives.',
  },
  {
    step: '03',
    title: 'Designing Services',
    summary:
      'Engineering integrated surveillance, access control, ICT, cabling, and building management architectures.',
  },
  {
    step: '04',
    title: 'Installation',
    summary:
      'Structured deployment, cabling, hardware commissioning, and site integration by skilled professionals.',
  },
  {
    step: '05',
    title: 'Training & Certification',
    summary:
      'Enabling customer teams with structured operational handover and system proficiency.',
  },
  {
    step: '06',
    title: 'Maintenance & Support Services',
    summary:
      'Ongoing planned, remedial, and reactive maintenance alongside care systems and equipment refurbishment.',
  },
];

export const SERVICE_HIGHLIGHTS = [
  {
    id: 'biometric-solutions',
    title: 'Biometric Solutions',
    description:
      'Part of our core security offering—integrated with Door Controllers, Turnstiles, and Digitised People Management.',
    targetServiceId: 'access-control',
    targetLabel: 'Explore Access Control',
  },
  {
    id: 'home-office-automation',
    title: 'Home & Office Automation',
    description:
      'Unified control across residential and commercial environments, connecting Video Door Phones, Intercoms, and IBMS.',
    targetServiceId: 'ibms',
    targetLabel: 'Explore IBMS & Automation',
  },
];

export const WHO_WE_SERVE =
  'Complete security and technology systems tailored to business, home, and personal needs—trusted across real estate, corporate workplaces, retail, finance, shipping, and automotive organisations.';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cctv',
    title: 'CCTV',
    category: 'security',
    iconName: 'Cctv',
    shortSummary:
      'Indoor, outdoor, perimeter, and AI-empowered surveillance systems with 24/7 colour imaging and alarm integration.',
    offerings: [
      'Indoor Surveillance',
      'Outdoor Surveillance',
      'AI Empowered Surveillance',
      'Perimeter Surveillance',
      'Ultra Wide Area',
      '24/7 Colour Image',
      'PTZ',
      'Alarm',
    ],
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'AI CCTV & Perimeter Surveillance Cameras',
  },
  {
    id: 'access-control',
    title: 'Access Control',
    category: 'security',
    iconName: 'ShieldCheck',
    shortSummary:
      'Physical entry control, biometric-ready door controllers, barriers, turnstiles, and ANPR-enabled vehicle access.',
    offerings: [
      'Door Controller',
      'Boom Barriers',
      'Flap Barriers',
      'Swing Barriers',
      'Turnstile',
      'Digitised People Management',
      'Car Management Using ANPR & Parking Management',
    ],
    relatedTaglineHighlight: 'Supports Biometric Solutions',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Access Control, Turnstiles & Boom Barriers',
  },
  {
    id: 'intercom-pabx',
    title: 'Intercom & PABX',
    category: 'ict',
    iconName: 'PhoneCall',
    shortSummary:
      'Reliable voice communication infrastructure for buildings and offices across IP, analogue, and VDP-integrated systems.',
    offerings: [
      'Building Intercom Systems',
      'PABX Systems – IP & Analogue',
      'VDP Integrated Intercom Systems',
    ],
    image:
      'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Building Intercom & EPBX / PABX Hardware',
  },
  {
    id: 'video-door-phones',
    title: 'Video Door Phones',
    category: 'security',
    iconName: 'Video',
    shortSummary:
      'Visual visitor verification for homes, apartments, and offices—seamlessly integrable with building intercom systems.',
    offerings: [
      'Video Door Phones for Home & Office Needs',
      'VDP Integrated Intercom Systems',
    ],
    relatedTaglineHighlight: 'Supports Home & Office Automation',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Video Door Phone & Entry Verification',
  },
  {
    id: 'data-ftth',
    title: 'Data & FTTH Systems',
    category: 'ict',
    iconName: 'Network',
    shortSummary:
      'Structured copper and fibre cabling backbones engineered for high-reliability video, voice, surveillance, and data.',
    offerings: [
      'Standard 4+1 CCTV Cabling',
      'Cat6 Cabling – Data, Voice & Surveillance',
      'Fibre Cabling – FTTH – Video, Voice, & Data',
    ],
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Cat6 & FTTH Optical Fibre Cabling',
  },
  {
    id: 'it-systems',
    title: 'IT Systems',
    category: 'ict',
    iconName: 'Server',
    shortSummary:
      'End-to-end IT hardware procurement—available on rental or outright purchase—alongside wired and wireless network setup.',
    offerings: [
      'IT Hardware – Rentals & Outright',
      'Network Setup – Wired & Wireless',
    ],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Enterprise IT Hardware & Networking Systems',
  },
  {
    id: 'people-parking',
    title: 'People & Parking Management',
    category: 'security',
    iconName: 'Car',
    shortSummary:
      'End-to-end management of people and vehicles combining ANPR, barriers, paperless visitor workflows, and intelligent software.',
    offerings: [
      'End to End Management – People & Vehicles',
      'Secure & Efficient – Access Control, ANPR & Barriers',
      'Digitalised & Paperless Visitor Management',
      'Intelligent Software Management',
    ],
    image:
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'ANPR Parking & Digital Visitor Management',
  },
  {
    id: 'mobile-signal-boosting',
    title: 'Mobile Signal Boosting',
    category: 'ict',
    iconName: 'Radio',
    shortSummary:
      'Targeted RF coverage enhancement and wired/wireless network setup for zones experiencing weak cellular reception.',
    offerings: [
      'Improve mobile signal coverage in areas with weak mobile signal',
      'Network Setup – Wired & Wireless',
    ],
    image:
      'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Indoor Mobile Signal Coverage Enhancement',
  },
  {
    id: 'commercial-displays',
    title: 'Commercial Displays / Video Walls',
    category: 'infrastructure',
    iconName: 'Monitor',
    shortSummary:
      'High-impact commercial display installations including seamless LED walls, interactive kiosks, and digital signage.',
    offerings: ['LED Walls', 'Kiosks', 'Digital Signage'],
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Commercial LED Video Walls & Kiosks',
  },
  {
    id: 'ibms',
    title: 'IBMS',
    category: 'infrastructure',
    iconName: 'Building2',
    shortSummary:
      'Integrated Building Management System unifying HVAC, lighting, security, fire, and building automation in one platform.',
    offerings: [
      'Single, comprehensive building management system for HVAC, lighting, security, fire and other systems',
    ],
    relatedTaglineHighlight: 'Core platform for Home & Office Automation',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Integrated Building Management Console & Automation',
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    category: 'infrastructure',
    iconName: 'Wrench',
    shortSummary:
      'Full-lifecycle after-sales care covering planned, remedial, and reactive maintenance, AMCs, and equipment refurbishment.',
    offerings: [
      'Planned Maintenance',
      'Remedial Maintenance',
      'Reactive Maintenance',
      'Care Systems – Comprehensive & Non-Comprehensive',
      'Refurbishment of the equipment',
    ],
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    imagePlaceholderLabel: 'Technical Support & Preventive Maintenance Care',
  },
];

export const TEAM_CONTENT = {
  title: 'Our Team',
  lead: 'Skilled professionals dedicated to integrated delivery.',
  body: 'We recognize that our employees are our most valuable asset. We foster a culture of inclusivity, collaboration, and continuous growth, empowering our workforce to reach their full potential. Our team consists of highly skilled professionals from diverse backgrounds, bringing a wealth of expertise and perspectives to the table.',
  /** Sidhvi Tech Solutions engineering and support workforce */
  teamImage:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  teamImagePlaceholderLabel:
    'Team Visual — Sidhvi Tech Solutions Engineering & Delivery Team',
};

export const CLIENTS: ClientItem[] = [
  { name: 'Mayfair', sector: 'Real Estate', accentColor: '#1F2A5C' },
  { name: 'Neerja Group of Companies', sector: 'Enterprise', accentColor: '#D97706' },
  { name: 'Hubtown', sector: 'Real Estate', accentColor: '#1F2A5C' },
  { name: 'Indiabulls Real Estate', sector: 'Real Estate', accentColor: '#15803D' },
  { name: 'Sunteck', sector: 'Real Estate', accentColor: '#B45309' },
  { name: 'Vraj Group', sector: 'Real Estate', accentColor: '#1F2A5C' },
  { name: 'Axis Mutual Fund', sector: 'Finance', accentColor: '#97144D' },
  { name: 'Sterling Shipping Services Ltd', sector: 'Logistics', accentColor: '#1D4ED8' },
  { name: 'Sugee', sector: 'Real Estate', accentColor: '#0284C7' },
  { name: 'Reliance Retail', sector: 'Retail', accentColor: '#E31E24' },
  { name: '7-Eleven', sector: 'Retail', accentColor: '#EA580C' },
  { name: 'Chrome', sector: 'Enterprise', accentColor: '#1F2A5C' },
  { name: 'Jio', sector: 'Telecom', accentColor: '#E31E24' },
  { name: 'CBRE', sector: 'Commercial Real Estate', accentColor: '#003F2D' },
  { name: 'Kiran Motors Maharashtra', sector: 'Automotive', accentColor: '#CA8A04' },
  { name: 'TruCap Finance Limited', sector: 'Finance', accentColor: '#EA580C' },
  { name: 'Happy Home', sector: 'Real Estate', accentColor: '#334155' },
];

export const PARTNERS: PartnerItem[] = [
  {
    name: 'Hikvision',
    qualifier: 'Official Partner',
    accentColor: '#E31E24',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Hikvision_logo.svg',
  },
  {
    name: 'CP Plus',
    accentColor: '#E31E24',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cp_plus_logo.png/640px-Cp_plus_logo.png',
  },
  {
    name: 'Dahua',
    accentColor: '#E31E24',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dahua_Technology_logo.svg',
  },
  { name: 'Onetouch', accentColor: '#7C3AED' },
  { name: 'Zicom', accentColor: '#E31E24' },
  { name: 'Matrix', qualifier: 'Telecom | Security', accentColor: '#0E7490' },
  { name: 'Syntel', qualifier: 'Arvind Limited, Telecom Division', accentColor: '#1F2A5C' },
  {
    name: 'D-Link',
    accentColor: '#0284C7',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/D-Link_logo.svg',
  },
  {
    name: 'Honeywell',
    accentColor: '#E31E24',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Honeywell_logo.svg',
  },
  { name: 'Polycab', accentColor: '#E31E24' },
  {
    name: 'Seagate',
    accentColor: '#65A30D',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Seagate_logo.svg',
  },
  {
    name: 'Panasonic',
    accentColor: '#0055A5',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Panasonic_logo_%28Blue%29.svg',
  },
];
