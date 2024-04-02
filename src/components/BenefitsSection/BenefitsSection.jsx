import BenefitsList from 'components/BenefitsList/BenefitsList';
import { BenefitsSect, SectContainer } from './BenefitsSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';

function BenefitsSection() {
  return (
    <BenefitsSect>
      <SectContainer>
        <SectionTitle title="Переваги" />
        <BenefitsList />
      </SectContainer>
    </BenefitsSect>
  );
}

export default BenefitsSection;
