import { languageSelect } from 'helpers/languageSelect';
import { useSelector } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import {
  ContactLst,
  ContactLstDescription,
  ContactLstItem,
  ContactLstItemIcon,
  ContactLstLink,
  ContactLstTitle,
} from './ContactList.styled';

function ContactList() {
  const isEnglish = useSelector(state => state.language.isEnglish);

  return (
    <ContactLst>
      <ContactLstItem>
        <ContactLstItemIcon width="32px" height="32px">
          <use xlinkHref={`${sprite}#home`} />
        </ContactLstItemIcon>
        <ContactLstTitle>
          {languageSelect(isEnglish).ContactSection.addressTitle}
        </ContactLstTitle>
        <ContactLstDescription>
          {languageSelect(isEnglish).ContactSection.addressDescription}
        </ContactLstDescription>
        <ContactLstLink
          href="https://maps.app.goo.gl/Xo5h93CeSgHDmycG9"
          target="_blank"
          rel="noopener noreferrer"
        >
          {languageSelect(isEnglish).ContactSection.addressLink}
        </ContactLstLink>
      </ContactLstItem>

      <ContactLstItem>
        <ContactLstItemIcon width="32px" height="32px">
          <use xlinkHref={`${sprite}#phone`} />
        </ContactLstItemIcon>
        <ContactLstTitle>
          {languageSelect(isEnglish).ContactSection.tellTitle}
        </ContactLstTitle>
        <ContactLstDescription>
          {languageSelect(isEnglish).ContactSection.tellDescription}
        </ContactLstDescription>
        <ContactLstLink
          href="tel:+380222222222 "
          target="_blank"
          rel="noopener noreferrer"
        >
          +38 (063) 222 22 22
        </ContactLstLink>
      </ContactLstItem>

      <ContactLstItem>
        <ContactLstItemIcon width="32px" height="32px">
          <use xlinkHref={`${sprite}#email`} />
        </ContactLstItemIcon>
        <ContactLstTitle>
          {languageSelect(isEnglish).ContactSection.mailTitle}
        </ContactLstTitle>
        <ContactLstDescription>
          {languageSelect(isEnglish).ContactSection.mailDescription}
        </ContactLstDescription>
        <ContactLstLink
          href="mailto:frame@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          frame@gmail.com
        </ContactLstLink>
      </ContactLstItem>
    </ContactLst>
  );
}

export default ContactList;
