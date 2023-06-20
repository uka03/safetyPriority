import React, { useEffect } from "react";
import {
  BsCarFrontFill,
  BsFillPeopleFill,
  BsMusicPlayerFill,
} from "react-icons/bs";
import { FaSprayCan } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearbox, TbSteeringWheel } from "react-icons/tb";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";
import { useParams } from "react-router";
import Drivetrain from "../images/Drivetrain";
import Intrior from "../images/intrior";
import { useState } from "react";
import axios from "axios";

export default function Car(props) {
  const id = useParams().id;
  const [car, setCar] = useState();
  useEffect(() => {
    axios.get(`https://safetypriority.onrender.com/car/${id}`).then((res) => {
      setCar(res.data);
    });
  }, [id]);
  document.title = "Car | Car Rental";
  return (
    car && (
      <div className="flex flex-wrap container py-20 gap-2 mx-auto min-h-[700px] p-5">
        <div
          className="w-[350px] rounded-3xl p-3  lg:w-[40%] lg:h-[500px] bg-blue-500 lg:rounded-[80px] z-10 flex justify-center items-center md:p-5 md:mt-5"
          // eslint-disable-next-line react/style-prop-object
          style={{
            background:
              "linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(245,158,11,1) 100%)",
          }}
        >
          <img src={car.image} alt="car" className="w-full " />
        </div>
        <div className="rounded-3xl p-3 md:rounded-[50px] border-4 border-amber-500 md:w-[840px] lg:w-[65%]  md:h-[400px] lg:h-auto lg:-ms-32 lg:mt-32 lg:p-10 lg:ps-36 md:p-5">
          <div className="w-full h-full flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3 lg:gap-10">
              <p className=" text-lg md:text-3xl font-medium">{car.name}</p>
              <p className="text-xs md:text-base">{car.description}</p>
            </div>
            <div className="flex flex-wrap  gap-7 lg:p-10 lg:gap-x-10 lg:gap-y-5 justify-between lg:mb-12 md:text-base text-xs">
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <FaSprayCan />
                </div>
                <p>Color : </p>
                <div
                  className={` w-5 h-5 md:w-7 md:h-7  rounded-full border border-black`}
                  style={{
                    background: `${car.color}`,
                  }}
                ></div>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="text-base md:text-xl">
                  <Intrior />
                </div>
                <p>Interior color: </p>
                <div
                  className={` w-5 h-5 md:w-7 md:h-7 rounded-full border border-black`}
                  style={{
                    background: `${car.interior_color}`,
                  }}
                ></div>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <BsMusicPlayerFill />
                </div>
                <p>Music : {car.music}</p>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="text-base md:text-xl">
                  <BsCarFrontFill />
                </div>
                <p>Type : {car.type}</p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <BsFillPeopleFill />
                </div>
                <p>Max.Passenger {car.maxPassenger}</p>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="">
                  <Drivetrain />
                </div>
                <p>Drivetrain: {car.drivetrain}</p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <TbManualGearbox />
                </div>
                <p>Gearbox : {car.gearBox}</p>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="text-base md:text-xl">
                  <IoIosSpeedometer />
                </div>
                <p>Gearbox : {car.speed}km/h</p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <GiCarDoor />
                </div>
                <p>Door : {car.door}</p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <TbSteeringWheel />
                </div>
                <div className="flex items-center gap-2">
                  Driver :{" "}
                  {car.driver ? (
                    <div className="text-base md:text-lg">
                      <AiFillCheckCircle color="green" />
                    </div>
                  ) : (
                    <div className="text-base md:text-lg">
                      <BsFillXCircleFill color="red" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" w-full text-end text-lg font-bold text-blue-900 md:text-3xl">
              USD {car.price}/Day
            </div>
          </div>
        </div>
      </div>
    )
  );
}
