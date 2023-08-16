import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";

function App() {
  // State to keep track of the cart item count
  const [cartItemCount, setCartItemCount] = useState(0);

  // Function to add an item to the cart
  const addToCart = () => {
    setCartItemCount(
      cartItemCount + 1,
      alert("Selected Book is added to cart")
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = () => {
    if (cartItemCount > 0) {
      setCartItemCount(
        cartItemCount - 1,
        alert("Selected Book is removed from cart")
      );
    }
  };

  return (
    <>
      <div className="App">
        {/* Render the Navbar and ProductSection components */}
        <Navbar cartItemCount={cartItemCount} />
        <ProductSection addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

export default App;
