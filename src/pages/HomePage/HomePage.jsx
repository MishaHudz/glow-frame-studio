import BenefitsSection from 'components/BenefitsSection/BenefitsSection';
import ContactSection from 'components/ContactSection/ContactSection';
import ExampleSection from 'components/ExampleSection/ExampleSection';
import FAQSection from 'components/FAQSection/FAQSection';
import HeroSection from 'components/HeroSection/HeroSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ExampleSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
