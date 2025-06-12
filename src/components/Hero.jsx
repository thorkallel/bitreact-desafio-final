import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: `${data.email}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <section id="hero">
      <div className="bg-[url('/src/assets/img/hero/hero-1/banner.png')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center h-[calc(100vh-100px)] min-h-[400px]">
        <div className="bg-white/30 py-4 px-4 rounded-xl backdrop-blur-md">
          <div className="relative z-2">
            <img
              src="/src/assets/images/logo.png"
              alt="Hero"
              className="w-full h-full object-cover max-w-[175px] mx-auto"
              width={175}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold">
              <span className="text-white">last:</span>
              <span className="text-[#5f0101]">fm</span>
            </div>
          </div>
        </div>
        <div className="font-bold text-sm mt-3 text-white">
          Keep me updated with the latest news and updates
        </div>
        <div className="flex mt-3 gap-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline text-zinc-300"
              {...register("email", { required: true })}
            />
            <button className="cursor-pointer rounded-sm bg-gradient-to-r from-[#5f0101] to-[#ba0000] py-2 px-4 font-bold text-white transition-colors hover:bg-pink-600 hover:shadow-lg hover:shadow-black/20">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
