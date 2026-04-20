import { motion } from "framer-motion";
import "../styles/clients.css";

const Clients = () => {
    const base = import.meta.env.BASE_URL;

    const clients = [
        "cocacola.png",
        "valle2.png",
        "inomax.png"
    ];

    return (
        <section className="full-container clients">
            <div className="container grid-clients">
                <div className="item-client">
                    <h4 className="text-orange">Quiénes confiaron en nosotros</h4>
                </div>
                <div className="item-client slider-container">
                    <div className="inner-gradient left"></div>
                    <div className="inner-gradient right"></div>
                    
                    <div className="slider-track">
                        {[...clients, ...clients].map((client, i) => (
                            <div className="slide-item" key={i}>
                                <img src={`${base}assets/img/clients/${client}?v=2`} alt={`Client Logo`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clients;