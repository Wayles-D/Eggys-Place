import React, { useState } from "react";
import Hero from "./Hero";
import FoodTypes from "./FoodTypes";
// import Products from "./Products";


const Home = ({ cart, handleAddToCart }) => {  
  const [activeCategory, setActiveCategory] = useState("Burger");

  return (
    <>
      <Hero />
      <FoodTypes setActiveCategory={setActiveCategory} handleAddToCart={handleAddToCart} />
      {/* ✅ Pass handleAddToCart to Products */}
      {/* <Products activeCategory={activeCategory} handleAddToCart={handleAddToCart} /> */}
    </>
  );
};

export default Home;
