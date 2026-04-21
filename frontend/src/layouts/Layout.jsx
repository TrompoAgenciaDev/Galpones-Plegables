import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from '@/components/buttons/ScrollTop';
import Presupuestar from '@/components/buttons/Presupuestar.jsx';
import SeoRoute from '@/seo/SeoRoute.jsx';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <SeoRoute pathname={location.pathname} />
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
      <Presupuestar />
    </>
  );
};

export default Layout;