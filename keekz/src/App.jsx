import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Title from "./component/Title";
import Categories from "./component/Categories";
import CategoryDisplay from "./component/CategoryDisplay";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Title />
      <CategoryDisplay />
      <Categories/>
    </>
  );
};

export default App;
