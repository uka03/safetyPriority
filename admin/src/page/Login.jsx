import React from "react";
import { useState } from "react";
import { useUsers } from "../context/User.context";

export default function Login(props) {
  const { Login } = useUsers();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="w-full absolute h-[100vh] flex top-0 z-50 bg-white ">
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url( https://wallpapercave.com/wp/wp5177861.jpg)`,
        }}
      ></div>
      <div className="w-1/2 flex flex-col mt-24 items-center gap-20 ">
        <div className=""></div>
        <div className="">
          <h1 className="text-7xl font-bold">
            {" "}
            <span className="text-amber-500">Car</span> rental
          </h1>
          <p className="text-end text-2xl">Safety Priority </p>
        </div>
        <form
          className="w-2/5 flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent form submission
            Login({ name, password });
          }}
        >
          <input
            placeholder="Admin name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className=" w-full rounded-full border-2 border-amber-500 px-5 py-2 focus:border-amber-400 focus:shadow focus:shadow-amber-500 focus:outline-none"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className=" w-full rounded-full border-2 border-amber-500 px-5 py-2 focus:border-amber-400 focus:shadow focus:shadow-amber-500 focus:outline-none"
          />
          <button
            className="border rounded-full px-5 py-2 hover:border-amber-500 hover:bg-amber-500 hover:text-white duration-500 transition-all"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
