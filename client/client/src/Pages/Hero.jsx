import React from "react";

const Hero = () => {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741087129/Frame_1171276711_tmhdwm.svg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className=" text-[56px]">
              The <span className="font-[]">ZING</span> in Every
              bite
            </h1>
            <p className="mb-5">
              Savor the flavor! Explore our delicious menu and order now for a
              taste sensation!
            </p>
            <div>
              <button className="rounded-[31px] h-15 w-56 bg-[#B67B0F]">
                Order Now!
              </button>
              <button className="rounded-[32px] h-15 w-20 m-2 bg-white text-black">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
