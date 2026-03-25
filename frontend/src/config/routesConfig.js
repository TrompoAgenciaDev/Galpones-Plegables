import { lazy } from "react";

import Home from '../pages/Home.jsx';
const Solucion = lazy(() => import('../pages/Solucion.jsx'));
const Nosotros = lazy(() => import('../pages/Nosotros.jsx'));
const Contacto = lazy(() => import('../pages/Contacto.jsx'));
const Montaje = lazy(() => import('../pages/Montaje.jsx'));
const Modelos = lazy(() => import('../pages/Modelos.jsx'));
const Proyectos = lazy(() => import('../pages/Proyectos.jsx'));


const routesConfig = {
    menuHome: [
        { path: "/", label: "Inicio", component: Home },
    ],
    menuLeft: [
        { path: "/nosotros", label: "Nosotros", component: Nosotros },
        { path: "/solucion", label: "Solucion", component: Solucion },
        { path: "/modelos", label: "Modelos", component: Modelos },
    ],

    menuRight: [
        { path: "/montaje", label: "Montaje", component: Montaje },
        { path: "/proyectos", label: "Proyectos", component: Proyectos },
        { path: "/contacto", label: "Contacto", component: Contacto },
    ],
}

export default routesConfig;