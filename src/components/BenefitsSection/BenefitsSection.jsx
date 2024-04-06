import BenefitsList from 'components/BenefitsList/BenefitsList';
import { BenefitsSect, SectContainer } from './BenefitsSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';

function BenefitsSection() {
  const { isEnglish } = useContext(MyContext);

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
