import React from 'react';
import foodData from '../JsFolders/FoodCategories'; 
import Star from '../assets/Star.svg'
const FoodCategoriesComponent = () => {
  const { cheeseburgers } = foodData;

  return (
    <main className="p-4 justify-center bg-[#2e2e2e] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {cheeseburgers.map((burger) => (
        <div key={burger._id} className="card w-[377.33px] shadow-sm p-4  bg-[#252422]">
          <figure>
            <img
              src={burger.image}
              alt={burger.title}
              className="object-cover w-full h-full rounded-[14px]"
            />
          </figure>
          <div className="card-body">
            <div className='flex justify-between'>
            <h2 className="card-title text-white">{burger.title}</h2>
            <div className='flex border rounded border-[#B67B0F] &nbrsp;'>
             <img className='size-4 mt-2' src={Star} alt="Rating" /> <h6 className='text-sm mt-1.5 text-white'>{burger.rating}</h6>
             </div>
              </div>
            <div className="text-sm">
              <div className='flex text-white'>
              <h1 className='Burger-Price w-700 text-[#B67B0F] font-bold'>{burger.price}</h1>
              <p className=''>{burger.duration}</p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-[#B67B0F] h-15px w-full rounded-[31px] text-white border-none shadow-none">Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default FoodCategoriesComponent;
