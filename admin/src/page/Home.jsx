import React, { useEffect } from "react";

import { useUsers } from "../context/User.context";
import { FaCarSide, FaCogs, FaUserShield } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
export default function Home(props) {
  const { isLogin } = useUsers();
  useEffect(() => {
    console.log(isLogin);
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, [isLogin]);
  return (
    <div className="mt-5 w-full h-full   p-5 flex flex-col gap-10">
      <div className="w-full flex gap-10">
        <a
          href="/cars"
          onClick={() => localStorage.setItem("selectedItem", "cars")}
          className="  w-1/2  text-center  rounded-3xl p-9 bg-amber-400  hover:shadow-2xl  hover:shadow-amber-400  hover:bg-amber-600 group"
        >
          <div className="w-full text-9xl  flex flex-col items-center justify-center text-white">
            <FaCarSide />
            <h1 className="text-7xl  font-bold ">Rent Cars</h1>
          </div>
        </a>
        <a
          href="/admins"
          onClick={() => localStorage.setItem("selectedItem", "admins")}
          className="  w-1/2  text-center  rounded-3xl p-9  hover:shadow-2xl  hover:shadow-purple-400  bg-purple-400 hover:bg-purple-600 group"
        >
          <div className="w-full text-9xl  flex flex-col items-center justify-center text-white">
            <FaUserShield />
            <h1 className="text-7xl  font-bold ">Admins</h1>
          </div>
        </a>
      </div>
      <div className="w-full flex gap-10">
        <a
          href="/webEdit"
          onClick={() => localStorage.setItem("selectedItem", "webEdit")}
          className="  w-1/2  text-center  rounded-3xl p-9  hover:shadow-2xl  hover:shadow-blue-400  bg-blue-400 hover:bg-blue-600 group"
        >
          <div className="w-full text-9xl  flex flex-col items-center justify-center text-white">
            <CgWebsite />
            <h1 className="text-7xl  font-bold ">Web edit</h1>
          </div>
        </a>
        <a
          href="/settings"
          className="  w-1/2  text-center hover:shadow-2xl  hover:shadow-green-400  rounded-3xl p-9 bg-green-400 hover:bg-green-600 group"
        >
          <div className="w-full text-9xl  flex flex-col items-center justify-center text-white">
            <FaCogs />
            <h1 className="text-7xl  font-bold ">Settings</h1>
          </div>
        </a>
      </div>
    </div>
  );
}
