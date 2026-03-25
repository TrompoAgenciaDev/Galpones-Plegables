import { motion } from "framer-motion";
import "../styles/hero.css";


const Hero = () => {

    return (
        <>
            <section className="full-container hero-container">
                <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src="/assets/hero/hero.webm" type="video/webm" />
                    <source src="/assets/hero/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
                <div className="container">
                    <div className="subtitle-section">
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
                    </div>
                    <div className="title-container">
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
                    </div>
                </div>
            </section>
        </>
    )
}


export default Hero;