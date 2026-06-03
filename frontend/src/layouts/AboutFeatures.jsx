import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/about-features-slider.css";

const AboutFeatures = () => {
    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const items = useMemo(
        () => [
            {
                title: "Innovación",
                text: "DESARROLLAMOS UN SISTEMA CONSTRUCTIVO PROPIO REGISTRADO ANTE EL INPI, QUE REDEFINE CÓMO SE DESPLIEGA Y OPERA LA INFRAESTRUCTURA INDUSTRIAL TEMPORARIA.",
            },
            {
                title: "Compromiso",
                text: "ACOMPAÑAMOS CADA PROYECTO DESDE EL RELEVAMIENTO INICIAL HASTA EL DESMONTAJE FINAL, GARANTIZANDO TIEMPOS, CALIDAD ESTRUCTURAL Y CUMPLIMIENTO EN CADA ETAPA.",
            },
            {
                title: "Flexibilidad",
                text: "NUESTRO SISTEMA MODULAR SE ADAPTA A DISTINTAS SUPERFICIES, CONDICIONES DE SUELO Y ESCALAS DE OPERACIÓN, SIN REQUERIR SOLUCIONES DE OBRA A MEDIDA.",
            },
            {
                title: "Sostenibilidad",
                text: "ESTRUCTURAS REUBICABLES Y REUTILIZABLES QUE EVITAN LA CONSTRUCCIÓN PERMANENTE, REDUCIENDO EL IMPACTO MATERIAL Y LOS RESIDUOS ASOCIADOS A LA OBRA CIVIL TRADICIONAL.",
            },
            {
                title: "Confianza",
                text: "CONSTRUIMOS RELACIONES DE LARGO PLAZO BASADAS EN LA TRANSPARENCIA DEL PROCESO, EL CUMPLIMIENTO DE PLAZOS Y LA SOLIDEZ DE CADA ESTRUCTURA QUE INSTALAMOS.",
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);

    const textContainerMotion = useMemo(
        () => ({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        }),
        []
    );

    return (
        <section className="full-container slider-featured about-features-slider">
            <div className="full-container img-container about-features-text-container">
                <div className="about-features-row">
                    <div className="about-features-text-wrapper blue-text">
                        <h3 className="about-section-title">Valores</h3>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            className="about-features-text-wrapper blue-text"
                            initial={textContainerMotion.initial}
                            animate={textContainerMotion.animate}
                            exit={textContainerMotion.exit}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                            <p className="upper-text">{items[activeIndex]?.text}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="full-container pointer-container">
                {items.map((item, index) => (
                    <div
                        key={item.title}
                        className={`full-container slider-card ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeIndex === index}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setActiveIndex(index);
                            }
                        }}
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

export default AboutFeatures;