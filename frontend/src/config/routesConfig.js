import { lazy } from "react";

import Home from '../pages/Home.jsx';
const Solucion = lazy(() => import('../pages/Solucion.jsx'));
const Nosotros = lazy(() => import('../pages/Nosotros.jsx'));
const Contacto = lazy(() => import('../pages/Contacto.jsx'));
const Montaje = lazy(() => import('../pages/Montaje.jsx'));
const Productos = lazy(() => import('../pages/Productos.jsx'));
const Proyectos = lazy(() => import('../pages/Proyectos.jsx'));


const routesConfig = {
    menuHome: [
        { path: "/", label: "Inicio", component: Home },
    ],
    menuLeft: [
        { path: "/nosotros", label: "Nosotros", component: Nosotros },
        { path: "/productos", label: "Productos", component: Productos },
        { path: "/proyectos", label: "Proyectos", component: Proyectos },
    ],

    menuRight: [
        { path: "/montaje", label: "Montaje", component: Montaje },
        { path: "/contacto", label: "Contacto", component: Contacto },
        { path: "#", label: "Presupuestar", component: null },
    ],
}

export default routesConfig;