import React, { useState } from "react";
import headerImg from "../../images/headerImg.png";
import TextareaAutosize from "react-textarea-autosize";
export default function HeaderClient(props) {
  const [value, setValue] = useState("Renting cars have never been this easy");

  return (
    <div
      className="h-[250px] w-full  bg-cover sm:h-[350px] md:h-[450px] lg:h-[700px] xl:[650px]"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className=" pt-16 h-full  container mx-auto pb-4 px-6 lg:px-8">
        <div className=" flex flex-col justify-center h-full w-1/2 sm:gap-3 md:gap-4 lg:gap-20">
          <TextareaAutosize
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="text-white text-lg sm:text-3xl font-extrabold leading-tight lg:text-5xl resize-none bg-transparent outline-none"
          />

          <TextareaAutosize
            value={
              " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit."
            }
            className="text-white text-xs sm:text-sm md:text-md lg:text-xl outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
