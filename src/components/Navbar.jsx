    import React from "react";
    import "./Navbar.css";

    const Navbar = ({ cartItemCount }) => {
    return (
        <div className="navbar">
        <div className="container">
            <div className="logo">MY SHOPPIFY</div>
            <div className="cart">
            <button className="cart-button">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-name">Cart</span>
                <span className="cart-count">{cartItemCount}</span>
            </button>
            </div>
        </div>
        {/* <div className="header-bg">
        <div className="container">
          <div className="header-text">
            <h1 className="header-title">Shop in style</h1>
            <p className="header-subtitle">With this shop homepage template</p>
          </div>
        </div>
      </div> */}
        </div>
    );
    };

    export default Navbar;