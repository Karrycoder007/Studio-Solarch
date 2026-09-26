import type { Metadata } from 'next';
import { PricingSection } from '@/components/PricingSection'; // ✅ named import // adjust path to match your project
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Pricing for Studio Solarch — custom Next.js website development and real estate, architecture & hospitality photography, with drone and HDR coverage.',
  alternates: {
    canonical: 'https://www.studiosolarch.com/pricing',
  },
  openGraph: {
    title: 'Pricing | Studio Solarch',
    description:
      'Pricing for Studio Solarch — custom Next.js website development and real estate, architecture & hospitality photography.',
    url: 'https://www.studiosolarch.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg)' }} className="transition-colors">
      <section className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40 pb-8">
        <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--accent-warm)' }}>
          PRICING GUIDE — 2026
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-6xl" style={{ color: 'var(--fg)' }}>
          Craft that travels.{' '}
          <span className="italic" style={{ color: 'var(--accent)' }}>
            Priced clearly.
          </span>
        </h1>
        <p className="mt-5 max-w-xl" style={{ color: 'var(--fg-muted)' }}>
          Two crafts, one studio. Browse website development and real estate
          photography pricing below — every project is scoped individually,
          these are starting points.
        </p>
      </section>

      <PricingSection />
      <Footer/>
    </main>
  );
}