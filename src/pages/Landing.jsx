import TopNav from '../components/TopNav';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import Benefits from '../components/Benefits';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Landing() {
  return (
    <div className="min-h-screen bg-ui-background">
      <TopNav />
      <main>
        <Hero />
        <FeatureCards />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
