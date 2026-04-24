import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import productsData from "../data/products.json";

const ProductFeatures = ({ features }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = useCallback((index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    }, []);

    const featureItems = Object.values(features).map(feature => ({
        title: feature[0],
        htmlText: feature[1],
        img: feature[2]
    }));

    return (
        <motion.div
            className="service-item"
            initial={{ "--border-grow": 0 }}
            whileInView={{ "--border-grow": 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <div className="full-container service-accordion">
                {featureItems.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <motion.div
                            key={item.title}
                            className={`accordion-item border-top-orange ${isOpen ? 'is-open' : ''}`}
                            initial={{ opacity: 0, y: 40, "--border-grow": 0 }}
                            whileInView={{ opacity: 1, y: 0, "--border-grow": 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                        >
                            <motion.div
                                className="accordion-image-wrapper"
                                initial={false}
                                animate={{
                                    width: isOpen ? "50%" : "120px",
                                    height: isOpen ? "300px" : "50px"
                                }}
                                transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}${item.img}`}
                                    alt={item.title}
                                    className="accordion-image"
                                />
                            </motion.div>

                            <motion.div
                                className={`accordion-text-wrapper ${isOpen ? 'is-open' : ''}`}
                                initial={false}
                                animate={{
                                    borderLeftColor: isOpen ? "var(--terciary-color)" : "transparent",
                                    paddingLeft: isOpen ? "50px" : "0px",
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isOpen}
                                    className="accordion-header-btn"
                                >
                                    <motion.h4
                                        className="accordion-title"
                                        initial={false}
                                        animate={{ fontSize: isOpen ? "40px" : "28px", fontWeight: isOpen ? 700 : 500 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.title}
                                    </motion.h4>

                                    <span className="accordion-icon-btn" aria-hidden="true">
                                        <AnimatePresence mode="popLayout" initial={false}>
                                            {isOpen ? (
                                                <motion.div
                                                    className="accordion-icon-inner"
                                                    key="minus-icon"
                                                    initial={{ opacity: 0, rotate: -90 }}
                                                    animate={{ opacity: 1, rotate: 0 }}
                                                    exit={{ opacity: 0, rotate: 90 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    className="accordion-icon-inner"
                                                    key="plus-icon"
                                                    initial={{ opacity: 0, rotate: 90 }}
                                                    animate={{ opacity: 1, rotate: 0 }}
                                                    exit={{ opacity: 0, rotate: -90 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19 M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            className="accordion-text-body"
                                            initial={{ opacity: 0, y: 10, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                            exit={{ opacity: 0, y: 10, height: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            <div 
                                                className="text-accordion"
                                                dangerouslySetInnerHTML={{ __html: item.htmlText.replace(/className=/g, 'class=').replace(/<p\/>/g, '</p>') }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

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
                                    transition: "color 0.3s ease"
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
                                        <img src={`${import.meta.env.BASE_URL}${product.featured_image_2}`} alt={product.name} />
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
                                <img src={`${import.meta.env.BASE_URL}${product.featured_image_1}`} alt={product.name} />
                            </div>
                        </div>
                    </div>

                    <div className="footer-product">
                        <h3 className="service-section-title" style={{ marginTop: "50px", marginBottom: "30px" }}>Características</h3>
                        <ProductFeatures features={product.features} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductLoop;