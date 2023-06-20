import React from "react";
import Different from "../components/Home/Different";
import FeaturedCars from "../components/Home/FeaturedCars";
import Header from "../components/Home/Header";
import Safe from "../components/Home/Safe";

export default function Home(props) {
  document.title = "Home | Car Rental";
  return (
    <div className="flex flex-col gap-5 lg:gap-16 mb-24 w-full">
      <Header />
      <FeaturedCars />
      <Different />
      <Safe />
    </div>
  );
}
