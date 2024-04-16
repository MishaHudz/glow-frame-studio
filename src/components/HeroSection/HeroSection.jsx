import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
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
import { useContext } from 'react';
import { MyContext } from 'сontext/context';

function HeroSection() {
  const { isEnglish } = useContext(MyContext);
  return (
    <HeroSect>
      <SectContainer>
        <SectionTitle title={languageSelect(isEnglish).SectionHero.title} />

        <HeroSectContentContainer>
          <HeroSectInfoContainer>
            <HeroSectInfoParagraph>
              {languageSelect(isEnglish).SectionHero.description}
            </HeroSectInfoParagraph>

            <HeroSectInfoLink to="/order-litophanes">
              {languageSelect(isEnglish).SectionHero.link}
            </HeroSectInfoLink>
          </HeroSectInfoContainer>

          <Model3D />
        </HeroSectContentContainer>
      </SectContainer>
    </HeroSect>
  );
}

export default HeroSection;
