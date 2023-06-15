import React from "react";
import headerImg from "../../images/headerImg.png";

export default function Header(props) {
  return (
    <div
      className="sm:h-[800px] w-full sm:bg-cover bg-contain"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="pt-48 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-12 sm:mb-16">
            Renting cars have never been this easy
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-12 sm:mb-16">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  );
}
