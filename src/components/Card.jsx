import React from "react";
import { Watermark } from "antd";
import { useChangePrice } from "../hooks/useChangePrice";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { useUserContext } from "../context/UserContext";

export const Card = ({ car }) => {
  const formatCurrency = useChangePrice();
  const { user, addToCart } = useUserContext();

  const getCountryIcon = (country) => {
    const countryIcons = {
      "United States": "emojione:flag-for-united-states",
      Canada: "emojione:flag-for-canada",
      Spain: "emojione:flag-for-spain",
      Mexico: "emojione:flag-for-mexico",
    };
    return countryIcons[country] || "mdi:map-marker";
  };

  const handleTaxedPrice = () => {
    const taxedPrice = car.price * 1.2;
    const taxes = taxedPrice - car.price;

    Swal.fire({
      title: "Order budget study",
      text:
        "The order budget study is the price of the car + taxes and fees. The price of the car is $" +
        formatCurrency(car.price, "USD") +
        " and the taxes are $" +
        formatCurrency(taxes, "USD"),
      html: `
        <div class="text-left">
          <img src="/src/assets/img/cars/${car.image}.jpg" alt="${
        car.name
      }" class="w-full h-64 object-cover rounded-lg mb-4"/>
          <p class="text-gray-700"><strong>Price:</strong> ${formatCurrency(
            taxedPrice,
            "USD"
          )}</p>
          <p class="text-gray-700"><strong>Taxes:</strong> ${formatCurrency(
            taxes,
            "USD"
          )}</p>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "Add to cart",
      confirmButtonColor: "#35FF3D",
      confirmButtonAriaLabel: "Add to cart",
      confirmButtonAriaDescription: "Add to cart",
      confirmButtonAriaRole: "button",
      confirmButtonAriaPressed: false,
      didOpen: () => {
        if (window.iconify) {
          window.iconify.scan();
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const cartItem = {
          id: car.id,
          name: car.name,
          price: taxedPrice,
          taxes: taxes,
          image: car.image,
          quantity: 1,
        };

        if (addToCart(cartItem)) {
          Swal.fire({
            title: "Added to cart!",
            text: `${car.name} has been added to your cart`,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  const handleShowDetails = () => {
    Swal.fire({
      title: `<h3 class="text-lg font-bold mt-2 font-libre text-gray-800 text-2xl md:text-2xl">${car.name}</h3>`,
      html: `
        <div class="text-left">
          <img src="/src/assets/img/cars/${car.image}.jpg" alt="${
        car.name
      }" class="w-full h-64 object-cover rounded-lg mb-4"/>
          <div class="space-y-2">
            <p class="text-gray-700"><strong>Brand:</strong> ${car.brand}</p>
            <p class="text-gray-700"><strong>Year:</strong> ${car.year}</p>
            <p class="text-gray-700"><strong>Top Speed:</strong> ${
              car.topSpeed
            }</p>
            <p class="text-gray-700"><strong>Price:</strong> ${formatCurrency(
              car.price,
              "USD"
            )}</p>
            <p class="text-gray-700"><strong>Description:</strong> ${
              car.description
            }</p>
            <p class="text-gray-700 flex items-center gap-2">
              <strong>Location:</strong> 
              <span class="flex items-center gap-1">
                <i class="iconify" data-icon="${getCountryIcon(
                  car.location
                )}"></i>
                ${car.location}
              </span>
            </p>
          </div>
        </div>
      `,
      width: "600px",
      padding: "2em",
      background: "#fff",
      backdrop: `
        rgba(0,0,0,0.4)
        left top
        no-repeat
      `,
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml:
        '<i class="iconify text-black" data-icon="mdi:close"></i>',
      customClass: {
        closeButton: "swal2-close-button",
        popup: "swal2-popup-custom",
      },
      didOpen: () => {
        if (window.iconify) {
          window.iconify.scan();
        }
      },
    });
  };

  return (
    <div key={car.id} className="bg-white rounded-lg shadow-md p-4">
      <div className="relative">
        <Watermark content="carento.com">
          <img
            src={`/src/assets/img/cars/${car.image}.jpg`}
            alt={car.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </Watermark>
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-lg">
          <Icon
            icon={getCountryIcon(car.location)}
            className="text-2xl"
            title={car.location}
          />
        </div>
      </div>
      <h3 className="text-lg font-bold mt-2 font-libre text-gray-800 text-2xl md:text-2xl">
        {car.name}
      </h3>
      <p className="text-gray-600 font-libre text-gray-800 text-sm md:text-base">
        {formatCurrency(car.price, "USD")}
      </p>
      <div className="flex flex-col justify-center mt-4">
        <button
          onClick={handleShowDetails}
          className="w-full md:w-auto px-12 bg-gradient-to-r from-[#35FF3D] to-[#009900] text-white py-3 rounded-md hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg"
        >
          Details
        </button>
        <br />
        {user && user.username ? (
          <button
            onClick={handleTaxedPrice}
            className="w-full md:w-auto px-12 bg-gradient-to-r from-black to-zinc-800 text-white py-3 rounded-md hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg"
          >
            Order budget study
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
