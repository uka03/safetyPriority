import React from "react";
import { RiSteering2Fill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";

export default function HomeCard({ car, carCartOnClick }) {
  return (
    <div
      className="border border-black shadow-lg rounded-3xl w-[280px] h-[400px]  p-5 flex flex-col gap-4"
      onClick={() => {
        carCartOnClick(car._id);
      }}
    >
      <div className="border w-full h-3/4 rounded-3xl">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full rounded-3xl"
        />
      </div>
      <div className="p-2 flex flex-col gap-3">
        <p className="text-2xl font-medium">{car.name}</p>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <BsFillPeopleFill size={20} />
            <p>Max.Passenger {car.maxPassenger}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RiSteering2Fill size={20} />
            <p>{car.type}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TbManualGearbox size={20} />
            <p>{car.gearBox}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <IoIosSpeedometer size={20} />
            <p>{car.speed} km/h</p>
          </div>
        </div>
      </div>
      <div className="w-full text-end">
        <p className="text-2xl text-blue-900 font-medium">
          USD {car.price}/Day
        </p>
      </div>
    </div>
  );
}
