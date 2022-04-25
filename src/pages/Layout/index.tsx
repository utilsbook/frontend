import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Main from '../../components/Main';
import './index.scss';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
