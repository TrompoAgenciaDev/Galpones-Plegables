import Hero from '../layouts/Hero';
import Recientes from '../layouts/Recientes';

const Proyectos = () => {
    return (
        <>
            <Hero
                titulo2='Nuestros proyectos'
                location='proyectos'
            />
            <Recientes
                titulo='Proyectos'
            />
        </>
    );
};

export default Proyectos;
