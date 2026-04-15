import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Work />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
