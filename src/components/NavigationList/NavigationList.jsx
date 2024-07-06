import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { languageSelect } from 'helpers/languageSelect';
import { HeadNavigationList } from './NavigationList.styled';

function NavigationList({ onCloseButtonClick = () => {} }) {
  const isEnglish = useSelector(state => state.language.isEnglish);

  const navigate = useNavigate();

  const onContactClick = () => {
    navigate('/#contacts');
    onCloseButtonClick();
  };
  return (
    <HeadNavigationList>
      <li>
        <NavLink to="/" onClick={onCloseButtonClick}>
          {languageSelect(isEnglish).HeaderNavigation.home}
        </NavLink>
      </li>
      <li>
        <NavLink to="/order-litophanes" onClick={onCloseButtonClick}>
          {languageSelect(isEnglish).HeaderNavigation.order}
        </NavLink>
      </li>

      <li>
        <a href="#contacts" onClick={onContactClick}>
          {languageSelect(isEnglish).HeaderNavigation.contact}
        </a>
      </li>
    </HeadNavigationList>
  );
}

export default NavigationList;
