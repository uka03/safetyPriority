import React, { useState } from "react";
import { BiSearch, BiDownArrow, BiLogOut, BiCog } from "react-icons/bi";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  border border-black py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col w-2/12 ">
          <h1 className="text-4xl font-medium">
            Car<span className="text-amber-500">Rental</span>
            <p className="text-sm text-end me-6">Dashboard</p>
          </h1>
        </div>
        <div className="border-2 border-amber-500 rounded-full px-3 py-2 flex items-center gap-2 w-5/12">
          <div className="text-2xl text-amber-700">
            <BiSearch />
          </div>
          <input
            type="text"
            className="focus:outline-none w-full"
            placeholder="Search ...."
          />
        </div>

        <div className="relative">
          {" "}
          <button
            type="button"
            className="inline-flex items-center justify-center w-full gap-2 text-lg  rounded-xl px-5 py-2 font-medium text-white bg-amber-500    shadow-sm focus:outline-none "
            onClick={toggleDropdown}
          >
            <p>Admin :</p>
            <p>Naraa</p>
            <div
              className={` transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <BiDownArrow />
            </div>
          </button>
          {isOpen && (
            <div className="absolute z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
              <ul
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <li>
                  <a
                    href="*"
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-2"
                    role="menuitem"
                  >
                    <span className="text-lg text-amber-500">
                      <BiCog />
                    </span>
                    Settings
                  </a>
                </li>
                <div className=" border border-dashed mx-3" />
                <li>
                  <a
                    href="/login"
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-2"
                    role="menuitem"
                    onClick={() => localStorage.removeItem("token")}
                  >
                    <span className="text-lg text-amber-500">
                      <BiLogOut />
                    </span>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
