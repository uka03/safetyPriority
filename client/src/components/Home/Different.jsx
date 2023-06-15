import React from "react";
import { differents } from "../../util/util";
import DiffCard from "./DiffCard";
export default function Different(props) {
  return (
    <div className="container mx-auto h-[600px] flex flex-col gap-10">
      <div className="w-[600px] text-center mx-auto flex flex-col gap-5">
        <h1 className=" text-5xl font-extrabold">Why We Are Different</h1>
        <p className=" text-gray-500 text-sm w-10/12 mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className=" w-full flex gap-4">
        {differents.map((diff) => (
          <DiffCard data={diff} />
        ))}
      </div>
    </div>
  );
}
