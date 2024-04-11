import { Link } from 'react-router-dom';
import {
  Head,
  HeadContainer,
  HeadRightContainer,
  HeaderMainIcon,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import LogoOrange from '../../assets/images/Logo_Orange.png';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';
import { useState } from 'react';
import MobileMenuModal from 'components/Modal/MobileMenuModal/MobileMenuModal';
import BurgerButton from 'components/BurgerButton/BurgerButton';
import NavigationList from 'components/NavigationList/NavigationList';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <Head>
        <HeadContainer>
          <Link to="/">
            <HeaderMainIcon
              src={LogoOrange}
              alt="logo"
              width="100px"
              height="100px"
            />
          </Link>

          <HeadRightContainer>
            {!isTabletScreen && (
              <BurgerButton setMobileMenuOpen={setMobileMenuOpen} />
            )}

            <MobileMenuModal
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
            {isTabletScreen && <NavigationList />}
            <LanguageSelect />
          </HeadRightContainer>
        </HeadContainer>
      </Head>
    </>
  );
}

export default Header;
