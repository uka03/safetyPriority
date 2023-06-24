import React from "react";
import { useCars } from "../context/cars.context";

export default function SelectFilter(props) {
  const { carTypes, addQueryHandler, queryObj } = useCars();
  return (
    <div className="px-4 py-2 border border-amber-500 rounded-full">
      <select
        name=""
        id=""
        onChange={(e) => addQueryHandler("type", e.target.value)}
        className="w-full focus:outline-none"
      >
        <option value="all">All</option>
        {carTypes.map((type) => {
          return (
            <option
              value={type}
              selected={
                queryObj.type ? queryObj.type.indexOf(type) !== -1 : false
              }
            >
              {type}
            </option>
          );
        })}
      </select>
    </div>
  );
}
