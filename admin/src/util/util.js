import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { BsFillBookmarksFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaFlask } from "react-icons/fa";
import { RiHeartPulseFill, RiFolderLockFill } from "react-icons/ri";
import cars from "./carData.json";

export const navbar = [
  { label: "Home", path: "/" },
  { label: "Cars", path: "/cars" },
  { label: "Contact", path: "/contact" },
];

export const socials = [
  { icon: <RiFacebookBoxLine />, path: "" },
  { icon: <RiInstagramLine />, path: "" },
  { icon: <RiWhatsappLine />, path: "" },
];

export const differents = [
  {
    icon: <BsFillBookmarksFill />,
    label: "Easy Booking",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    icon: <AiFillSafetyCertificate />,
    label: "Secure Payments",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    icon: <MdLocationOn />,
    label: "24/7 Tracking",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
];

export const safeties = [
  {
    icon: <FaFlask />,
    description: "Every car is thoroughly sanitized and cleaned",
  },
  {
    icon: <RiHeartPulseFill />,
    description: "All of our employees wear masks",
  },
  {
    icon: <RiFolderLockFill />,
    description: "We stay up to date with all protocol from the CDC",
  },
];

export function getCarType() {
  const types = [];

  cars.forEach((car) => {
    if (!types.includes(car.category)) {
      types.push(car.category);
    }
  });
  return types;
}

export function getCarBrand() {
  const brands = [];
  cars.forEach((car) => {
    if (!brands.includes(car.brand)) {
      brands.push(car.brand);
    }
  });
  return brands;
}

export function getCar(id) {
  let car;

  for (let i = 0; i < cars.length; i++) {
    if (cars[i]._id === id) {
      car = cars[i];
    }
  }
  return car;
}
