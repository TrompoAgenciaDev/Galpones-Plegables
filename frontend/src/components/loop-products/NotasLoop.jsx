import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import notasData from '../../data/notas.json';
import NotasCard from './NotasCard';
import '../../styles/notas-card.css';

const NotasLoop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else {
                setItemsToShow(2);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = notasData.length - itemsToShow;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(maxIndex);
        }
    };

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <motion.div
                    className="carousel-track"
                    animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
                    transition={{
                        type: "tween",
                        ease: "easeInOutQuart",
                        duration: 0.8
                    }}
                >
                    {notasData.map((nota) => (
                        <div
                            className="carousel-item"
                            style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                            key={nota.id}
                        >
                            <NotasCard nota={nota} />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`dot ${currentIndex === idx ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>

            <div className="container">
                <button className="btn btn-blue btn-mobile">ver más proyectos</button>
                <button className="btn btn-blue btn-desktop">ver más proyectos</button>
            </div>
        </div>
    );
};

export default NotasLoop;
