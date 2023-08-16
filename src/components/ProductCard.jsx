import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ imageSrc, title, price, addToCart, removeFromCart }) => {
  // State to track whether the product is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding/removing from cart and toggling cart status
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
      {/* Product image */}
      <img className="card-img-top" src={imageSrc} alt={title} />
      <div className="card-body p-4">
        <div className="text-center">
          {/* Product title */}
          <h5 className="fw-bolder">{title}</h5>
          {/* Product price */}
          <span>{price}</span>
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {/* Add to Cart / Remove from Cart button */}
          {isInCart ? (
            <button
              className="btn btn-outline-danger mt-auto"
              onClick={handleCartToggle}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={handleCartToggle}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
