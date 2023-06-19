import React from "react";
import { Carousel } from "primereact/carousel";

import { useNavigate } from "react-router";
import { useCars } from "../../context/cars.context";
import HomeCard from "./HomeCard";

export default function FeaturedCars() {
  const navigate = useNavigate();
  const { cars } = useCars();
  const responsiveOptions = [
    {
      breakpoint: "1280px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "1100px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "640px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const cardTemplate = (car) => <HomeCard car={car} />;

  return (
    <div className="container flex flex-col mx-auto lg:mt-10 items-center gap-3">
      <p className="text-3xl lg:text-5xl font-bold">Our Featured Cars</p>
      <div className="w-[90%] text-end mx-auto">
        <p
          className="text-ms lg:text-xl hover:cursor-pointer"
          onClick={() => {
            navigate("cars");
          }}
        >
          See <span className="text-blue-800">More {">>>"}</span>
        </p>
      </div>
      <div className="w-full ">
        <Carousel
          value={cars.slice(0, 9)}
          numVisible={4}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={cardTemplate}
          // circular
        />
      </div>
    </div>
  );
}
