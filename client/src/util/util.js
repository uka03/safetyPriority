import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { BsFillBookmarksFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn, MdMail } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaFlask, FaLocationArrow } from "react-icons/fa";
import { RiHeartPulseFill, RiFolderLockFill } from "react-icons/ri";
import cars from "./carData.json";

export const navbar = [
  { label: "Home", path: "/" },
  { label: "Cars", path: "/cars" },
  { label: "Contact", path: "/contact" },
];

export const socials = [
  {
    icon: <RiFacebookBoxLine />,
    path: "",
    name: "Facebook",
    address: "Safety Priority",
  },
  {
    icon: <RiInstagramLine />,
    path: "",
    name: "Instagram",
    address: "Safety Priority",
  },
  {
    icon: <RiWhatsappLine />,
    path: "",
    name: "WhatsApp",
    address: "Safety Priority",
  },
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

export const about = {
  image:
    "https://www.viewmongolia.com/mongolia/mongolia-car-rental/hiring-driver-in-mongolia.jpg",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quisquam nostrum fugit voluptatum amet eligendi! Fuga minus incidunt similique aspernatur, amet quam alias officiis architecto consequatur adipisci possimus sed quod odit, saepe asperiores porro provident, quo deleniti? Quos magnam possimus perspiciatis quod? Sed, quas soluta, voluptatibus laudantium dolor adipisci necessitatibus blanditiis libero expedita iure odit eligendi corrupti ad laborum quo.",
};
export const contact = {
  image:
    "https://backpackingman.com/wp-content/uploads/2016/09/DSC01735-1080x717.jpg",
  contacts: [
    {
      icon: <MdMail />,
      name: "Email",
      address: "SafetyPriority@gmail.com",
    },
    {
      icon: <BsFillTelephoneFill />,
      name: "Phone",
      address: "88119911",
    },
    {
      icon: <FaLocationArrow />,
      name: "address",
      address:
        "Bayan Bulag Luxury Town, #307, Yalalt Plaza, Ikh toiruu 17/1 5th khoroo, Ulaanbaatar 15150",
    },
  ],
};
