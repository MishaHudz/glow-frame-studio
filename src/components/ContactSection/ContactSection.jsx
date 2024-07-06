import { useSelector } from 'react-redux';
import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { ContactSect } from './ContactSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';

import ContactList from 'components/ContactList/ContactList';

function ContactSection() {
  const isEnglish = useSelector(state => state.language.isEnglish);
  return (
    <ContactSect>
      <SectContainer id="contacts">
        <SectionTitle title={languageSelect(isEnglish).ContactSection.title} />
        <ContactList />
      </SectContainer>
    </ContactSect>
  );
}

export default ContactSection;
