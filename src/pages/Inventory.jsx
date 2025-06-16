import React from "react";
import { Hero } from "../components/Hero";
import Grid from "../components/Grid";

export const Inventory = () => {
  return (
    <>
      <Hero title="Inventory" image="/src/assets/img/hero/hero-3/banner.png" />
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Grid />
        </div>
      </section>
    </>
  );
};

export default Inventory;
