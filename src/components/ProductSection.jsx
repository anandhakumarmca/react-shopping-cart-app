import React from "react";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import "./ProductSection.css"; // Import the CSS file for styling

const ProductSection = ({ addToCart, removeFromCart }) => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: "images/ponniyin-selvan-comics-1.jpg",
      title: "Pudhu Vellam - Aadi Thirunaal",
      price: "RS.199.00",
    },
    {
      id: 2,
      image: "images/ponniyin-selvan-comics-2.jpg",
      title: "Pudhu Vellam - Vinnagra Kovil",
      price: "RS.199.00",
    },
    {
      id: 3,
      image: "images/ponniyin-selvan-comics-3.jpg",
      title: "Pudhu Vellam - Kadambur Maligai",
      price: "RS.199.00",
    },
    {
      id: 4,
      image: "images/ponniyin-selvan-comics-4.jpg",
      title: "Pudhu Vellam - Nadunisi Kootam",
      price: "RS.199.00",
    },
    {
      id: 5,
      image: "images/ponniyin-selvan-comics-5.jpg",
      title: "Pudhu Vellam - Pallakkil yaar",
      price: "RS.199.00",
    },
    {
      id: 6,
      image: "images/ponniyin-selvan-comics-6.jpg",
      title: "Pudhu Vellam - Nandhini",
      price: "RS.199.00",
    },
    {
      id: 7,
      image: "images/ponniyin-selvan-comics-7.jpg",
      title: "Pudhu Vellam - Kudanthai Jothidar",
      price: "RS.199.00",
    },
    {
      id: 8,
      image: "images/ponniyin-selvan-comics-8.jpg",
      title: "Pudhu Vellam - Thidum Prevesam",
      price: "RS.199.00",
    },
  ];

  return (
    <div className="product-section">
      <div className="product-row">
        {/* Map through the products array and render ProductCard components */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.title}
            price={product.price}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
