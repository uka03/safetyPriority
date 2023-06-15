import React from "react";
import {
  BsCarFrontFill,
  BsFillPeopleFill,
  BsMusicPlayerFill,
} from "react-icons/bs";
import { FaSprayCan } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import { useParams } from "react-router";
import Drivetrain from "../images/Drivetrain";
import Intrior from "../images/intrior";
import { getCar } from "../util/util";

export default function Car(props) {
  const id = useParams().id;
  const car = getCar(id);
  console.log(` bg-[${car.color}] `);
  return (
    <div className="flex flex-wrap container py-24 gap-2 mx-auto min-h-[700px]">
      <div
        className=" w-[500px] h-[500px] bg-blue-500 rounded-[80px] z-10 flex justify-center items-center p-6"
        // eslint-disable-next-line react/style-prop-object
        style={{
          background:
            "linear-gradient(265.64deg, #1F4590 3.74%, #97B9FD 97.16%)",
        }}
      >
        <img src={car.image} alt="car" className="w-full " />
      </div>
      <div className=" rounded-[50px] border-4 border-blue-900 w-[840px] h-[540px] -ms-32 mt-32 p-10 ps-36">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col gap-10">
            <p className="text-3xl font-medium">{car.name}</p>
            <p>{car.description}</p>
          </div>
          <div className="flex flex-wrap p-10 gap-x-10 gap-y-5 justify-between mb-12">
            <div className="flex items-center gap-2">
              <FaSprayCan size={20} />
              <p>Color : </p>
              <div
                className={`w-7 h-7 bg-[${car.color}]   rounded-full border border-black`}
              ></div>
            </div>
            <div className="flex items-center gap-2">
              <Intrior />
              <p>Interior color: : </p>
              <div
                className={`w-7 h-7 bg-[${car.interior_color}] rounded-full border border-black`}
              ></div>
            </div>
            <div className="flex items-center gap-2">
              <BsMusicPlayerFill size={20} />
              <p>Music : {car.music}</p>
            </div>
            <div className="flex items-center gap-2">
              <BsCarFrontFill size={20} />
              <p>Type : {car.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillPeopleFill size={20} />
              <p>Max.Passenger {car.maxPassenger}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="">
                <Drivetrain />
              </div>
              <p>Drivetrain: {car.drivetrain}</p>
            </div>
            <div className="flex items-center gap-2">
              <TbManualGearbox size={20} />
              <p>Gearbox : {car.gearBox}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoIosSpeedometer size={20} />
              <p>Gearbox : {car.speed}km/h</p>
            </div>
            <div className="flex items-center gap-2">
              <GiCarDoor size={20} />
              <p>door : {car.door}</p>
            </div>
            <div className="flex items-center gap-2">
              <TbManualGearbox size={20} />
              <p>Gearbox : {car.gearBox}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
