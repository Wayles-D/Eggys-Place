import React, { useState } from "react";
import foodData from "../JsFolders/FoodCategories"; // Assuming this contains all food categories
import Star from "../assets/Star.svg";

const FoodTypes = ({ handleAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("Burgers"); // Default to burgers

  // ✅ Get products based on selected category
  const foodItems = foodData[selectedCategory] || [];

  return (
    <main className="bg-[#2e2e2e] min-h-screen p-4">
      {/* Categories Section */}
      <div className="carousel carousel-center rounded-[101px] bg-[#252422] overflow-x-auto md:overflow-visible max-w-[90%] md:max-w-[85%] mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[8px] flex justify-between items-center mt-2">
        {[
          { name: "Burgers", img: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212189/BurgerImg_wohjmv.svg" },
          { name: "Combos", img: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741268293/image_5_kdq3cl.svg" },
          { name: "Drinks", img: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212195/DrinksImg_xjtpgr.svg" },
          { name: "Chicken", img: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212191/ChickenImg_qug0id.svg" },
          { name: "Chips", img: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212192/ChipsImg_z8hgkf.svg" },
          { name: "Salads", img: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212198/SaladsImg_cgkodf.svg" },
        ].map((category) => (
          <div key={category.name} className="carousel-item flex flex-col items-center">
            <img
              className={`h-20 cursor-pointer transition-transform duration-300 ${
                selectedCategory === category.name ? "scale-110" : ""
              }`}
              src={category.img}
              alt={category.name}
              onClick={() => setSelectedCategory(category.name)}
            />
            <p className="text-white text-center cursor-pointer hover:underline">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</p>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <section className="p-4 flex justify-center items-center">
        <div className="max-w-[95vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {foodItems.length > 0 ? (
              foodItems.map((item) => (
                <div
                  key={item._id}
                  className="card w-full max-w-[377px] shadow-sm p-4 bg-[#252422] rounded-lg mx-auto"
                >
                  <figure>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-auto rounded-[14px]"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-white text-lg font-semibold">
                        {item.title}
                      </h2>
                      <div className="flex items-center border rounded border-[#B67B0F] px-2 py-1 gap-1">
                        <img className="size-4" src={Star} alt="Rating" />
                        <h6 className="text-sm text-white">{item.rating}</h6>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-white mt-2">
                      <h1 className="text-[#B67B0F] font-bold text-3xl">
                        {item.price}
                      </h1>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">{item.duration}</p>
                      </div>
                    </div>

                    <div className="card-actions mt-4">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full h-12 rounded-[31px] bg-[#B67B0F] text-white font-bold border-none shadow-none cursor-pointer hover:underline"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center text-lg">No items available in this category.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FoodTypes;
