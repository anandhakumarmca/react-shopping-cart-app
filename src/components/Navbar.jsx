import React from "react";
import "./Navbar.css"; // Import your CSS file
import Footer from "./Footer"; // Import the Footer component

const Navbar = ({ cartItemCount }) => {
  return (
    <div className="navbar">
      {/* Navbar container */}
      <div className="container">
        <div className="logo">MY SHOPPIFY</div>
        {/* Cart section */}
        <div className="cart">
          <button className="cart-button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-name">Cart</span>
            <span className="cart-count">{cartItemCount}</span>
          </button>
        </div>
      </div>
      {/* Header background */}
      <div className="header-bg">
        <div className="container">
          <div className="header-text">
            <h1 className="header-title">Nila Comics Presents</h1>
            <p className="header-subtitle">Ponniyin Selvan Comics Series</p>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
