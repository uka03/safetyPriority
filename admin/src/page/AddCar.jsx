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
import carData from "../util/carData.json";
import Pencil from "../icons/Pencil";
import { drivetrain, gearbox, maxSpeed, music, type } from "../util/constant";

export default function AddCar() {
  const cars = carData.data;
  const car = cars[0];
  return (
    <form className=" h-screen w-9/12 border-l-2 border-white text-white">
      <div className="flex w-full">
        <div
          className="relative w-[500px] h-[500px] bg-blue-500 rounded-[80px] z-10 flex justify-center items-center m-2 p-6"
          style={{
            background:
              "linear-gradient(265.64deg, #1F4590 3.74%, #97B9FD 97.16%)",
          }}
        >
          <img src={car.image} alt="car" className="w-full " />
          {/* <input
            type="file"
            className="absolute right-8 bottom-8 flex justify-center items-center rounded-full h-12 w-12 bg-white shadow-xl  shadow-black"
          /> */}
          <button className="absolute right-8 bottom-8 flex justify-center items-center rounded-full h-12 w-12 bg-white shadow-xl  shadow-black">
            <Pencil />
          </button>
        </div>
        <div className=" rounded-[50px] border-4 border-blue-900 w-[840px] h-[540px] -ms-32 mt-32 p-10 ps-36">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col gap-10">
              <input
                type="text"
                className="text-black h-12 p-5 text-2xl font-bold rounded-2xl"
                defaultValue={car.name}
              />
              <textarea
                className="text-black h-24 p-5 text-xl font-bold rounded-2xl"
                type="text"
                defaultValue={car.description}
              />
            </div>
            <div className="flex flex-wrap p-10 gap-x-10 gap-y-5 justify-between mb-12">
              <div className="flex items-center gap-2">
                <FaSprayCan size={20} />
                <p>
                  Color :{" "}
                  <input type="color" className="rounded-xl" name="" id="" />
                </p>
                {/* <div
                className={`w-7 h-7 bg-[${car.color}]   rounded-full border border-black`}
              ></div> */}
              </div>
              <div className="flex items-center gap-2">
                <p>Interior color: : </p>
                {/* <select name="" id="">
                {interiorColor.map((ic, index) => (
                  <option
                    key={index}
                    className={`w-7 h-7 bg-${ic} rounded-full border border-black`}
                  >
                    aa
                  </option>
                ))}
              </select> */}{" "}
                <input
                  type="color"
                  defaultValue={car.interior_color}
                  name=""
                  id=""
                  className="rounded-xl"
                />
              </div>
              <div className="flex items-center gap-2">
                <BsMusicPlayerFill size={20} />
                <p>
                  Music :
                  <select className="text-black rounded-xl" name="" id="">
                    {music.map((mu, index) => (
                      <option key={index} value={car.music}>
                        {mu}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsCarFrontFill size={20} />
                <p>
                  Type :{" "}
                  <select name="" className="text-black rounded-xl" id="">
                    {type.map((tp, index) => (
                      <option key={index} value={car.category}>
                        {tp}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BsFillPeopleFill size={20} />
                <p>
                  Max.Passenger{" "}
                  <input
                    type="number"
                    className="text-black rounded-xl w-16 px-3"
                    defaultValue={car.maxPassenger}
                  />
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className=""></div>
                <p>
                  Drivetrain:{" "}
                  <select name="" className="text-black rounded-xl" id="">
                    {drivetrain.map((dt, index) => (
                      <option key={index} value={car.drivetrain}>
                        {dt}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <TbManualGearbox size={20} />
                <p>
                  Gearbox :{" "}
                  <select name="" className="text-black rounded-xl" id="">
                    {gearbox.map((gb, index) => (
                      <option key={index} value={car.gearBox}>
                        {gb}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GiCarDoor size={20} />
                <p>
                  door :{" "}
                  <input
                    type="number"
                    className="text-black rounded-xl w-16 px-3"
                    defaultValue={car.door}
                  />
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoIosSpeedometer size={20} />
                <p>
                  MaxSpeed :{" "}
                  <select name="" className="text-black rounded-xl" id="">
                    {maxSpeed.map((ms, index) => (
                      <option key={index} value={car.maxSpeed}>
                        {ms}
                      </option>
                    ))}
                  </select>
                  km/h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button type="submit" className="h-12 w-24 bg-button rounded-2xl">
          UPDATE
        </button>
      </div>
    </form>
  );
}
