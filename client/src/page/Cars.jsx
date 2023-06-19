import React, { useState } from "react";
import FilterSidebar from "../components/cars/Filter";
import Card from "../components/common/Card";
import Pagination from "../components/cars/Pagination";
import { HiAdjustments } from "react-icons/hi";
import { useCars } from "../context/cars.context";
import SelectFilter from "../components/cars/SelectFilter";

export default function Cars(props) {
  const { cars, totalPage, queryObj, onChangePage, isLoading, results } =
    useCars();

  return (
    <div className="relative container mx-auto py-24 flex flex-col gap-5 px-4">
      <div className="flex flex-col gap-5 ">
        <div className="w-full   flex items-center justify-around">
          <div className="text-xl">
            {" "}
            <span className="font-bold text-amber-500 text-2xl">
              Result :
            </span>{" "}
            {results}
          </div>
          <SelectFilter />
          <div className="text-2xl ">
            Car<span className="text-amber-500">Rental</span>{" "}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-3 justify-between w-full ">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
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
