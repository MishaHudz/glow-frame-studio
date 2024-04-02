import ImageCarousel from 'components/ImageCarousel/ImageCarousel';
import { ExampleSect } from './ExampleSection.styled';
import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';

function ExampleSection() {
  return (
    <ExampleSect>
      <SectContainer>
        <SectionTitle title="Виготовлені рамки" />
        <ImageCarousel />
      </SectContainer>
    </ExampleSect>
  );
}

export default ExampleSection;
