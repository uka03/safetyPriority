import React from "react";
import cars from "../../util/carData.json";
import { Carousel } from "primereact/carousel";
import Card from "../common/Card";
import { useNavigate } from "react-router";

export default function FeaturedCars() {
  const navigate = useNavigate();
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const cardTemplate = (car) => <Card car={car} />;

  return (
    <div className="container flex flex-col mx-auto mt-10 items-center gap-3">
      <p className="text-5xl font-bold">Our Featured Cars</p>
      <div className="w-[90%] text-end mx-auto">
        <p
          className="text-xl hover:cursor-pointer"
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
          responsiveOptions={responsiveOptions}
          numScroll={3}
          itemTemplate={cardTemplate}
          circular
        />
      </div>
    </div>
  );
}
