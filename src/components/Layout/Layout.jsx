import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  );
}

export default Layout;
