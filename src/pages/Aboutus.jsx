import React from "react";
import { Hero } from "../components/Hero";
import { Icon } from "@iconify/react";
import Aboutus1 from "../assets/img/app/app-1/background-1.png";

export const Aboutus = () => {
  return (
    <>
      <Hero title="About us" image="/src/assets/img/hero/hero-3/banner-2.png" />
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-[#35FF3D] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where luxury meets innovation in the world of automotive
              excellence. We specialize in curating the world's most exclusive
              and high-performance vehicles, offering an unparalleled experience
              for discerning collectors and enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  At Bucephalus, we are dedicated to providing our clients with
                  an unparalleled luxury automotive experience. Our mission is
                  to connect discerning enthusiasts with the world's most
                  exceptional vehicles, backed by our commitment to excellence,
                  integrity, and personalized service.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We envision a world where automotive excellence is accessible
                  to those who appreciate the finer things in life. Through our
                  curated collection and exceptional service, we aim to redefine
                  the luxury car buying experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Aboutus1}
                alt="Luxury Car Showroom"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-white text-lg italic">
                    "Excellence is not a destination, it's a journey we take
                    with our clients."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm">
              <Icon
                icon="mdi:car-sports"
                className="text-5xl text-[#35FF3D] mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Selection
              </h3>
              <p className="text-gray-300">
                Curated collection of the world's finest luxury and exotic
                vehicles
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm">
              <Icon
                icon="mdi:shield-check"
                className="text-5xl text-[#35FF3D] mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-300">
                Rigorous inspection and certification process for every vehicle
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center backdrop-blur-sm">
              <Icon
                icon="mdi:account-group"
                className="text-5xl text-[#35FF3D] mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">
                Knowledgeable professionals dedicated to your satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
