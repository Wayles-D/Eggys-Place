import React from 'react';
import foodData from '../JsFolders/FoodCategories'; 
import Star from '../assets/Star.svg';

const FoodCategoriesComponent = () => {
  const { cheeseburgers } = foodData;

  return (
    <main className="p-4 bg-[#2e2e2e] flex justify-center items-center min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-[95vw]">
        {cheeseburgers.map((burger) => (
          <div key={burger._id} className="card w-full max-w-[377px] shadow-sm p-4 bg-[#252422] rounded-lg mx-auto">
            <figure>
              <img
                src={burger.image}
                alt={burger.title}
                className="object-cover w-full h-auto rounded-[14px]"
              />
            </figure>
            <div className="card-body text-center">
              <div className="flex justify-between items-center">
                <h2 className="card-title text-white text-lg font-semibold">{burger.title}</h2>
                <div className="flex items-center border rounded border-[#B67B0F] px-2 py-1 gap-1">
                  <img className="size-4" src={Star} alt="Rating" />
                  <h6 className="text-sm text-white">{burger.rating}</h6>
                </div>
              </div>
              <div className="flex justify-between text-white mt-2 flex-wrap gap-2">
                <h1 className="text-[#B67B0F] font-bold text-lg">{burger.price}</h1>
                <p className="text-sm">{burger.duration}</p>
              </div>
              <div className="card-actions mt-4">
                <button className="w-full h-12 rounded-[31px] bg-[#B67B0F] text-white font-bold border-none shadow-none">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FoodCategoriesComponent;
