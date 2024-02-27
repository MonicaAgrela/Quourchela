import React from "react";
import HeroImg from "/tajinePng.png";
import HeroBg from "/BgImg.png";
import PrimaryButton from "../Shared/PrimaryButton";



const BgStyle = {
 backgroundImage: `url(${HeroBg})`,
 backgroundRepeat: "no-repeat",
 backgroundPosition: "center",
 backgroundSize: "cover",
 width: "100%",
 height: "100%",

};

function Hero() {
  return (
    <>
      <div style={BgStyle} className="relative z-[1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 data-aos="fade-up" className="text-5xl">
                Discover Simple{" "}
                <span className="text-secondary font-sofia text-5xl">
                  Delicious
                </span>
                {""} and Fast Recipes!
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
                A Recipe is Soulless. The essence of Recipe must Come from
                you.The Cook.
              </p>

              {/* button section */}
              <div>
                <PrimaryButton />
              </div>
            </div>
            {/* Image section */}
            <div className=" relative z-30 order-1 sm:order-2">
              <img
                src={HeroImg}
                alt=""
                className="w-full sm:scale-125 sm:translate-y-16"
                style={{ width: "550px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
