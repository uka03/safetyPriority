import React from "react";
import { RiSteering2Fill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import { useNavigate } from "react-router";

export default function Card({ car }) {
  const navigate = useNavigate();

  function carCartOnClick(id) {
    navigate(id);
  }
  return (
    <div
      className="w-[160px] h-[210px]  rounded-xl border border-black lg:shadow-lg lg:rounded-3xl lg:w-[280px] lg:h-[400px] p-3 lg:p-5 flex flex-col lg:gap-4 gap-1"
      onClick={() => {
        carCartOnClick(car._id);
      }}
    >
      <div className="border w-full h-3/4 rounded-xl lg:rounded-3xl">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full rounded-xl lg:rounded-3xl"
        />
      </div>
      <div className="lg:p-2 flex flex-col gap-1 lg:gap-3">
        <p className="text-base lg:text-2xl font-medium">{car.name}</p>
        <div className="flex flex-wrap justify-between gap-2 lg:gap-4">
          <div className="flex items-center gap-1 text-[8px] lg:text-sm">
            <div className="text-xs lg:text-lg">
              <BsFillPeopleFill />
            </div>
            <p>Max.Passenger {car.maxPassenger}</p>
          </div>
          <div className="flex items-center gap-1 text-[8px] lg:text-sm">
            <div className="text-xs lg:text-lg">
              <RiSteering2Fill />
            </div>
            <p>{car.type}</p>
          </div>
          <div className="flex items-center gap-1 text-[8px] lg:text-sm">
            <div className="text-xs lg:text-lg">
              <TbManualGearbox />
            </div>
            <p>{car.gearBox}</p>
          </div>
          <div className="flex items-center gap-1 text-[8px] lg:text-sm">
            <div className="text-xs lg:text-lg">
              <IoIosSpeedometer />
            </div>
            <p>{car.speed} km/h</p>
          </div>
        </div>
      </div>
      <div className="w-full text-end">
        <p className="text-sm lg:text-2xl text-blue-900 font-medium">
          USD {car.price}/Day
        </p>
      </div>
    </div>
  );
}
