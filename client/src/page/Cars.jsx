import React, { useState } from "react";
import FilterSidebar from "../components/cars/Filter";
import cars from "../util/carData.json";
import Card from "../components/common/Card";
import Pagination from "../components/cars/Pagination";
import { useNavigate } from "react-router";

export default function Cars(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  function carCartOnClick(id) {
    navigate(id);
  }
  return (
    <div className="relative container mx-auto py-24 flex flex-col gap-5">
      <div className="flex  justify-between gap-10">
        <div className="w-4/12">
          <FilterSidebar />
        </div>
        <div className="flex flex-wrap gap-3 justify-between">
          {cars.map((car) => (
            <Card car={car} carCartOnClick={carCartOnClick} />
          ))}
        </div>
      </div>
      <div className="w-full justify-center flex">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
