import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit, DM_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { CustomCursor } from '@/components/CustomCursor';

import { Preloader } from '@/components/Preloader';
import { ContactModalProvider } from '@/components/ContactModalContext';
import { LoaderProvider } from '@/components/LoaderContext';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://www.studiosolarch.com';
const SITE_NAME = 'Studio Solarch';
const SITE_TITLE = 'Studio Solarch — Web Development & Photography for Hotels & Hospitality';
const SITE_DESCRIPTION =
  'Studio Solarch is a Goa-based web development and photography studio building fast, considered websites and shooting location photography for hotels, hospitality, and premium brands.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Studio Solarch',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'web development studio Goa',
    'hotel website design',
    'hospitality photography',
    'Next.js web developer India',
    'commercial photography Goa',
    'website design for resorts',
  ],
  authors: [{ name: 'Studio Solarch' }],
  creator: 'Studio Solarch',
  publisher: 'Studio Solarch',
  category: 'technology',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Solarch — Web Development & Photography Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // Get this value from Google Search Console after you verify the property there
  verification: {
    google: 'REPLACE_WITH_YOUR_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Studio Solarch',
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ponda',
    addressRegion: 'GA',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  priceRange: '₹₹',
  sameAs: [
    // Add Studio Solarch's own social profiles here once set up
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <LoaderProvider>
          <Preloader />
          <ThemeProvider>
            <ContactModalProvider>
              <CustomCursor />
              <Navbar />
              <PageTransition>{children}</PageTransition>
            </ContactModalProvider>
          </ThemeProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}