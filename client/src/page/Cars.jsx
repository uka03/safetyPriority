import React, { useState } from "react";
import FilterSidebar from "../components/cars/Filter";
import Card from "../components/common/Card";
import Pagination from "../components/cars/Pagination";
import { HiAdjustments } from "react-icons/hi";
import { useCars } from "../context/cars.context";

export default function Cars(props) {
  const { cars, totalPage, queryObj, onChangePage, isLoading } = useCars();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative container mx-auto py-24 flex flex-col gap-5 px-4">
      <div className="w-full md:hidden text-end">
        <button className="text-2xl" onClick={toggleMenu}>
          <HiAdjustments />
        </button>
        <div
          className={` absolute top-20 left-0 w-[100vw] h-full bg-gray-900 bg-opacity-50 z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={toggleMenu}
        >
          {" "}
          <div className="w-64 h-full p-4 container bg-white">
            {" "}
            <FilterSidebar />
          </div>
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="w-3/12 hidden md:block">
          <FilterSidebar />
        </div>
        <div className="flex flex-wrap gap-3 md:gap-3 justify-between w-full md:w-9/12">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
            </div>
          ) : (
            cars.map((car, key) => <Card car={car} key={key} />)
          )}
        </div>
      </div>
      <div className="w-full justify-center flex">
        <Pagination
          currentPage={queryObj.page ? queryObj.page : 1}
          totalPages={totalPage}
          onPageChange={(page) => {
            onChangePage(page);
          }}
        />
      </div>
    </div>
  );
}
