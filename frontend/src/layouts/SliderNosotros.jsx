import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/about.css";

const SliderNosotros = () => {
    const base = import.meta.env.BASE_URL;
    const images = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"];
    
    const [page, setPage] = useState(0);

    const imageIndex = page % images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setPage(prev => prev + 1);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="full-container slider-nosotros-single">
            <AnimatePresence>
                <motion.div
                    key={page}
                    className="slider-nosotros-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        backgroundImage: `url('${base}assets/img/about/${images[imageIndex]}')`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                />
            </AnimatePresence>
        </section>
    );
};

export default SliderNosotros;