import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from '@/config/routesConfig';
import Layout from '@/layouts/Layout';

const AppRoutes = () => {
  const allRoutes = Object.values(routesConfig).flat();

  return (
    <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Cargando...</div>}>
      <Routes>
        <Route element={<Layout />}>
          {allRoutes.map((route) => (
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
