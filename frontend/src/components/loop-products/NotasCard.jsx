import React from 'react';
import '../../styles/notas-card.css';

const NotasCard = ({ nota }) => {
    if (!nota) return null;

    const base = import.meta.env.BASE_URL;

    return (
        <article className="nota-card">
            <div className="nota-body">
                <div className="nota-header">
                    <span>{nota.id < 10 ? `0${nota.id}` : nota.id}</span>
                    <span>{`${nota.galpon}`}</span>
                </div>
                <div className="nota-content">
                    <h4 className="nota-name">{nota.name}</h4>

                    <div className="nota-image-container">
                        <img
                            src={`${base}${nota.default_image.replace(/^\//, '')}`}
                            alt={nota.name}
                            className="nota-image-main"
                            loading="lazy"
                        />
                        <img
                            src={`${base}${nota.hover_image.replace(/^\//, '')}`}
                            alt={nota.name}
                            className="nota-image-hover"
                            loading="lazy"
                        />
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