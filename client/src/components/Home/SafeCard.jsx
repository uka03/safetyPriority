import React from "react";

export default function SafeCard({ data }) {
  return (
    <div className="w-1/3 bg-gray-200 py-7 px-5 rounded-3xl flex flex-col gap-5 justify-between">
      <p className="text-3xl self-end">{data.icon}</p>
      <p className="text-lg ">{data.description}</p>
    </div>
  );
}
