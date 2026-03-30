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
        <section className="full-container bg-white services-section">
            <div className="container grid-services">
                <div className="service-item">
                    <h3>Soluciones Industriales</h3>
                    <img src={`${import.meta.env.BASE_URL}assets/img/servicios.png`} alt="Servicios Img" />
                </div>
                <motion.div
                    className="service-item border-top-orange"
                    initial={{ "--border-grow": 0 }}
                    whileInView={{ "--border-grow": 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h3>Servicios</h3>
                    <div className="full-container service-accordion">
                        {accordionItems.map((title, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <motion.div
                                    key={title}
                                    className="accordion-item border-top-orange"
                                    initial={{ opacity: 0, y: 40, "--border-grow": 0 }}
                                    whileInView={{ opacity: 1, y: 0, "--border-grow": 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.215, 0.61, 0.355, 1]
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="accordion-header"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`accordion-content-${index}`}
                                    >
                                        <h6>{title}</h6>
                                        <span className="accordion-icon-btn" aria-hidden="true">
                                            <AnimatePresence initial={false}>
                                                {!isOpen && (
                                                    <motion.span
                                                        key="plus-icon"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                                    >
                                                        <svg
                                                            height="21"
                                                            viewBox="0 0 21 21"
                                                            width="21"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g
                                                                fill="none"
                                                                fillRule="evenodd"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="m5.5 10.5h10" />
                                                                <path d="m10.5 5.5v10" />
                                                            </g>
                                                        </svg>
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </span>
                                    </button>
                                    <div className="accordion-content">
                                        <motion.div
                                            key={`accordion-content-${index}`}
                                            id={`accordion-content-${index}`}
                                            className="accordion-body"
                                            variants={textMotion}
                                            initial={false}
                                            animate={isOpen ? "visible" : "hidden"}
                                            aria-hidden={!isOpen}
                                            layout
                                        >
                                            <p className="upper-text text-accordion">{accordionText}</p>
                                            <a href="#" className="accordion-link" tabIndex={isOpen ? 0 : -1}>
                                                [ VER MAS → ]
                                            </a>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/*
                        <a href="#" className="btn btn-blue btn-desktop">
                            ver más servicios
                        </a> */}
                    </div>
                </motion.div>
            </div>
            <a href="#" className="btn btn-blue btn-mobile">
                ver más servicios
            </a>
        </section>
    );
};

export default Servicios;