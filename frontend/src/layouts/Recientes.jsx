import "../styles/recientes.css"
import ProductLoop from "../components/loop-products/ProductLoop.jsx"

const Recientes = () => {
    return (
        <>
            <section className="full-container bg-white recientes-container">
                <div className="container">
                    <h2>Proyectos recientes</h2>
                </div>
                <div className="container">
                    <ProductLoop/>
                </div>
            </section>
        </>
    )
}

export default Recientes;