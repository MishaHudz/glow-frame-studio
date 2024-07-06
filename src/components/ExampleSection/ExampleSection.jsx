import { useSelector } from 'react-redux';
import ImageCarousel from 'components/ImageCarousel/ImageCarousel';
import { ExampleSect } from './ExampleSection.styled';
import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';

function ExampleSection() {
  const isEnglish = useSelector(state => state.language.isEnglish);
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
