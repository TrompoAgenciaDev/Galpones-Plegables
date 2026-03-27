import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/carrusel-full.css'

const data = {
    slide1: {
        title: "Instalación rápida",
        description: "El sistema de galpones plegables permite una instalación rápida y eficiente, reduciendo tiempos de obra y permitiendo comenzar a utilizar el espacio en pocos días."
    },
    slide2: {
        title: "Versatilidad",
        description: "Su diseño modular permite adaptarse a diferentes tamaños y configuraciones, brindando soluciones flexibles para diversas necesidades."
    },
    slide3: {
        title: "Durabilidad",
        description: "Fabricados con materiales de alta calidad, nuestros galpones están diseñados para resistir las condiciones climáticas más exigentes, garantizando una larga vida útil."
    },
    slide4: {
        title: "Eficiencia",
        description: "Su diseño permite un rápido montaje y desmontaje, facilitando el transporte y almacenamiento cuando no están en uso."
    }
}

const CarruselFull = () => {
    const slides = Object.values(data);
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="full-container bg-blue carrusel-full-blue">
            <div className="container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="carrusel-full-content"
                    >
                        <div className="carrusel-full-header">
                            <h3 className="text-white">{slides[current].title}</h3>
                        </div>
                        <div className="carrusel-full-body">
                            <p>{slides[current].description}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="carrusel-full-controls">
                    <div className="carrusel-number">
                        <span>0{current + 1}</span> / 0{slides.length}
                    </div>
                    <div className="carrusel-arrows">
                        <button onClick={prev} className="arrow-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="8" viewBox="0 0 19 8" fill="none">
                                <path d="M3.48438 4.42187C4.07813 5.13021 4.69792 6.15625 5.34375 7.5L4.21875 7.5C2.89583 5.9375 1.48958 4.78125 3.03248e-07 4.03125L3.52423e-07 3.46875C1.48958 2.71875 2.89583 1.5625 4.21875 -1.28675e-06L5.34375 -1.1884e-06C4.69792 1.34375 4.07813 2.36979 3.48438 3.07812L18.9375 3.07812L18.9375 4.42188L3.48438 4.42187Z" fill="white" />
                            </svg>
                        </button>
                        <button onClick={next} className="arrow-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="8" viewBox="0 0 19 8" fill="none">
                                <path d="M15.4531 3.07813C14.8594 2.36979 14.2396 1.34375 13.5938 0L14.7188 0C16.0417 1.5625 17.4479 2.71875 18.9375 3.46875V4.03125C17.4479 4.78125 16.0417 5.9375 14.7187 7.5L13.5937 7.5C14.2396 6.15625 14.8594 5.13021 15.4531 4.42188L0 4.42188L0 3.07812L15.4531 3.07813Z" fill="#EE4B00" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarruselFull;