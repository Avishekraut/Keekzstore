import React from "react";
import ProductList from "./ProductList";
import data from "../data";

function CategoryDisplay() {
  const product = data.map((item) => {
    return <ProductList key={item.id} value={item} />;
  });
  return (
    <section>
      <div className="ProductList-conatiner">{product}</div>
    </section>
  );
}

export default CategoryDisplay;
