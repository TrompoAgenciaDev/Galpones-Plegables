import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/slider-featured.css";

const SliderFeatured = () => {
    const base = import.meta.env.BASE_URL;

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const items = [
        {
            title: "Industria y manufactura",
            image: "industria.png",
            imageBlue: "industria-azul.png"
        },
        {
            title: "Logística",
            image: "logistica.png",
            imageBlue: "logistica-azul.png"
        },
        {
            title: "Minería y energía",
            image: "mineria.png",
            imageBlue: "mineria-azul.png"
        },
        {
            title: "Eventos y feria industrial",
            image: "eventos.png",
            imageBlue: "eventos-azul.png"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="full-container slider-featured">
            <div className="full-container img-container">
                <AnimatePresence>
                    <motion.div
                        key={activeIndex}
                        className="img-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="img-inner-container"
                            initial="initial"
                            whileHover="hover"
                        >
                            {/* Base image (without blue) visible on hover */}
                            <img
                                src={`${base}assets/img/slider-featured/${items[activeIndex].image}`}
                                alt={items[activeIndex].title}
                                className="main-img"
                            />
                            {/* Blue image visible by default, fades out on hover */}
                            <motion.img
                                src={`${base}assets/img/slider-featured/${items[activeIndex].imageBlue}`}
                                alt={items[activeIndex].title}
                                className="blue-img"
                                variants={{
                                    initial: { opacity: 1 },
                                    hover: { opacity: 0 }
                                }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="full-container pointer-container">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`full-container slider-card ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    className="arrow-container"
                                    initial={isDesktop ? { x: "-100%", opacity: 0 } : { height: 0, opacity: 0 }}
                                    animate={isDesktop ? { x: 0, opacity: 1 } : { height: "auto", opacity: 1 }}
                                    exit={isDesktop ? { x: "-100%", opacity: 0 } : { height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <div className="arrow-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="38" viewBox="0 0 35 38" fill="none">
                                            <path d="M32.3627 14.2088C31.7741 12.7137 31.2923 11.3146 30.9175 10.0116C30.5747 8.67301 30.3209 7.41443 30.1563 6.23591L1.81713 37.7703L-0.000107392 36.1372L28.339 4.60281C27.1497 4.56451 25.8712 4.44616 24.5037 4.24775C23.1682 4.01372 21.7258 3.68361 20.1765 3.25744L21.4734 1.81435C25.9886 1.87869 30.0102 1.27396 33.5381 0.000149296L34.1794 0.576538C33.2527 4.18793 33.0794 8.25099 33.6596 12.7657L32.3627 14.2088Z" fill="#EE4B00" />
                                        </svg>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <div className="title-slide-container">
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SliderFeatured;