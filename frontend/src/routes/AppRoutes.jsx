import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from '@/config/routesConfig';
import Layout from '@/components/Layout';

const AppRoutes = () => {
  return (
    <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Cargando...</div>}>
      <Routes>
        <Route element={<Layout />}>
          {routesConfig.mainMenu.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
