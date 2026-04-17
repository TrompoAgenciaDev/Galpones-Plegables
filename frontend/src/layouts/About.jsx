import "../styles/about.css";

const About = () => {
    return (
        <section className="full-container blue-color about-container">
            <div className="container grid-about-home">
                <div className="grid-item-about">
                    <h2>Infraestructura <br /> Industrial Plegable.</h2>
                    <h5>
                        Espacio industrial inmediato para almacenamiento, producción y logística.
                    </h5>
                </div>
                <div className="grid-item-about">
                    <p>Galpones Plegables es una unidad del grupo Comar Construcciones especializada en infraestructura metálica modular para la industria.</p>
                    <p>Desarrollamos galpones que se pliegan, transportan e instalan directamente en planta, permitiendo crear espacios operativos en pocos días y sin necesidad de obra civil.</p>
                    <p>
                        <strong>
                            Una solución robusta, reubicable y adaptable para operaciones industriales, logísticas y productivas.
                        </strong>
                    </p>
                </div>
                <div className="grid-item-about left-border">
                    <img className="about-render" src={`${import.meta.env.BASE_URL}assets/img/about.png`} alt="Comar Construcciones" />
                </div>
            </div>

            <div className="container grid-about-home">
                <div className="grid-item-about">
                    <p className="upper-text">
                        Desde el análisis inicial hasta la instalación final, Galpones Plegables acompaña a cada cliente en la definición de la solución más eficiente para ampliar su capacidad operativa.
                    </p>                    
                </div>
            </div>
            <div className="container grid-about-home">
                <div className="grid-item-about left-border">
                    <img className="about-logo" src={`${import.meta.env.BASE_URL}assets/img/clients/comar-logo.png`} alt="Comar Construcciones" />                    
                </div>
                <div className="grid-item-about left-border">
                    <img className="about-logo-footer" src={`${import.meta.env.BASE_URL}assets/img/inpi.png`} alt="Instituto Nacional de la Propiedad Industrial" />
                    <p>Protegido mediante Modelo Industrial, registrado ante el Instituto Nacional de la Propiedad Industrial.</p>
                </div>
            </div>
        </section>
    )
}

export default About;