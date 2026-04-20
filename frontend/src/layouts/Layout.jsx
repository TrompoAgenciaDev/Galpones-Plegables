import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from '@/components/buttons/ScrollTop';
import Presupuestar from '@/components/buttons/Presupuestar.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
      <ScrollTop />
      <Presupuestar />
    </>
  );
};

export default Layout;