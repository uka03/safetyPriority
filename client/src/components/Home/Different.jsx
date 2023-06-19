import React from "react";
import { differents } from "../../util/util";
import DiffCard from "./DiffCard";

export default function Different(props) {
  return (
    <div className="container mx-auto lg:h-[600px] flex flex-col gap-10">
      <div className="lg:w-[600px] text-center mx-auto flex flex-col gap-5">
        <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-extrabold">
          Why We Are Different
        </h1>
        <p className=" text-gray-500 text-sm w-10/12 mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className=" w-full flex gap-4 sm:gap-4 flex-col p-5 sm:flex-row sm:flex-wrap lg:flex-nowrap">
        {differents.map((diff, index) => (
          <DiffCard data={diff} key={index} />
        ))}
      </div>
    </div>
  );
}
