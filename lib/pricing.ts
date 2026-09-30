export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  priceIndia: string; // e.g. '₹25,000'
  priceIntl?: string; // e.g. '$500' — set deliberately, not a straight currency conversion
  priceNote: string; // e.g. 'onwards'
  features: string[];
  featured?: boolean;
  custom?: boolean; // when true, hides numeric prices and shows a "Custom" CTA instead
};

export const pricingTiers: PricingTier[] = [
  {
    id: 'studio',
    name: 'Full Studio',
    tagline: 'Complex builds, e-commerce, photography & SEO — fully bespoke',
    priceIndia: 'Custom',
    priceNote: 'scoped to your project',
    features: [
      'Everything in Signature',
      'Scoped to exactly what your project needs — e-commerce, booking systems, or custom integrations, only if required',
      'On-location photography & drone coverage, if needed',
      'Full SEO strategy & technical setup',
      'Brand system: logo, palette, typography',
      'Single point of contact, start to finish',
    ],
    custom: true,
  },

  {
    id: 'signature',
    name: 'Signature',
    tagline: 'Hotels, hospitality, premium & celebrity brands',
    priceIndia: '₹85,000',
    priceIntl: '$1,500',
    priceNote: 'onwards',
    features: [
      'Up to 5 pages, custom UI system',
      'Advanced GSAP / Framer Motion animation',
      'Gallery & listings pages, built to your content',
      'Multi-language ready',
    ],
    featured: true,
  },
  {
    id: 'starter',
    name: 'Portfolio',
    tagline: 'Personal brands, freelancers, small studios',
    priceIndia: '₹30,000',
    priceIntl: '$700',
    priceNote: 'onwards',
    features: [
      'Up to 2 pages, fully responsive',
      'Custom design — no templates',
      'Light motion & scroll animation',
      'Basic on-page SEO setup',
      '1 weeks delivery',
    ],
  },

];

export const photographyTiers: PricingTier[] = [
  {
    id: 'estate',
    name: 'Estate',
    tagline: 'Luxury villas, boutique hotels & resorts',
    priceIndia: '₹32,000',
    priceNote: 'onwards, per shoot',
    features: [
      'Full day on-site, up to 8 hours',
      '80+ edited HDR photos — every room, amenity & exterior',
      '15 drone stills + 60-sec cinematic aerial film',
      'Golden-hour / twilight exterior session',
      '30–45 sec vertical reel for Instagram & Reels',
      'Full commercial licence · delivery in 5 days',
    ],
  },
  {
    id: 'signature-photo',
    name: 'Signature',
    tagline: 'Villas, larger flats & premium listings',
    priceIndia: '₹14,500',
    priceNote: 'onwards, per shoot',
    features: [
      'Up to 4 BHK / villas up to 3,000 sq ft',
      '40 edited HDR photos incl. detail & lifestyle frames',
      '8 drone aerial stills — plot, façade & surroundings',
      'Bracketed HDR: up to 5 exposures, hand-blended',
      'Delivery in 72 hours · 1 revision round',
    ],
    featured: true,
  },
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Flats & apartments — resale, rental and builder listings',
    priceIndia: '₹6,500',
    priceNote: 'onwards, per shoot',
    features: [
      'Up to 2 BHK (~1,200 sq ft)',
      '20 edited photos — interiors + building exterior',
      'Bracketed HDR: 3 exposures per frame, hand-blended',
      'Colour, window-pull & vertical-line correction',
      'Delivery in 48 hours',
    ],
  },
];