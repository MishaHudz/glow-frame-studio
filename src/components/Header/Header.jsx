import { Link, NavLink } from 'react-router-dom';
import { Head, HeadContainer, HeadNavigationList } from './Header.styled';

import LogoOrange from '../../assets/images/Logo_Orange.png';

function Header() {
  return (
    <>
      <Head>
        <HeadContainer>
          <Link to="/">
            <img src={LogoOrange} alt="logo" width="100px" height="100px" />
          </Link>
          <HeadNavigationList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/order-litophanes">Order</NavLink>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </HeadNavigationList>
        </HeadContainer>
      </Head>
    </>
  );
}

export default Header;
