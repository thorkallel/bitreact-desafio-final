import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const Hero = ({
  title,
  image = "/src/assets/img/hero/hero-2/banner-2.png",
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="hero">
      <div
        className={`bg-cover bg-center bg-fixed flex flex-col items-center justify-center h-[calc(50vh-100px)] min-h-[400px] mt-[100px]`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-black/20 py-4 px-4 rounded-xl backdrop-blur-md">
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl font-bold">
              <span className="text-4xl md:text-6xl font-libre bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-clip-text text-transparent">
                {title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
