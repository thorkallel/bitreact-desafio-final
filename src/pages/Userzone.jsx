import React from "react";
import { Hero } from "../components/Hero";
import UserData from "../components/UserData";
import UserCart from "../components/UserCart";
import UserOrders from "../components/UserOrders";

export const Userzone = () => {
  return (
    <div>
      <Hero title="User zone" image="/src/assets/img/page-header/banner7.png" />
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <UserData />
          <hr className="my-4" />
          <UserCart />
          <hr className="my-4" />
          <UserOrders />
        </div>
      </section>
    </div>
  );
};
