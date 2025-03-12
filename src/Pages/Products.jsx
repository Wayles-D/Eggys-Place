import React from "react";
import foodData from "../JsFolders/FoodCategories";
import Star from "../assets/Star.svg";

const Products = ({ handleAddToCart }) => {
  return (
    <main className="p-4 flex justify-center items-center min-h-screen overflow-hidden container mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[8px]">
      <div className="max-w-[95vw]">
        {Object.entries(foodData).map(([category, items]) => (
          <section key={category} className="mb-8">
            {/* <h2 className="text-white text-2xl font-bold mb-4 capitalize">{category}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {items.map((item) => (
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

                    {/* ✅ Wrap Rating & Duration in One Container */}
                    <div className="flex justify-between items-center text-white mt-2">
                      <h1 className="text-[#B67B0F] font-bold text-3xl">
                        {item.price}
                      </h1>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">{item.duration}</p>{" "}
                        {/* ✅ Now aligned with rating */}
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
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Products;
