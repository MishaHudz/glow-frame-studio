import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';
import Header from 'components/Header/Header';

function Layout() {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
