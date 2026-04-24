import Hero from '@/layouts/Hero';
import '../styles/productos.css'

const Modelos = () => {

    const base = import.meta.env.BASE_URL?.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

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
                    <div className="grid-producto-item left-border-blue">
                        <p>
                            Cada uno puede ampliarse por módulos, adaptando las dimensiones finales a las necesidades específicas del proyecto.
                        </p>
                    </div>
                </div>
            </div>

            <div className="full-container productos-banner" style={{ backgroundImage: `url(${base}assets/img/products/productos_banner.png)`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>

            <ProductLoop />
        </>

    );
};

export default Modelos;
