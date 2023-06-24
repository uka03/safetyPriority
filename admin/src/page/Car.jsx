import React, { useEffect } from "react";
import {
  BsCarFrontFill,
  BsFillPeopleFill,
  BsMusicPlayerFill,
} from "react-icons/bs";
import { toast } from "react-toastify";

import { FiEdit } from "react-icons/fi";
import { FaSnowflake, FaSprayCan } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearbox, TbSteeringWheel } from "react-icons/tb";
import { useParams } from "react-router";
import Drivetrain from "../images/Drivetrain";
import Intrior from "../images/intrior";
import { useState } from "react";
import axios from "axios";
import Dailog from "../components/Dailog";
import { useUsers } from "../context/User.context";

export default function Car(props) {
  const id = useParams().id;
  const [car, setCar] = useState();
  const [isChanged, setIsChanged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState();
  const { isLogin } = useUsers();
  useEffect(() => {
    console.log(isLogin);
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, [isLogin]);
  useEffect(() => {
    id !== "create"
      ? axios.get(`http://localhost:3030/car/${id}`).then((res) => {
          setCar(res.data);
          console.log(res, "hh");
        })
      : setCar({
          name: "",
          brand: "Toyota",
          type: "",
          door: 0,
          maxPassenger: 0,
          condition: true,
          color: "",
          gearBox: "",
          driver: true,
          price: 0,
          interior_color: "",
          music: "",
          drivetrain: "",
          speed: 0,

          special: false,
          description: "",
        });
  }, [id]);

  function saveHandler() {
    let image = new FormData();
    newProfileImage && image.append("image", newProfileImage);
    image.append("body", JSON.stringify(car));

    axios
      .put(`http://localhost:3030/cars/${car._id}`, image)
      .then((data) => console.log(data));

    setIsChanged(false);
  }
  function deleteHandler() {
    axios.delete(`http://localhost:3030/cars/${car._id}`).then((data) => {
      toast.success("car deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setShowModal(false);
      window.location.href = "/cars";
    });

    setIsChanged(false);
  }
  function createHandler() {
    const isValueMissing = Object.values(car).some(
      (value) => value === undefined || value === ""
    );
    console.log(isValueMissing, car);
    if (isValueMissing) {
      toast.warning("Informetion is missing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let image = new FormData();
      newProfileImage && image.append("image", newProfileImage);
      image.append("body", JSON.stringify(car));

      axios.post(`http://localhost:3030/cars`, image).then((data) => {
        toast.success("new car added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

      setIsChanged(false);
    }
  }

  document.title = "Car | Car Rental";
  return (
    car && (
      <div className="flex flex-wrap container  gap-2 mx-auto min-h-[700px] p-5">
        <div
          className="w-[350px] rounded-3xl p-5  lg:w-[40%] lg:h-[500px] bg-blue-500 lg:rounded-[80px] z-10 flex justify-center items-center md:p-5 md:mt-5"
          style={{
            background:
              "linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(245,158,11,1) 100%)",
          }}
        >
          <picture className=" relative block">
            {newProfileImage ? (
              <img
                src={URL.createObjectURL(newProfileImage)}
                alt="profile"
                className="w-full "
              />
            ) : (
              <img src={car.image} alt="car" className="w-full " />
            )}
            <label className=" absolute p-5 text-2xl bg-white rounded-full right-0 bottom-0">
              <p>
                <FiEdit />
              </p>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  setNewProfileImage(e.target.files[0]);
                  setIsChanged(true);
                }}
                value={""}
                className="hidden"
              />
            </label>
          </picture>
        </div>

        <div className="rounded-3xl p-3 md:rounded-[50px] border-4 border-amber-500 md:w-[840px] lg:w-[65%]  md:h-[400px] lg:h-auto lg:-ms-32 lg:mt-32 lg:p-10 lg:ps-36 md:p-5 flex flex-col">
          <div className="flex w-full justify-end gap-5">
            <button
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded self-end disabled:bg-slate-400"
              disabled={!isChanged}
              onClick={id === "create" ? createHandler : saveHandler}
            >
              {id === "create" ? "Create car" : "Save"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded self-end disabled:bg-slate-400"
              onClick={() => setShowModal(true)}
              disabled={!car._id}
            >
              delete
            </button>
          </div>
          {showModal ? (
            <Dailog
              setShowModal={setShowModal}
              deleteHandler={deleteHandler}
              id={car._id}
            />
          ) : null}
          <div className="w-full h-full flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3 lg:gap-10">
              <p className=" text-lg md:text-3xl font-medium">
                <input
                  type="text"
                  defaultValue={car.name}
                  placeholder="enter car name"
                  className="focus:outline-none  "
                  onChange={(e) => {
                    car.name = e.target.value;
                    setCar({ ...car });
                    setIsChanged(true);
                  }}
                />
              </p>
              <p className="text-xs md:text-base">
                <input
                  type="text"
                  placeholder="Description"
                  defaultValue={car.description}
                  className="focus:outline-none w-full "
                  onChange={(e) => {
                    car.description = e.target.value;
                    setCar({ ...car });
                    setIsChanged(true);
                  }}
                />
              </p>
            </div>
            <div className="flex flex-wrap  gap-7 lg:p-10 lg:gap-x-10 lg:gap-y-5 justify-between lg:mb-12 md:text-base text-xs">
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <FaSprayCan />
                </div>
                <p>Color : </p>
                <label htmlFor="color" className="flex">
                  <input
                    type="color"
                    name="color"
                    id="color"
                    className={`w-5 h-5 md:w-7 md:h-7  rounded-full border border-black`}
                    style={{
                      background: `${car.color}`,
                    }}
                    onChange={(e) => {
                      car.color = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                    value={car.color}
                  />
                </label>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="text-base md:text-xl">
                  <Intrior />
                </div>
                <p>Interior color: </p>
                <label htmlFor="inColor" className="flex">
                  <input
                    type="color"
                    name="inColor"
                    id="inColor"
                    className={`w-5 h-5 md:w-7 md:h-7  rounded-full border border-black`}
                    style={{
                      background: `${car.interior_color}`,
                    }}
                    onChange={(e) => {
                      car.interior_color = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                    value={car.interior_color}
                  />
                </label>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <BsMusicPlayerFill />
                </div>
                <p>
                  Music :{" "}
                  <input
                    type="text"
                    defaultValue={car.music}
                    placeholder="music here ..."
                    className="focus:outline-none w-28 "
                    onChange={(e) => {
                      car.music = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="text-base md:text-xl">
                  <BsCarFrontFill />
                </div>
                <p>
                  Type :{" "}
                  <input
                    type="text"
                    placeholder="car type here.."
                    defaultValue={car.type}
                    className="focus:outline-none w-28 "
                    onChange={(e) => {
                      car.type = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <BsFillPeopleFill />
                </div>
                <p>
                  Max.Passenger:
                  <input
                    type="number"
                    defaultValue={car.maxPassenger}
                    placeholder="passenger ..."
                    className="focus:outline-none ps-1 w-24 "
                    onChange={(e) => {
                      car.maxPassenger = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="">
                  <Drivetrain />
                </div>
                <p>
                  Drivetrain:{" "}
                  <input
                    type="text"
                    defaultValue={car.drivetrain}
                    className="focus:outline-none w-20"
                    placeholder="type.."
                    onChange={(e) => {
                      car.drivetrain = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <TbManualGearbox />
                </div>
                <p>
                  Gearbox :{" "}
                  <input
                    type="text"
                    defaultValue={car.gearBox}
                    placeholder="gearBox.."
                    className="focus:outline-none w-24 "
                    onChange={(e) => {
                      car.gearBox = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink-0">
                <div className="text-base md:text-xl">
                  <IoIosSpeedometer />
                </div>
                <p>
                  Speed :{" "}
                  <input
                    type="text"
                    defaultValue={car.speed}
                    className="focus:outline-none w-8 "
                    onChange={(e) => {
                      car.speed = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                  km/h
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <GiCarDoor />
                </div>
                <p>
                  Door :{" "}
                  <input
                    type="text"
                    defaultValue={car.door}
                    className="focus:outline-none w-6 "
                    onChange={(e) => {
                      car.door = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  />
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <FaSnowflake />
                </div>
                <p>
                  Air condition :{" "}
                  <select
                    name=""
                    id=""
                    defaultValue={car.condition}
                    onChange={(e) => {
                      car.driver = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  >
                    <option value="true">yes</option>
                    <option value="false">no</option>
                  </select>
                </p>
              </div>
              <div className="flex  items-center gap-2 shrink">
                <div className="text-base md:text-xl">
                  <TbSteeringWheel />
                </div>
                <div className="flex items-center gap-2">
                  Driver :{" "}
                  <select
                    name=""
                    id=""
                    defaultValue={car.driver}
                    onChange={(e) => {
                      car.driver = e.target.value;
                      setCar({ ...car });
                      setIsChanged(true);
                    }}
                  >
                    <option value="true">yes</option>
                    <option value="false">no</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" w-full text-end text-lg font-bold text-blue-900 md:text-3xl">
              USD{" "}
              <input
                type="text"
                defaultValue={car.price}
                className="focus:outline-none w-14 "
                onChange={(e) => {
                  car.price = e.target.value;
                  setCar({ ...car });
                  setIsChanged(true);
                }}
              />
              /Day
            </div>
          </div>
        </div>
      </div>
    )
  );
}
