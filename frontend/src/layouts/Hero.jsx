import { motion } from "framer-motion";
import "../styles/hero.css";


const Hero = () => {
    const base = import.meta.env.BASE_URL;

    return (
        <>
            <section className="full-container hero-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src={`${base}assets/hero/hero.webm`} type="video/webm" />
                    <source src={`${base}assets/hero/hero.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <motion.div 
                        className="subtitle-section"
                        initial={{ "--border-grow": 0 }}
                        whileInView={{ "--border-grow": 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="subtitle-left"></div>
                        <div className="subtitle-body left-border">
                            <div className="subgroup-container">
                                <div className="subgroup-content right-border"></div>
                                <div className="subgroup-content"></div>
                            </div>
                            <div className="subtitle-content">
                                <h5 className="subtitle-hero">Espacio industrial inmediato para almacenamiento, producción y logística.</h5>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="title-container"
                        initial={{ "--border-grow": 0 }}
                        whileInView={{ "--border-grow": 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="title-section">
                            <div className="title-hero right-border">
                                <h1 className="">Infraestructura</h1>
                            </div>
                            <div></div>
                        </div>
                        <div className="title-section-2">
                            <h1 className="title-hero">Industria Plegable.</h1>
                            <div></div>
                        </div>
                        <div className="title-section">
                            <div className="title-hero">
                            </div>
                            <div className="subgroup-container left-border">
                                <div className="subgroup-content right-border"></div>
                                <div className="subgroup-content"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}


export default Hero;