import React from "react";
import ProductionCard from "./ProductCard";
import "./Navbar"; // Import your CSS file for styling if needed

const ProductSection = ({ addToCart, removeFromCart }) => {
  // Example product data
  const products = [
    {
      id: 1,
      image: "product1.jpg",
      title: "Product 1",
      price: "$20.00",
      isSale: false,
    },
    {
      id: 2,
      image: "product2.jpg",
      title: "Product 2",
      price: "$30.00",
      isSale: true,
    },
    {
      id: 3,
      image: "product3.jpg",
      title: "Product 3",
      price: "$40.00",
      isSale: false,
    },
    {
      id: 4,
      image: "product4.jpg",
      title: "Product 4",
      price: "$50.00",
      isSale: true,
    },
    {
      id: 5,
      image: "product5.jpg",
      title: "Product 5",
      price: "$60.00",
      isSale: false,
    },
    {
      id: 6,
      image: "product6.jpg",
      title: "Product 6",
      price: "$70.00",
      isSale: true,
    }
    
    // Add more product objects as needed
  ];

  return (
    <div className="product-section">
      <div className="product-row">
        {products.map((product) => (
          <ProductionCard
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
