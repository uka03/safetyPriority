import React from "react";

export default function SafeCard({ data }) {
  return (
    <div className="w-1/3 bg-gray-200 py-3 px-2 lg:py-7 lg:px-5 rounded-xl lg:rounded-3xl flex flex-col gap-5 justify-center md:justify-between">
      <p className="text-xl md:text-2xl lg:text-3xl self-end">{data.icon}</p>
      <p className="text-[8px] md:text-base lg:text-lg ">{data.description}</p>
    </div>
  );
}
