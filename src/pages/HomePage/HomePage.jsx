import BenefitsSection from 'components/BenefitsSection/BenefitsSection';
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
    </>
  );
}

export default HomePage;
