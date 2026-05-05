import { useState } from "react";
import Hero from '@/layouts/Hero';
import '../styles/productos.css';
import ProductLoop from '@/layouts/ProductLoop';
import ProductFeatures from "../components/loop-products/ProductFeatures";
import productsData from "../data/products.json";

const Productos = () => {
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const product = productsData[activeProductIndex];

    const base = import.meta.env.BASE_URL?.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

    return (
        <>
            <Hero
                titulo2='Nuestros Productos'
            />
            <ProductLoop />

            <div className="full-container productos-banner" style={{ backgroundImage: `url(${base}assets/img/products/productos_banner.png)`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>

            <div className="full-container bg-blue" style={{ height: "30px" }}></div>

            <div className="full-container"
                style={{
                    padding: "50px 0"
                }}>
                <div className="container">
                    <h3 className="service-section-title" style={{ marginTop: "50px", marginBottom: "30px" }}>Características</h3>
                    <ProductFeatures key={product.id} features={product.features} />
                </div>
            </div>

            <div className="full-container bg-blue" style={{ height: "30px" }}></div>
            <div className="full-container productos-banner" style={{ backgroundImage: `url(${base}assets/img/products/productos_banner.png)`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>

            <div className="full-container">
                <div className="container cerramientos-header">
                    <h3 className="service-section-title" style={{ marginBottom: "0" }}>Cerramientos</h3>
                </div>
                <div className="container"
                    style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}
                >
                    <img src={`${base}assets/img/products/cerramientos/cerramientos.png`} alt="" />
                </div>
                <div className="container">
                    <div className="cerramientos-grid">
                        {[
                            { letter: "A.", title: "Cortina de Enorrollar", img: "cortina-enrollar.png" },
                            { letter: "B.", title: "Portón Corredizo", img: "porton-corredizo.png" },
                            { letter: "C.", title: "Puerta de Emergencia", img: "puerta-emergencia.png" },
                            { letter: "D.", title: "Puerta Peatonal", img: "puerta-peatonal.png" },
                        ].map((item) => (
                            <div key={item.letter} className="cerramiento-item">
                                <h6>{item.letter}</h6>
                                <h5><strong>{item.title}</strong></h5>
                                <img
                                    src={`${base}assets/img/products/cerramientos/${item.img}`}
                                    alt={item.title}
                                    className="cerramiento-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="full-container bg-blue" style={{ height: "30px" }}></div>
            <div className="full-container" style={{ backgroundImage: `url(${base}assets/img/products/adicionales/adicionales-banner.png)`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "400px" }}></div>

            <div className="full-container" style={{ paddingBottom: "100px" }}>
                <div className="container cerramientos-header">
                    <h3 className="service-section-title" style={{ marginBottom: "0" }}>Adicionales</h3>
                </div>
                <div className="container">
                    <div className="cerramientos-grid">
                        {[
                            { letter: "A.", title: "Extractores Eólicos", img: "extractores.png" },
                            { letter: "B.", title: "Iluminación LED", img: "iluminacion.png" },
                            { letter: "C.", title: "Topes de protección", img: "topes.png" },
                            { letter: "D.", title: "Aislación", img: "aislacion.png" },
                        ].map((item) => (
                            <div key={item.letter} className="cerramiento-item">
                                <h5><strong>{item.title}</strong></h5>
                                <img
                                    src={`${base}assets/img/products/adicionales/${item.img}`}
                                    alt={item.title}
                                    className="cerramiento-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Productos;
