import React from "react";
import { Hero } from "../components/Hero";
import { Icon } from "@iconify/react";

export const Ourservices = () => {
  return (
    <>
      <Hero
        title="Our Services"
        image="/src/assets/img/hero/hero-3/banner-2.png"
      />
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-[#35FF3D] mx-auto mb-8"></div>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Experience the highest level of automotive luxury with our
              comprehensive range of premium services, designed to exceed your
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Icon
                icon="mdi:car-search"
                className="text-5xl text-[#35FF3D] mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Vehicle Sourcing
              </h3>
              <p className="text-gray-300">
                Access our global network to find your dream car, with
                personalized search and acquisition services.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Icon
                icon="mdi:car-cog"
                className="text-5xl text-[#35FF3D] mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Maintenance
              </h3>
              <p className="text-gray-300">
                Expert care and maintenance by certified technicians using only
                genuine parts and cutting-edge equipment.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Icon
                icon="mdi:car-convertible"
                className="text-5xl text-[#35FF3D] mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Custom Modifications
              </h3>
              <p className="text-gray-300">
                Bespoke modifications and personalization options to make your
                vehicle truly unique.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Icon
                icon="mdi:car-wash"
                className="text-5xl text-[#35FF3D] mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Detailing Services
              </h3>
              <p className="text-gray-300">
                Professional detailing and paint protection services to maintain
                your vehicle's pristine condition.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Icon
                icon="mdi:car-traction-control"
                className="text-5xl text-[#35FF3D] mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Performance Tuning
              </h3>
              <p className="text-gray-300">
                Expert performance optimization and tuning services to enhance
                your vehicle's capabilities.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Icon
                icon="mdi:car-connected"
                className="text-5xl text-[#35FF3D] mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Concierge Service
              </h3>
              <p className="text-gray-300">
                Dedicated concierge service for all your automotive needs, from
                delivery to maintenance scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourservices;
