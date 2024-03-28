import { NavLink } from 'react-router-dom';
import { Head } from './Header.styled';

function Header() {
  return (
    <>
      <Head>
        <NavLink to="/"> Home Page</NavLink>
        <NavLink to="/order-litophanes">Order Page</NavLink>
      </Head>
    </>
  );
}

export default Header;
