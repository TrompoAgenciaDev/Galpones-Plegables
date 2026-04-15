import { motion } from "framer-motion"
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
};

const Etapas = () => {
    const base = import.meta.env.BASE_URL;
    return (
        <section className="full-container bg-gray-light etapas-container"
            style={{background: `url(${base}assets/img/stages-bg.png)`, backgroundSize: "cover", backgroundPosition: "top center", backgroundRepeat: "no-repeat"}}
        >
            <div className="container etapas-header">
                <h2 className="text-white">
                    Cada etapa<br/> 
                    del proyecto
                </h2>
            </div>
            <div className="container etapas-grid">
                <div className="etapas-item">
                    <p className="upper-text text-white">
                        Desde el relevamiento inicial hasta el montaje final, nuestro sistema permite implementar infraestructura industrial de forma rápida, segura y eficiente.
                    </p>
                </div>
                <div className="etapas-item">
                    <motion.div 
                        className="etapas-card bg-dark-blue"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        variants={cardVariants}
                    >
                        <div className="header-item">
                            <h5 className="text-white">Relevamiento</h5>
                            <h4 className="text-white">01</h4>
                        </div>
                        <div className="content-item">
                            <p className="upper-text item-card-text text-white">
                                Analizamos el sitio, las condiciones del terreno y las necesidades operativas para definir la solución adecuada.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="etapas-card bg-dark-blue"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        variants={cardVariants}
                    >
                        <div className="header-item">
                            <h5 className="text-white">Propuesta</h5>
                            <h4 className="text-white">02</h4>
                        </div>
                        <div className="content-item">
                            <p className="upper-text item-card-text text-white">
                                Diseñamos la configuración del galpón modular y presentamos la propuesta técnica según el uso requerido.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="etapas-card bg-dark-blue"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={2}
                        variants={cardVariants}
                    >
                        <div className="header-item">
                            <h5 className="text-white">Montaje</h5>
                            <h4 className="text-white">03</h4>
                        </div>
                        <div className="content-item">
                            <p className="upper-text item-card-text text-white">
                                Transportamos los módulos plegados y desplegamos la estructura directamente en planta sin necesidad de obra civil.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="etapas-card bg-dark-blue"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={3}
                        variants={cardVariants}
                    >
                        <div className="header-item">
                            <h5 className="text-white">Operación</h5>
                            <h4 className="text-white">04</h4>
                        </div>
                        <div className="content-item">
                            <p className="upper-text item-card-text text-white">
                                El galpón queda operativo en pocos días, permitiendo ampliar capacidad de almacenamiento, producción o logística.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


export default Etapas;