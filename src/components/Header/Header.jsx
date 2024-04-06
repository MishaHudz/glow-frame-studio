import { Link, NavLink } from 'react-router-dom';
import {
  Head,
  HeadContainer,
  HeadNavigationList,
  HeadRightContainer,
} from './Header.styled';

import LogoOrange from '../../assets/images/Logo_Orange.png';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';
import { useContext } from 'react';
import { MyContext } from 'сontext/context';
import { languageSelect } from 'helpers/languageSelect';

function Header() {
  const { isEnglish } = useContext(MyContext);

  return (
    <>
      <Head>
        <HeadContainer>
          <Link to="/">
            <img src={LogoOrange} alt="logo" width="100px" height="100px" />
          </Link>

          <HeadRightContainer>
            <HeadNavigationList>
              <li>
                <NavLink to="/">
                  {languageSelect(isEnglish).HeaderNavigation.home}
                </NavLink>
              </li>
              <li>
                <NavLink to="/order-litophanes">
                  {languageSelect(isEnglish).HeaderNavigation.order}
                </NavLink>
              </li>
              <li>
                <a href="#contacts">
                  {languageSelect(isEnglish).HeaderNavigation.contact}
                </a>
              </li>
            </HeadNavigationList>

            <LanguageSelect />
          </HeadRightContainer>
        </HeadContainer>
      </Head>
    </>
  );
}

export default Header;
