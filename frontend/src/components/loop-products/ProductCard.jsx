import React from 'react';
import '../../styles/product-card.css';

const ProductCard = ({ product }) => {
    if (!product) return null;

    const base = import.meta.env.BASE_URL;

    return (
        <article className="product-card">
            <div className="product-body">
                <div className="product-header">
                    <span>{product.id < 10 ? `0${product.id}` : product.id}</span>
                    <span>Proyecto</span>
                </div>
                <div className="product-content">
                    <h4 className="product-name">{product.name}</h4>

                    <div className="product-image-container">
                        <img
                            src={`${base}${product.default_image.replace(/^\//, '')}`}
                            alt={product.name}
                            className="product-image-main"
                            loading="lazy"
                        />
                        <img
                            src={`${base}${product.hover_image.replace(/^\//, '')}`}
                            alt={product.name}
                            className="product-image-hover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;