import TopNav from '../components/TopNav';
import HeroNew from '../components/HeroNew';
import PainPoints from '../components/PainPoints';
import FeatureCarousel from '../components/FeatureCarousel';
import ProofSection from '../components/ProofSection';
import CTASectionNew from '../components/CTASectionNew';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Landing() {
  return (
    <div className="min-h-screen bg-ui-background">
      <TopNav />
      <main>
        <HeroNew />
        <PainPoints />
        <FeatureCarousel />
        <ProofSection />
        <CTASectionNew />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
