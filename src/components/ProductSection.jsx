import React from "react";
import ProductCard from "./ProductCard";
import "./ProductSection.css"; // Import your CSS file
const ProductSection = ({ addToCart, removeFromCart }) => {
  // Example product data
  const products = [
    {
      id: 1,
      image: "src/components/Images/ponniyin-selvan-comics-1.jpg",
      title: "Pudhu Vellam - Aadi Thirunaal",
      price: "RS.199.00",
      isSale: false,
    },
    {
      id: 2,
      image: "src/components/Images/ponniyin-selvan-comics-2.jpg",
      title: "Pudhu Vellam - Vinnagra Kovil",
      price: "RS.199.00",
      isSale: true,
    },
    {
      id: 3,
      image: "src/components/Images/ponniyin-selvan-comics-3.jpg",
      title: "Pudhu Vellam - Kadambur Maligai",
      price: "RS.199.00",
      isSale: false,
    },
    {
      id: 4,
      image: "src/components/Images/ponniyin-selvan-comics-4.jpg",
      title: "Pudhu Vellam - Nadunisi Kootam",
      price: "RS.199.00",
      isSale: true,
    },
    {
      id: 5,
      image: "src/components/Images/ponniyin-selvan-comics-5.jpg",
      title: "Pudhu Vellam - Pallakkil yaar",
      price: "RS.199.00",
      isSale: false,
    }, 
    {
      id: 6,
      image: "src/components/Images/ponniyin-selvan-comics-6.jpg",
      title: "Pudhu Vellam - Nandhini",
      price: "RS.199.00",
      isSale: true,
    },
    {
      id: 7,
      image: "src/components/Images/ponniyin-selvan-comics-7.jpg",
      title: "Pudhu Vellam - Kudanthai Jothidar",
      price: "RS.199.00",
      isSale: true,
    },
    {
      id: 8,
      image: "src/components/Images/ponniyin-selvan-comics-8.jpg",
      title: "Pudhu Vellam - Thidum Prevesam",
      price: "RS.199.00",
      isSale: true,
    }
    
    // Add more product objects as needed
  ];

  return (
    <div className="product-section">
      <div className="product-row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.title}
            price={product.price}
            isSale={product.isSale}
            addToCart={addToCart} // Pass the addToCart function as a prop
            removeFromCart={removeFromCart} // Pass the removeFromCart function as a prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
