import "../styles/about.css";

const About = ({ location = 'home' }) => {
    return (
        <section className="full-container blue-color about-container">
            {
                location === 'home' ? (
                    <div className="container grid-about-home">
                        <div className="grid-item-about">
                            <h2>Infraestructura <br /> Industrial Plegable.</h2>
                            <h5>
                                Espacio industrial inmediato para almacenamiento, producción y logística.
                            </h5>
                        </div>
                        <div className="grid-item-about">
                            <img className="about-render" src={`${import.meta.env.BASE_URL}assets/img/about.gif`} alt="Comar Construcciones" />
                        </div>
                        <div className="grid-item-about left-border">
                            <p className="about-text">
                                Alquilamos galpones metálicos modulares que se pliegan, transportan e instalan en tu planta.
                            </p>
                            <p className="about-text">
                                Ideales para almacenamiento, logística y producción.
                            </p>
                            <div className="about-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.00016 1.33337C4.32406 1.33337 1.3335 4.32393 1.3335 8.00004C1.3335 11.6758 4.32406 14.6667 8.00016 14.6667C11.6759 14.6667 14.6668 11.6758 14.6668 8.00004C14.6668 4.32393 11.6759 1.33337 8.00016 1.33337ZM8.00016 13.3334C5.05941 13.3334 2.66683 10.9408 2.66683 8.00004C2.66683 5.05929 5.05941 2.66671 8.00016 2.66671C10.9409 2.66671 13.3335 5.05929 13.3335 8.00004C13.3335 10.9408 10.9409 13.3334 8.00016 13.3334ZM10.6668 8.00004C10.6668 8.36821 10.3687 8.66671 10.0002 8.66671H8.00016C7.632 8.66671 7.3335 8.36821 7.3335 8.00004V5.33337C7.3335 4.96521 7.632 4.66671 8.00016 4.66671C8.36833 4.66671 8.66683 4.96521 8.66683 5.33337V7.33337H10.0002C10.3687 7.33337 10.6668 7.63188 10.6668 8.00004Z" fill="#00249A" />
                                </svg>
                                <p className="upper-text">
                                    instalación directa en planta en días
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    location === 'nosotros' ? (
                        <>
                            <div className="container grid-about">
                                <div className="grid-item-about">
                                    <h5>Misión</h5>
                                    <p className="about-text">
                                        Proporcionar soluciones logísticas temporales que sean rápidas, resistentes y versátiles, ayudando a las industrias a optimizar sus operaciones con infraestructura confiable y flexible, contribuyendo a una industria más eficiente y sostenible.
                                    </p>
                                    <h5>Visión</h5>
                                    <p className="about-text">
                                        Ser líderes en el mercado de infraestructura modular temporal, reconocidos por nuestra innovación, calidad y compromiso con la sostenibilidad. Buscamos transformar la manera en que las empresas piensan sus espacios logísticos temporales.
                                    </p>
                                </div>
                                <div className="grid-item-about left-border">

                                </div>
                            </div>
                            <div className="container grid-about-2">
                                
                            </div>
                        </>
                    ) : null

                )
            }
            <div className="container grid-about-home">
                <div className="grid-item-about left-border">
                    <img className="about-logo" src={`${import.meta.env.BASE_URL}assets/img/clients/comar-logo.png`} loading="lazy" alt="Comar Construcciones" />
                </div>
                <div className="img-container left-border">
                    <div className="content-img-wrapper">
                        <img className="about-logo-footer" src={`${import.meta.env.BASE_URL}assets/img/inpi.png`} loading="lazy" alt="Instituto Nacional de la Propiedad Industrial" />
                        <p className="text-white">Protegido mediante Modelo Industrial, registrado ante el Instituto Nacional de la Propiedad Industrial.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;