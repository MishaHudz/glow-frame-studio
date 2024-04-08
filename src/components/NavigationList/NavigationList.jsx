import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from 'сontext/context';

import { languageSelect } from 'helpers/languageSelect';
import { HeadNavigationList } from './NavigationList.styled';

function NavigationList({ setMobileMenuOpen }) {
  const { isEnglish } = useContext(MyContext);
  const onLinkClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <HeadNavigationList>
      <li>
        <NavLink to="/" onClick={onLinkClick}>
          {languageSelect(isEnglish).HeaderNavigation.home}
        </NavLink>
      </li>
      <li>
        <NavLink to="/order-litophanes" onClick={onLinkClick}>
          {languageSelect(isEnglish).HeaderNavigation.order}
        </NavLink>
      </li>

      <li>
        <a href="#contacts" onClick={onLinkClick}>
          {languageSelect(isEnglish).HeaderNavigation.contact}
        </a>
      </li>
    </HeadNavigationList>
  );
}

export default NavigationList;
