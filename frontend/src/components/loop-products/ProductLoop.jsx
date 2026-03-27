import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productsData from '../../data/products.json';
import ProductCard from './ProductCard';
import '../../styles/product-card.css';

const ProductLoop = () => {
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

    const maxIndex = productsData.length - itemsToShow;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0); // Optional: Loop back to start
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(maxIndex); // Optional: Loop back to end
        }
    };

    return (
        <div className="carousel-wrapper">

            {/*
            <div className="carousel-controls">
                <button onClick={prevSlide} className="carousel-btn prev" aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button onClick={nextSlide} className="carousel-btn next" aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>
            */}
            <div className="carousel-container">
                <motion.div
                    className="carousel-track"
                    animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {productsData.map((product) => (
                        <div
                            className="carousel-item"
                            style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                            key={product.id}
                        >
                            <ProductCard product={product} />
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
                <button className="btn btn-mobile">ver más proyectos</button>
                <button className="btn btn-desktop">ver más proyectos</button>
            </div>
        </div>
    );
};

export default ProductLoop;
