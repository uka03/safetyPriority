import React from "react";
import headerImg from "../../images/headerImg.png";

export default function Header(props) {
  return (
    <div
      className="h-[250px] w-full  bg-cover sm:h-[350px] md:h-[450px] lg:h-[700px] xl:[650px]"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className=" pt-16 h-full  container mx-auto pb-4 px-6 lg:px-8">
        <div className=" flex flex-col justify-center h-full w-1/2 sm:gap-3 md:gap-4 lg:gap-20">
          <p className="text-white text-lg sm:text-3xl font-extrabold leading-tight lg:text-5xl">
            Renting cars have never been this easy
          </p>
          <p className="text-white text-xs sm:text-sm md:text-md lg:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  );
}
