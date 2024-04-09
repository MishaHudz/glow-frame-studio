import { SectContainer } from 'components/BenefitsSection/BenefitsSection.styled';
import { ContactSect } from './ContactSection.styled';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { languageSelect } from 'helpers/languageSelect';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';
import ContactList from 'components/ContactList/ContactList';

function ContactSection() {
  const { isEnglish } = useContext(MyContext);
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
