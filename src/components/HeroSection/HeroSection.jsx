import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { HeroSect } from './HeroSection.styled';
import Model3D from 'components/Model3D/Model3D';

function HeroSection() {
  return (
    <HeroSect>
      <SectContainer>
        <Model3D />
      </SectContainer>
    </HeroSect>
  );
}

export default HeroSection;
