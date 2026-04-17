import "../styles/recientes.css"
import NotasLoop from "../components/loop-products/NotasLoop.jsx"

const Recientes = () => {
    return (
        <>
            <section className="full-container bg-white recientes-container">
                <div className="container">
                    <h2>Proyectos recientes</h2>
                </div>
                <div className="container">
                    <NotasLoop/>
                </div>
            </section>
        </>
    )
}

export default Recientes;