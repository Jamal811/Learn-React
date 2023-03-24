import React from "react";
import Product from "./Product";

const ParentProduct = () => {
  return (
    <div>
      <Product name="MacBook Pro " description="the best computer" price={60} />
      <Product
        name="Google Home"
        description="your AI assisstanr"
        price={100}
      />
      <Product
        name="iPhone 12 pro max "
        description="the best phone"
        price={1000}
      />
    </div>
  );
};

export default ParentProduct;
