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
      

      <PricingSection />
      <Footer/>
    </main>
  );
}