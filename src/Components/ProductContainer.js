import React from "react";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const selector = useSelector((state) => state.addItemReducer.list);
  console.log("selector", selector);
  return (
    <div>
      {selector.map((item) => {
        return;
        <h1>{item}</h1>;
      })}
    </div>
  );
};

export default ProductContainer;
