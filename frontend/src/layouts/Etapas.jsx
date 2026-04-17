import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/etapas.css"

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.215, 0.61, 0.355, 1],
        },
    }),
    hover: {
        scale: 1.02,
    },
};

const etapasCards = [
    {
        title: "Relevamiento",
        number: "01",
        text: "Analizamos el sitio, las condiciones del terreno y las necesidades operativas para definir la solución adecuada.",
        image: "1.png",
    },
    {
        title: "Propuesta",
        number: "02",
        text: "Diseñamos la configuración del galpón modular y presentamos la propuesta técnica según el uso requerido.",
        image: "2.png",
    },
    {
        title: "Montaje",
        number: "03",
        text: "Transportamos los módulos plegados y desplegamos la estructura directamente en planta sin necesidad de obra civil.",
        image: "3.png",
    },
    {
        title: "Operación",
        number: "04",
        text: "El galpón queda operativo en pocos días, permitiendo ampliar capacidad de almacenamiento, producción o logística.",
        image: "4.png",
    },
];

const Etapas = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const base = import.meta.env.BASE_URL;
    const currentImage = hoveredIndex !== null
        ? `${base}assets/img/etapas/${etapasCards[hoveredIndex].image}`
        : null;

    return (
        <section className="full-container bg-gray-light etapas-container"
            style={{background: `url(${base}assets/img/stages-bg.png)`, backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat"}}
        >
            <div className="container etapas-grid">
                <div className="etapas-item">
                    <h2 className="text-white">
                        Cada etapa<br/> 
                        del proyecto
                    </h2>
                    <p className="upper-text text-white">
                        Desde el relevamiento inicial hasta el montaje final, nuestro sistema permite implementar infraestructura industrial de forma rápida, segura y eficiente.
                    </p>
                    <div className="etapas-image-wrapper">
                        <AnimatePresence mode="wait">
                            {currentImage && (
                                <motion.img
                                    key={currentImage}
                                    src={currentImage}
                                    alt="Etapas del proyecto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="etapas-item">
                    {etapasCards.map((item, index) => (
                        <motion.div 
                            className="etapas-card bg-dark-blue"
                            key={item.number}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, amount: 0.2 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            custom={index}
                            variants={cardVariants}
                        >
                            <div className="header-item">
                                <h5 className="text-white">{item.title}</h5>
                                <h4 className="text-white">{item.number}</h4>
                            </div>
                            <div className="content-item">
                                <p className="upper-text item-card-text text-white">
                                    {item.text}
                                </p>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19 M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Etapas;