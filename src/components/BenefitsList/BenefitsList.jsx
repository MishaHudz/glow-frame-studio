import BenefitsListItem from 'components/BenefitsListItem/BenefitsListItem';

import BenefitsPhoto from '../../assets/images/benefits/photo.jpg';
import BenefitsGlass from '../../assets/images/benefits/glass.jpg';
import BenefitsTach from '../../assets/images/benefits/tach.jpg';
import BenefitsConnector from '../../assets/images/benefits/connector.jpg';
import BenefitsLight from '../../assets/images/benefits/light.jpg';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';
import { languageSelect } from 'helpers/languageSelect';
import { BenefitsLst } from './BenefitsList.styled';

function BenefitsList() {
  const { isEnglish } = useContext(MyContext);

  const Benefits = [
    {
      image: BenefitsPhoto,
      title: languageSelect(isEnglish).BenefitsSection.benefit1Title,
      description: languageSelect(isEnglish).BenefitsSection.benefit1,
    },
    {
      image: BenefitsGlass,
      title: languageSelect(isEnglish).BenefitsSection.benefit2Title,
      description: languageSelect(isEnglish).BenefitsSection.benefit2,
    },
    {
      image: BenefitsTach,
      title: languageSelect(isEnglish).BenefitsSection.benefit3Title,
      description: languageSelect(isEnglish).BenefitsSection.benefit3,
    },
    {
      image: BenefitsConnector,
      title: languageSelect(isEnglish).BenefitsSection.benefit4Title,
      description: languageSelect(isEnglish).BenefitsSection.benefit4,
    },
    {
      image: BenefitsLight,
      title: languageSelect(isEnglish).BenefitsSection.benefit5Title,
      description: languageSelect(isEnglish).BenefitsSection.benefit5,
    },
  ];

  return (
    <BenefitsLst>
      {Benefits.map((benefit, i) => (
        <BenefitsListItem key={i} benefit={benefit} />
      ))}
    </BenefitsLst>
  );
}

export default BenefitsList;
