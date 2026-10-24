import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FivePillars } from '@/components/FivePillars';
import { Vision } from '@/components/Vision';
import { JoinCta } from '@/components/JoinCta';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <FivePillars />
        <Vision />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
}
