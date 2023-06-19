import React from "react";
import { safeties } from "../../util/util";
import SafeCard from "./SafeCard";
import safety from "../../images/safety.png";
export default function Safe(props) {
  return (
    <div className="container mx-auto p-4">
      <div className="border rounded-3xl p-5 lg:p-10 w-full flex justify-between items-center">
        <div className="w-full lg:w-7/12 flex flex-col gap-12 lg:gap-32">
          <div className="flex flex-col gap-8 text-center">
            <p className="text-4xl font-semibold">Car rental keeps you safe</p>
            <p className="text-md text-gray-400">
              The safety of our employees and renters is our number one
              priority. In addition to being confident your vehicle is cleaned
              and sanitized every time you rent, you can also feel confident
              that we will take every opportunity to enhance the health and
              safety measures currently practiced in our operations.
            </p>
          </div>
          <div className="flex justify-between gap-2 ">
            {safeties.map((safe, index) => (
              <SafeCard data={safe} key={index} />
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <img src={safety} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
