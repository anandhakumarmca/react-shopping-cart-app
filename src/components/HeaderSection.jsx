import React from "react";
import "./HeaderSection.css"; // Import your CSS file

const HeaderSection = () => {
  return (
    //  Header section with background color, padding, and full width
    <header className="bg-dark py-5 header-fullwidth">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
