import BenefitsList from 'components/BenefitsList/BenefitsList';
import { BenefitsSect, SectContainer } from './BenefitsSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';
import { useSelector } from 'react-redux';

function BenefitsSection() {
  const isEnglish = useSelector(state => state.language.isEnglish);

  return (
    <BenefitsSect>
      <SectContainer>
        <SectionTitle title={languageSelect(isEnglish).BenefitsSection.title} />
        <BenefitsList />
      </SectContainer>
    </BenefitsSect>
  );
}

export default BenefitsSection;
