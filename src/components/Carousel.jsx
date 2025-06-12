import React from "react";
import { Carousel as AntCarousel } from "antd";

export const Carousel = () => {
  return (
    <AntCarousel
      autoplay
      autoplaySpeed={5000}
      dotPosition="right"
      arrows={false}
      className="w-full h-[calc(100vh-80px)]"
    >
      <div className="w-full h-[calc(100vh-80px)] bg-[url('/src/assets/img/hero/hero-1/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
          <div className="w-full lg:w-[80%] flex flex-col items-start justify-center gap-6 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5f0101] to-[#ba0000] text-white leading-tight no-underline letter-spacing-tight text-shadow-custom border-1 border-solid border-white">
              Hero 1
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <button className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Ver más
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-80px)] bg-[url('/src/assets/img/hero/hero-1/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
          <div className="w-full lg:w-[80%] flex flex-col items-start justify-center gap-6 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5f0101] to-[#ba0000] text-white leading-tight no-underline letter-spacing-tight text-shadow-custom border-1 border-solid border-white">
              Hero 1
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <button className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Ver más
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-80px)] bg-[url('/src/assets/img/hero/hero-3/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-start justify-center relative z-10">
          <div className="w-full lg:w-[80%] flex flex-col items-start justify-center gap-6 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5f0101] to-[#ba0000] text-white leading-tight no-underline letter-spacing-tight text-shadow-custom border-1 border-solid border-white">
              Hero 1
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <button className="bg-white hover:bg-white/90 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </AntCarousel>
  );
};

export default Carousel;
