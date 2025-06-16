import React from "react";
import { Carousel } from "../components/Carousel";
import { Brands } from "../components/Brands";
import { Video } from "../components/Video";
import { Forms } from "../components/Forms";
import { Grid } from "../components/Grid";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Brands />
      <Video />
      <Grid />
    </>
  );
};

export default Home;
