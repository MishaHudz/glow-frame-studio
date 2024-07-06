import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  HeroSect,
  HeroSectContentContainer,
  HeroSectInfoContainer,
  HeroSectInfoLink,
  HeroSectInfoParagraph,
} from './HeroSection.styled';
import Model3D from 'components/Model3D/Model3D';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';

function HeroSection() {
  const isEnglish = useSelector(state => state.language.isEnglish);
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  return (
    <HeroSect>
      <SectContainer>
        <HeroSectContentContainer>
          <HeroSectInfoContainer>
            <SectionTitle title={languageSelect(isEnglish).SectionHero.title} />
            {!isTabletScreen && <Model3D />}

            <HeroSectInfoParagraph>
              {languageSelect(isEnglish).SectionHero.description}
            </HeroSectInfoParagraph>
            <HeroSectInfoLink to="/order-litophanes">
              {languageSelect(isEnglish).SectionHero.link}
            </HeroSectInfoLink>
          </HeroSectInfoContainer>

          {isTabletScreen && <Model3D />}
        </HeroSectContentContainer>
      </SectContainer>
    </HeroSect>
  );
}

export default HeroSection;
