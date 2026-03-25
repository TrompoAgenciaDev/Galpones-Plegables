import "../styles/servicios.css";

const Servicios = () => {
    return (
        <section className="full-container white-color services-section">
            <div className="container grid-services">
                <div className="service-item">
                    <h3>Soluciones Industriales</h3>
                    <img src="" alt="" />
                </div>
                <div className="service-item">
                    <h3>Servicios</h3>
                    <div className="full-container service-accordion">
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h5>Fabricación de Galpones Plegables</h5>
                                <span>—</span>
                            </div>
                            <div className="accordion-content">
                                <p>DISEÑAMOS Y FABRICAMOS ESTRUCTURAS METÁLICAS MODULARES QUE SE PLIEGAN PARA FACILITAR TRANSPORTE, LOGÍSTICA E INSTALACIÓN EN PLANTA.</p>
                                <a href="#">[ VER MAS → ]</a>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h5>Alquiler de infraestructura temporal</h5>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h5>Instalación rápida en planta</h5>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h5>Soluciones para almacenamiento y logística</h5>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h5>Estructuras reubicables</h5>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h5>Adaptación a diferentes industrias</h5>
                                <span>+</span>
                            </div>
                        </div>
                        <button className="btn-all-services">VER MÁS SERVICIOS</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios;