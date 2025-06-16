import React, { useEffect } from "react";
import { Carousel as AntCarousel } from "antd";
import { Countries } from "./Countries";
import { Link } from "react-router-dom";

export const Carousel = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Countries />
      <AntCarousel
        autoplay
        autoplaySpeed={5000}
        dotPosition="right"
        arrows={false}
        className="w-full h-[100vh] relative z-1"
      >
        <div className="w-full h-[100vh] bg-[url('/src/assets/img/hero/hero-1/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="w-full h-[100%] lg:w-[100%] flex flex-col items-start justify-center gap-6 px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
              <h1 className="text-left font-libre text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight no-underline tracking-wider text-shadow-custom">
                Luxury
                <br />
                Redefined
              </h1>
              <span className="leading-relaxed max-w-2xl text-1xl md:text-2xl font-libre text-left text-[#35FF3D]">
                Experience the pinnacle of automotive excellence with our
                exclusive collection of premium vehicles.
              </span>
              <br />
              <Link
                to="/inventory"
                className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] bg-[url('/src/assets/img/hero/hero-2/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="w-full h-[100%] lg:w-[100%] flex flex-col items-start justify-center gap-6 px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
              <h1 className="text-left font-libre text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight no-underline tracking-wider text-shadow-custom">
                Performance
                <br />& Elegance
              </h1>
              <span className="leading-relaxed max-w-2xl text-1xl md:text-2xl font-libre text-left text-[#35FF3D]">
                Discover the perfect blend of power and sophistication in our
                handpicked selection of high-performance vehicles.
              </span>
              <br />
              <Link
                to="/inventory"
                className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Models
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] bg-[url('/src/assets/img/hero/hero-3/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="w-full h-[100%] lg:w-[100%] flex flex-col items-start justify-center gap-6 px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
              <h1 className="text-left font-libre text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight no-underline tracking-wider text-shadow-custom">
                Bespoke
                <br />
                Experience
              </h1>
              <span className="leading-relaxed max-w-2xl text-1xl md:text-2xl font-libre text-left text-[#35FF3D]">
                Customize your dream car with our exclusive personalization
                services and premium features.
              </span>
              <br />
              <Link
                to="/inventory"
                className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Customize Now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] bg-[url('/src/assets/img/hero/hero-3/banner-2.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="w-full h-[100%] lg:w-[100%] flex flex-col items-start justify-center gap-6 px-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
              <h1 className="text-left font-libre text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight no-underline tracking-wider text-shadow-custom">
                Elite
                <br />
                Service
              </h1>
              <span className="leading-relaxed max-w-2xl text-1xl md:text-2xl font-libre text-left text-[#35FF3D]">
                Experience unparalleled customer service and maintenance support
                for your luxury vehicle.
              </span>
              <br />
              <Link
                to="/inventory"
                className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </AntCarousel>
    </>
  );
};

export default Carousel;
