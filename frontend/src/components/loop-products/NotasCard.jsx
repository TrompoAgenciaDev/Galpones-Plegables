import { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/notas-card.css';

const NotasCard = ({ nota }) => {
    if (!nota) return null;

    const base = import.meta.env.BASE_URL;
    const gallery = nota.gallery || [];
    const hasGallery = gallery.length > 0;

    const [isHovered, setIsHovered] = useState(false);
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const startTimer = useCallback(() => {
        if (!hasGallery) return;
        stopTimer();
        timerRef.current = setInterval(() => {
            setIndex(i => (i + 1) % gallery.length);
        }, 2600);
    }, [gallery.length, hasGallery, stopTimer]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIndex(0);
        startTimer();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIndex(0);
        stopTimer();
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setIndex(i => (i - 1 + gallery.length) % gallery.length);
        startTimer();
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setIndex(i => (i + 1) % gallery.length);
        startTimer();
    };

    const handleDot = (e, i) => {
        e.stopPropagation();
        setIndex(i);
        startTimer();
    };

    useEffect(() => () => stopTimer(), [stopTimer]);



    return (
        <article
            className="nota-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="nota-body">
                <div className="nota-header">
                    <span>{nota.id < 10 ? `0${nota.id}` : nota.id}</span>
                    <span>{nota.galpon}</span>
                </div>
                <div className="nota-content">
                    <h4 className="nota-name">{nota.name}</h4>

                    <div className="nota-image-container">
                        <img
                            src={`${base}${nota.default_image.replace(/^\//, '')}`}
                            alt={nota.name}
                            className="nota-image-main"
                            style={{ opacity: isHovered && hasGallery ? 0 : 1 }}
                            loading="lazy"
                        />
                        {isHovered && hasGallery && (
                            <>
                                {gallery.map((img, i) => (
                                    <img
                                        key={i}
                                        src={`${base}${img.replace(/^\//, '')}`}
                                        alt={nota.name}
                                        className="nota-gallery-slide"
                                        style={{ opacity: i === index ? 1 : 0 }}
                                        loading={i === 0 ? 'eager' : 'lazy'}
                                    />
                                ))}
                                <button className="nota-gallery-btn nota-gallery-prev" onClick={handlePrev} aria-label="Anterior">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button className="nota-gallery-btn nota-gallery-next" onClick={handleNext} aria-label="Siguiente">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                                <div className="nota-gallery-dots">
                                    {gallery.map((_, i) => (
                                        <button
                                            key={i}
                                            className={`nota-gallery-dot${i === index ? ' active' : ''}`}
                                            onClick={(e) => handleDot(e, i)}
                                            aria-label={`Imagen ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="nota-footer">
                        <img
                            src={`${base}${nota.logo_img.replace(/^\//, '')}`}
                            alt={nota.name}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NotasCard;
