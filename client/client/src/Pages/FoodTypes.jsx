import React from 'react';

const FoodTypes = () => {
  return (
    <>
      <main>
        <div className="carousel carousel-center rounded-[101px] bg-[#252422] max-w-md space-x-11 px-[10px] md:px-[50px] lg:px-[100px] py-[8px] flex justify-between items-center">
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212189/BurgerImg_wohjmv.svg" alt="Burger-Img" />
            <p className="text-white text-center">Burger</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741268293/image_5_kdq3cl.svg" alt="Combos-Img" />
            <p className="text-white text-center">Combos</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20 pb-1" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212195/DrinksImg_xjtpgr.svg" alt="Drinks-Img" />
            <p className="text-white text-center">Drinks</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212191/ChickenImg_qug0id.svg" alt="Chicken" />
            <p className="text-white text-center">Chicken</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212192/ChipsImg_z8hgkf.svg" alt="Chips" />
            <p className="text-white text-center">Chips</p>
          </div>
          <div className="carousel-item flex flex-col items-center">
            <img className="h-20" src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741212198/SaladsImg_cgkodf.svg" alt="Salads-Img" />
            <p className="text-white text-center">Salads</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default FoodTypes;
