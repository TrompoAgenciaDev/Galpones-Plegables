import { motion } from "framer-motion";
import "../styles/clients.css";

const Clients = () => {
    const base = import.meta.env.BASE_URL;

    const clients = [
        "cocacola.png",
        "valle.png",
        "inomax.png",
        "comar-logo.png"
    ];

    // Duplicate list once for a seamless infinite loop
    const infiniteClients = [...clients, ...clients];

    return (
        <section className="full-container clients">
            <div className="container grid-clients">
                <div className="item-client">
                    <h4 className="text-orange">Quiénes confiaron en nosotros</h4>
                </div>
                <div className="item-client slider-container">
                    <div className="inner-gradient left"></div>
                    <div className="inner-gradient right"></div>
                    <motion.div
                        className="slider-track"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear"
                        }}
                    >
                        {[...clients, ...clients, ...clients].map((client, i) => (
                            <div className="slide-item" key={i}>
                                <img src={`${base}assets/img/clients/${client}`} alt="Client Logo" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Clients;