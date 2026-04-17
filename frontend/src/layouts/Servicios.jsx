import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/servicios.css";

const accordionItems = [
    "Fabricación de Galpones Plegables",
    "Alquiler de infraestructura temporal",
    "Instalación rápida en planta",
    "Soluciones para almacenamiento y logística",
    "Estructuras reubicables",
    "Adaptación a diferentes industrias",
];

const accordionText =
    "DISEÑAMOS Y FABRICAMOS ESTRUCTURAS METÁLICAS MODULARES QUE SE PLIEGAN PARA FACILITAR TRANSPORTE, LOGÍSTICA E INSTALACIÓN EN PLANTA.";

const textMotion = {
    hidden: { opacity: 0, height: 0, pointerEvents: "none" },
    visible: {
        opacity: 1,
        height: "auto",
        pointerEvents: "auto",
        transition: { duration: 0.22, ease: "easeOut" },
    },
};

const Servicios = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = useCallback((index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    }, []);

    return (
        <>
            <section className="full-container full-img-container">
                <img className="about-render" src={`${import.meta.env.BASE_URL}assets/img/galpon.png`} alt="Galpones Plegables" />
            </section>
            <section className="full-container bg-white services-section">
                <div className="container grid-services">
                    <motion.div
                        className="service-item border-top-orange"
                        initial={{ "--border-grow": 0 }}
                        whileInView={{ "--border-grow": 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h3 className="service-section-title">Características</h3>
                        <div className="full-container service-accordion">
                            {[
                                { title: "Plegabilidad", text: "REDUCCIÓN DE VOLUMEN QUE FACILITA EL TRANSPORTE", img: "plegabilidad.png" },
                                { title: "Modularidad", text: "SISTEMA DE MÓDULOS ACOPLABLES QUE PERMITE AMPLIAR O REDUCIR LA SUPERFICIE SEGÚN LA NECESIDAD DE CADA PROYECTO.", img: "modularidad.png" },
                                { title: "Portabilidad", text: "ESTRUCTURAS LIVIANAS Y RESISTENTES DISEÑADAS PARA SER TRASLADADAS DE UN PUNTO A OTRO SIN COMPLICACIONES LOGÍSTICAS.", img: "portabilidad.png" },
                                { title: "Velocidad", text: "INSTALACIÓN EN TIEMPOS RÉCORD, PERMITIENDO QUE TU OPERACIÓN NO SE DETENGA Y SE ADAPTE RÁPIDAMENTE.", img: "velocidad.png" }
                            ].map((item, index) => {
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
                                                height: isOpen ? "340px" : "50px"
                                            }}
                                            transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                                        >
                                            <img
                                                src={`${import.meta.env.BASE_URL}assets/img/caracteristicas/${item.img}`}
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
                                                <motion.h6
                                                    className="accordion-title"
                                                    initial={false}
                                                    animate={{ fontSize: isOpen ? "32px" : "24px", fontWeight: isOpen ? 700 : 500 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {item.title}
                                                </motion.h6>

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
                                                        <p className="text-accordion">
                                                            {item.text}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <a href="#" className="btn btn-blue btn-mobile">
                    ver más servicios
                </a>
            </section>
        </>
    );
};

export default Servicios;