import React from "react";

export default function DiffCard({ data }) {
  console.log(data);
  return (
    <div
      className="w-1/3 shadow-2xl px-4  flex flex-col gap-8 py-10 pb-32
    "
    >
      <div className="w-full flex justify-center text-blue-900 text-[150px]">
        {data.icon}
      </div>
      <div className="w-full text-center flex flex-col gap-2 px-10">
        <p className="text-3xl">{data.label}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
