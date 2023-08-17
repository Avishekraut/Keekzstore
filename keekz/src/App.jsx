import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Title from "./component/Title";
import Categories from "./component/Categories";
import ProductList from "./component/ProductList";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Title />
      <ProductList />
      {/* <Categories/> */}
    </>
  );
};

export default App;
