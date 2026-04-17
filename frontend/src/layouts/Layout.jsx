import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from '@/components/buttons/ScrollTop';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Layout;