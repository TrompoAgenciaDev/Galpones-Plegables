import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import '@/styles/product-features.css';

const ProductFeatures = ({ features }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = useCallback((index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    }, []);

    if (!features) return null;

    // Convert object of features to an array of items
    // Using Object.entries ensures we only iterate over the keys of the current features object
    const featureItems = Object.entries(features).map(([key, feature]) => ({
        id: key,
        title: feature[0],
        htmlText: feature[1],
        img: feature[2]
    }));

    return (
        <motion.div
            className="product-features-item"
            initial={{ "--border-grow": 0 }}
            whileInView={{ "--border-grow": 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <div className="product-features-accordion">
                {featureItems.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <motion.div
                            key={item.id}
                            className={`product-feature-accordion-item border-top-orange ${isOpen ? 'is-open' : ''}`}
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
                                className="product-feature-image-wrapper"
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
                                    className="product-feature-image"
                                />
                            </motion.div>

                            <motion.div
                                className={`product-feature-text-wrapper ${isOpen ? 'is-open' : ''}`}
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
                                    className="product-feature-header-btn"
                                >
                                    <motion.h4
                                        className="product-feature-title"
                                        initial={false}
                                        animate={{ fontSize: isOpen ? "40px" : "28px", fontWeight: isOpen ? 700 : 500 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.title}
                                    </motion.h4>

                                    <span className="product-feature-icon-btn" aria-hidden="true">
                                        <AnimatePresence mode="popLayout" initial={false}>
                                            {isOpen ? (
                                                <motion.div
                                                    className="product-feature-icon-inner"
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
                                                    className="product-feature-icon-inner"
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
                                            className="product-feature-text-body"
                                            initial={{ opacity: 0, y: 10, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                            exit={{ opacity: 0, y: 10, height: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            <div 
                                                className="product-feature-text-description"
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

export default ProductFeatures;
