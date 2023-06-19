import React from "react";

export default function Footer(props) {
  return (
    <div className="w-full bg-gray-200 py-6 lg:py-12 ">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="flex flex-col gap-5">
          <p className="text-lg lg:text-2xl font-medium ">Safety Priority</p>
          <p className="text-xs lg:text-sm text-gray-500">
            Rides for the daily achievers
          </p>
          <p className="text-xs lg:text-sm text-gray-500">
            © Copyright Safety Priority Inc.
          </p>
        </div>
        <div className="w-5/12 flex flex-col gap-2">
          <p className="text:lg lg:text-xl font-medium ">Contact us</p>
          <p className="text-xs lg:text-sm text-gray-500">Info@gmail.com</p>
          <p className="text-xs lg:text-sm text-gray-500">
            {" "}
            {"(976) 9911-8811"}
          </p>
          <p className="text-xs lg:text-sm text-gray-500">
            2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
