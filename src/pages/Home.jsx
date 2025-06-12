import React from "react";
import { Carousel } from "../components/Carousel";
import { Brands } from "../components/Brands";
import { Video } from "../components/Video";
import { Forms } from "../components/Forms";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Brands />
      <Video />
      <Forms />
    </>
  );
};

export default Home;
