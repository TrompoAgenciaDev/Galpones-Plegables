import Hero from '@/layouts/Hero';
import '../styles/productos.css'

const Modelos = () => {
    return (
        <>
            <Hero
                titulo2='Nuestros Proyectos'
            />
            <div className="full-container productos-container-info">
                <div className="container">
                    <p className="upper-text subtitle-text-productos">
                        La línea de productos se organiza en dos modelos de distinta escala, ambos basados en el mismo sistema plegable y modular.
                    </p>
                </div>
                <div className="container grid-productos">
                    <div className="grid-producto-item">
                        <img src="../../assets/img/about.gif" alt="" />
                    </div>
                    <div className="grid-producto-item">
                        <p>
                            Cada uno puede ampliarse por módulos, adaptando las dimensiones finales a las necesidades específicas del proyecto.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modelos;
