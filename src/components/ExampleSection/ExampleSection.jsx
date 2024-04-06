import ImageCarousel from 'components/ImageCarousel/ImageCarousel';
import { ExampleSect } from './ExampleSection.styled';
import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';
import { languageSelect } from 'helpers/languageSelect';

function ExampleSection() {
  const { isEnglish } = useContext(MyContext);
  return (
    <ExampleSect>
      <SectContainer>
        <SectionTitle title={languageSelect(isEnglish).MadeSection.title} />
        <ImageCarousel />
      </SectContainer>
    </ExampleSect>
  );
}

export default ExampleSection;
