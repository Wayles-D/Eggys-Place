import React from "react";

const Hero = () => {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741087129/Frame_1171276711_tmhdwm.svg)",
          backgroundSize: "cover",        // Make sure the image covers the whole area
          backgroundRepeat: "no-repeat",  // Prevent repeating patterns
          backgroundPosition: "center",   // Center the image properly
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content text-neutral-content text-center">
            <div className="mt-35">
              <h1 className="font-[Red-Hat-Text] text-[56px] tracking-widest">
                The <span className="Zing text-[#B67B0F]">ZING</span> in every bite
              </h1>
              <p className="Savor font-[Red-Hat-Text] font-[500] mt-8 w-[844px] text-[28px] tracking-[11%] leading-9">
                Savor the flavor! Explore our delicious menu and order now for a taste sensation!
              </p>
              <div className="mt-18">
                <button className="rounded-[31px] h-15 w-45 mr-13 bg-[#B67B0F]">
                  Order Now!
                </button>
                <button className="rounded-[32px] h-15 w-30 mr-16 bg-white text-black">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
