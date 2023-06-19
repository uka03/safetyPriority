import React from "react";

export default function DiffCard({ data }) {
  console.log(data);
  return (
    <div
      className="w-full sm:w-[48%] grow shadow-2xl px-4  flex flex-col gap-8 py-3 lg:py-10 pb-10 lg:pb-32
    "
    >
      <div className="w-full flex justify-center text-blue-900 text-[80px] lg:text-[150px]">
        {data.icon}
      </div>
      <div className="w-full text-center flex flex-col gap-2 px-10">
        <p className="text-3xl">{data.label}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
