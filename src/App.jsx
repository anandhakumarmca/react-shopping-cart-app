import React, { useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  const removeFromCart = () => {
    if (cartItemCount > 0) {
      setCartItemCount(cartItemCount - 1);
    }
  };

  return (
    <div className="App">
      <Navbar cartItemCount={cartItemCount} />
      <ProductSection addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App
