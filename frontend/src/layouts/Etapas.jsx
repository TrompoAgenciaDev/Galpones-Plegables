import "../styles/etapas.css"

const Etapas = () => {
    return (
        <>
            <section className="full-container bg-gray-light etapas-container">
                <div className="container etapas-grid">
                    <div className="etapas-item bg-gray-light">
                        <h2>
                            Cada <br/>
                            etapa del<br/>
                            proyecto
                        </h2>

                        <p className="upper-text">
                            Desde el relevamiento inicial hasta el montaje final, nuestro sistema permite implementar infraestructura industrial de forma rápida, segura y eficiente.
                        </p>
                    </div>
                    <div className="etapas-item">
                        <div className="etapas-card bg-white">
                            <div className="header-item">
                                <h5>Relevamiento</h5>
                                <h4>01</h4>
                            </div>
                            <div className="content-item">
                                <p className="upper-text item-card-text">
                                    Analizamos el sitio, las condiciones del terreno y las necesidades operativas para definir la solución adecuada.
                                </p>
                            </div>
                        </div>
                        <div className="etapas-card bg-white">
                            <div className="header-item">
                                <h5>Propuesta</h5>
                                <h4>02</h4>
                            </div>
                            <div className="content-item">
                                <p className="upper-text item-card-text">
                                    Diseñamos la configuración del galpón modular y presentamos la propuesta técnica según el uso requerido.
                                </p>
                            </div>
                        </div>
                        <div className="etapas-card bg-white">
                            <div className="header-item">
                                <h5>Montaje</h5>
                                <h4>03</h4>
                            </div>
                            <div className="content-item">
                                <p className="upper-text item-card-text">
                                    Transportamos los módulos plegados y desplegamos la estructura directamente en planta sin necesidad de obra civil.
                                </p>
                            </div>
                        </div>
                        <div className="etapas-card bg-white">
                            <div className="header-item">
                                <h5>Operación</h5>
                                <h4>04</h4>
                            </div>
                            <div className="content-item">
                                <p className="upper-text item-card-text">
                                    El galpón queda operativo en pocos días, permitiendo ampliar capacidad de almacenamiento, producción o logística.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Etapas;