import React from "react";

export const Brands = () => {
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      image: "/src/assets/img/brand/brand-2/icon-1.png",
    },
    {
      id: 2,
      name: "Brand 2",
      image: "/src/assets/img/brand/brand-2/icon-2.png",
    },
    {
      id: 3,
      name: "Brand 3",
      image: "/src/assets/img/brand/brand-2/icon-3.png",
    },
    {
      id: 4,
      name: "Brand 4",
      image: "/src/assets/img/brand/brand-2/icon-4.png",
    },
    {
      id: 5,
      name: "Brand 5",
      image: "/src/assets/img/brand/brand-2/icon-5.png",
    },
    {
      id: 6,
      name: "Brand 6",
      image: "/src/assets/img/brand/brand-2/icon-6.png",
    },
    {
      id: 7,
      name: "Brand 7",
      image: "/src/assets/img/brand/brand-2/icon-7.png",
    },
    {
      id: 8,
      name: "Brand 8",
      image: "/src/assets/img/brand/brand-2/icon-8.png",
    },
    {
      id: 9,
      name: "Brand 9",
      image: "/src/assets/img/brand/brand-2/icon-9.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestras Marcas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre las mejores marcas de automóviles que representamos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="w-full max-w-[200px] h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
