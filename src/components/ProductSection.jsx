import React from "react";
import ProductionCard from "./ProductCard";

const ProductionSection = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* You can map through your production data and create ProductionCard components */}
          {/* Example data */}
          {[
            {
              imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              title: "Fancy Product",
              price: "$40.00 - $80.00",
              isSale: false,
            },
            // Add more data items here
          ].map((product, index) => (
            <div key={index} className="col mb-5">
              <ProductionCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;