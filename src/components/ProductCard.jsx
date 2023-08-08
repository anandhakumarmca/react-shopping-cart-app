import React, { useState } from "react";

const ProductionCard = ({ imageSrc, title, price, isSale }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };

  return (
    <div className={`card h-100 ${isInCart ? "in-cart" : ""}`}>
      {isSale && <div className="badge bg-dark text-white position-absolute">Sale</div>}
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

export default ProductionCard;
