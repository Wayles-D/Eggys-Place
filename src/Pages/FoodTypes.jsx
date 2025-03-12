import React from 'react';

const FoodTypes = () => {
  return (
    <p className=''>
      <main className='bg-[#2e2e2e]'>
    <div className="carousel carousel-center rounded-[101px] bg-[#252422] overflow-x-auto md:overflow-visible max-w-[90%] md:max-w-[85%] mx-auto px-[10px] md:px-[50px] lg:px-[100px] py-[8px] flex justify-between items-center hover:underline mt-2">


          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 cursor-pointer" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212189/BurgerImg_wohjmv.svg" alt="Burger-Img" />
            <p className="text-white text-center hover:underline cursor-pointer">Burger</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 cursor-pointer" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741268293/image_5_kdq3cl.svg" alt="Combos-Img" />
            <p className="text-white text-center hover:underline cursor-pointer">Combos</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 pb-1 cursor-pointer" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212195/DrinksImg_xjtpgr.svg" alt="Drinks-Img" />
            <p className="text-white text-center hover:underline cursor-pointer">Drinks</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 cursor-pointer" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212191/ChickenImg_qug0id.svg" alt="Chicken" />
            <p className="text-white text-center hover:underline cursor-pointer">Chicken</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 cursor-pointer" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212192/ChipsImg_z8hgkf.svg" alt="Chips" />
            <p className="text-white text-center hover:underline cursor-pointer">Chips</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 cursor-pointer" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212198/SaladsImg_cgkodf.svg" alt="Salads-Img" />
            <p className="text-white text-center hover:underline cursor-pointer">Salads</p>
          </div>
        </div>
      </main>
    </p>
  );
};

export default FoodTypes;