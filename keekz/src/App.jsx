import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Title from "./component/Title";
import Categories from "./component/Categories";
import CategoryDisplay from "./component/CategoryDisplay";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Title />
      <CategoryDisplay />
      <Categories/>
      <Title />
      <CategoryDisplay />
      <Footer/>
    </>
  );
};

export default App;
