import "../styles/about.css";

const About = () => {
    return (
        <section className="full-container blue-color about-container">
            <div className="container grid-about-home">
                <div className="grid-item-about">
                    <h2>Infraestructura <br/> Industrial Plegable.</h2>
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
                    <img src={`${import.meta.env.BASE_URL}assets/img/comar-logo.png`} alt="Comar Construcciones" />
                </div>
                <div className="grid-item-about">

                    <p className="upper-text">
                        Desde el análisis inicial hasta la instalación final, Galpones Plegables acompaña a cada cliente en la definición de la solución más eficiente para ampliar su capacidad operativa.
                    </p>
                    <p className="upper-text">
                        Desde el análisis inicial hasta la instalación final, Galpones Plegables acompaña a cada cliente en la definición de la solución más eficiente para ampliar su capacidad operativa.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
