import { useState } from "react";
import productsData from "../data/products.json";
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

const COMPARAR_ROWS = [
    { key: "frente",            label: "Frente",             img: "frente.png" },
    { key: "altura utilizable", label: "Altura utilizable",  img: "altura.png" },
    { key: "altura maxima",     label: "Altura máxima",      img: "altura-maxima.png" },
    { key: "profundidad",       label: "Profundidad",        img: "profundidad.png" },
    { key: "superficie",        label: "Superficie",         img: "superficie.png" },
];

const ProductLoop = () => {
    const [activeProductIndex, setActiveProductIndex] = useState(0);
    const [isComparing, setIsComparing] = useState(false);
    const product = productsData[activeProductIndex];

    const isBlueProduct = activeProductIndex % 2 === 0;
    const rowOddBg = isBlueProduct ? "#F4F4F4" : "rgba(238, 75, 0, 0.15)";

    const base = import.meta.env.BASE_URL?.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

    const handleTabClick = (idx) => {
        setIsComparing(false);
        setActiveProductIndex(idx);
    };

    return (
        <>
            <div className="full-container product-loop-wrapper">
                <div className="container product-loop-header">
                    <h2>Modelos</h2>
                    <p className="upper-text">
                        La línea de productos se organiza en dos modelos de distinta escala, ambos basados en el mismo sistema plegable y modular.
                    </p>
                </div>
                <div className="container">
                    <div className="header-product">
                        <div className="header-product-tabs">
                            {productsData.map((p, idx) => (
                                <h4
                                    key={p.id}
                                    onClick={() => handleTabClick(idx)}
                                    style={{
                                        cursor: "pointer",
                                        margin: 0,
                                        color: !isComparing && activeProductIndex === idx
                                            ? (idx % 2 === 0 ? "#0b3a9b" : "var(--terciary-color)")
                                            : "#ccc",
                                        transition: "color 0.3s ease",
                                        fontWeight: "700"
                                    }}
                                >
                                    {p.name}
                                </h4>
                            ))}
                        </div>
                        <button
                            className={`comparar-btn${isComparing ? ' comparar-btn--active' : ''}`}
                            onClick={() => setIsComparing(v => !v)}
                        >
                            Comparar
                        </button>
                    </div>

                    {isComparing ? (
                        <div className="comparar-view">
                            {/* Renders */}
                            <div className="comparar-grid-row comparar-header-row">
                                <div />
                                {productsData.map((p, pi) => (
                                    <div className="comparar-render-item" key={p.id}>
                                        <img src={`${base}${p.comparar_img}`} alt={p.name} />
                                        <span className="comparar-product-name" style={{ color: pi === 0 ? "var(--primary-color)" : "var(--terciary-color)" }}>
                                            {p.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="comparar-separator" />

                            {/* Rows */}
                            {COMPARAR_ROWS.map((row) => (
                                <div className="comparar-grid-row comparar-data-row" key={row.key}>
                                    <div className="comparar-row-meta">
                                        <img
                                            src={`${base}assets/img/products/comparar/${row.img}`}
                                            alt={row.label}
                                            className="comparar-row-icon"
                                        />
                                        <h5>{row.label}</h5>
                                    </div>
                                    {productsData.map((p, pi) => (
                                        <div
                                            className="comparar-row-value"
                                            key={p.id}
                                            style={{ color: pi === 0 ? "var(--primary-color)" : "var(--terciary-color)" }}
                                        >
                                            {p.attributes[row.key] ?? "—"}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
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
                                                    {Object.entries(product.attributes).map(([key, value], rowIdx) => (
                                                        <tr key={key} style={{ backgroundColor: rowIdx % 2 === 0 ? rowOddBg : "transparent" }}>
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
                    )}

                    <div className="full-container"
                        style={{ backgroundImage: `url(${base}assets/img/products/productos_banner.png)`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default ProductLoop;
