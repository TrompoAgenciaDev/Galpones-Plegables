import "../styles/recientes.css"
import NotasLoop from "../components/loop-products/NotasLoop.jsx"

const Recientes = ({titulo}) => {
    return (
        <>
            <section className="full-container bg-white recientes-container">
                <div className="container">
                    <h1>{titulo}</h1>
                </div>
                <div className="container">
                    <NotasLoop/>
                </div>
            </section>
        </>
    )
}

export default Recientes;