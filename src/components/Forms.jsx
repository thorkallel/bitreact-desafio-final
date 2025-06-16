import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import CompanyData from "./CompanyData";

export const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Message sent",
      text: "Thank you for contacting us",
      icon: "success",
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[url('/src/assets/img/review/review-1/img-1.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-lg shadow-xl p-8 border border-gray-600">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "This field is required",
                    })}
                    className="w-full px-4 py-2 bg-gray-700/80 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-2 bg-gray-700/80 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "This field is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Must be a 10-digit number",
                      },
                    })}
                    className="w-full px-4 py-2 bg-gray-700/80 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="1234567890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="h-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="10"
                    {...register("message", {
                      required: "This field is required",
                    })}
                    className="w-full h-[calc(100%-2rem)] px-4 py-2 bg-gray-700/80 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Write your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-12 bg-gradient-to-r from-[#35FF3D] to-[#009900] text-white py-3 rounded-md hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <CompanyData />
      </div>
    </section>
  );
};

export default Forms;
