import { lazy } from "react";

import Home from '../pages/Home.jsx';
const Productos = lazy(()=>import('../pages/Productos.jsx'));
const SobreNosotros = lazy(()=>import('../pages/SobreNosotros.jsx'));
const CasosExito = lazy(()=>import('../pages/CasosExito.jsx'));
const Presupuestar = lazy(()=>import('../pages/Presupuestar.jsx'));


const routesConfig = {
    mainMenu: [
        {path: "/", label: "Inicio", component: Home},
        {path: "/productos", label: "Productos", component: Productos},
        {path: "/sobre-nosotros", label: "Sobre Nosotros", component: SobreNosotros},
        {path: "/casos-exito", label: "Casos de Éxito", component: CasosExito},
        {path: "/presupuestar", label: "Presupuestar", component: Presupuestar},
    ],
}

export default routesConfig;