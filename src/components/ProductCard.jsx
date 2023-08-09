import React, { useState } from "react";
import './ProductCard.css';

const ProductCard = ({ imageSrc, title, price, isSale, addToCart, removeFromCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    if (isInCart) {
      removeFromCart(); // Call removeFromCart when removing from cart
    } else {
      addToCart(); // Call addToCart when adding to cart
    }
    setIsInCart(!isInCart); // Toggle the isInCart state
  };

  return (
    <div className="product-card">
      <img className="card-img-top" src={imageSrc} alt={title} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{title}</h5>
          <span>{price}</span>
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {isInCart ? (
            <button className="btn btn-outline-danger mt-auto" onClick={handleCartToggle}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-outline-dark mt-auto" onClick={handleCartToggle}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
