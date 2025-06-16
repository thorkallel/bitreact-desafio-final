import React from "react";
import { useCarsContext } from "../context/CarsContext";
import Card from "./Card";
import { useLocation } from "react-router-dom";

export const Grid = () => {
  const { cars } = useCarsContext();
  const location = useLocation();
  const isInventoryPage = location.pathname === "/inventory";

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {isInventoryPage ? "Our Complete Collection" : "Featured Cars"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isInventoryPage
            ? cars.map((car) => <Card key={car.id} car={car} />)
            : cars.map((car) => <Card key={car.id} car={car} />).slice(0, 3)}
        </div>
      </div>
    </section>
  );
};

export default Grid;
