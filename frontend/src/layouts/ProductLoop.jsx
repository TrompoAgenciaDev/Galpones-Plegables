import { useState } from "react";
import productsData from "../data/products.json";
import ProductFeatures from "../components/loop-products/ProductFeatures";
import '../styles/product-loop.css'

const formatKey = (key) => {
    const map = {
        frente: "Frente",
        altura: "Altura utilizable",
        profundidad: "Profundidad x módulo",
        superficie: "Superficie x módulo",
        estructura: "Estructura",
        cubierta: "Cubierta",
        cerramientos: "Cerramientos"
    };
    return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
};

const ProductLoop = () => {
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const product = productsData[activeProductIndex];

    const base = import.meta.env.BASE_URL?.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

    return (
        <>
            <div className="full-container product-loop-wrapper">
                <div className="container">
                    <h2>Modelos</h2>
                </div>
                <div className="container">
                    <div className="header-product" style={{ display: "flex", gap: "30px", borderBottom: "1px solid var(--terciary-color)", paddingBottom: "10px", marginBottom: "30px" }}>
                        {productsData.map((p, idx) => (
                            <h4
                                key={p.id}
                                className={activeProductIndex === idx ? "active" : ""}
                                onClick={() => setActiveProductIndex(idx)}
                                style={{
                                    cursor: "pointer",
                                    margin: 0,
                                    color: activeProductIndex === idx ? "var(--terciary-color)" : "#ccc",
                                    transition: "color 0.3s ease",
                                    fontWeight: "700"
                                }}
                            >
                                {p.name}
                            </h4>
                        ))}
                    </div>

                    <div className="content-product">
                        <div className="grid-content-product">
                            <div className="grid-product-item">
                                <div className="feature-body">
                                    <div className="featured-body-header">
                                        <img src={`${base}${product.featured_image_2}`} alt={product.name} />
                                    </div>
                                    <div className="featured-body-content">
                                        <table>
                                            <tbody>
                                                {Object.entries(product.attributes).map(([key, value]) => (
                                                    <tr key={key}>
                                                        <td>{formatKey(key)}</td>
                                                        <td>{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-product-item">
                                <img src={`${base}${product.featured_image_1}`} alt={product.name} />
                            </div>
                        </div>
                    </div>

                    <div className="footer-product">
                        <h3 className="service-section-title" style={{ marginTop: "50px", marginBottom: "30px" }}>Características</h3>
                        <div className="container grid-features">
                            <div className="feature-img-wrapper"
                                style={{ backgroundImage: `url(${base}assets/img/products/vertical-product.png)`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
                            ></div>
                            <ProductFeatures key={product.id} features={product.features} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductLoop;