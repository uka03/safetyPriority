/* eslint-disable eqeqeq */
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const minShow = 5;
  let startPage = currentPage - Math.floor(minShow / 2);
  startPage = Math.max(startPage, 1);
  const endPage = Math.min(startPage + minShow - 1, totalPages);
  if (endPage === totalPages) {
    startPage = Math.max(endPage - minShow + 1, 1);
  }
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex gap-3">
        <li>
          <button
            className="border rounded-md p-2 text-xl md:text-2xl text-amber-500 min-w-[40px] min-h-[35px] md:min-w-[60px] md:min-h-[50px]  flex justify-center items-center hover:bg-amber-400 hover:text-white border-amber-500 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
            disabled={currentPage == 1}
            onClick={() => onPageChange(Number(currentPage) - 1)}
          >
            <IoIosArrowBack />
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              className={`border rounded-md p-2 text-sm md:text-lg min-w-[40px] min-h-[35px] md:min-w-[60px] md:min-h-[50px]  border-amber-500 text-amber-700 hover:bg-amber-400 hover:text-white ${
                page == currentPage ? "bg-amber-400 text-white" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className="border rounded-md p-2 text-xl md:text-2xl text-amber-500 min-w-[40px] min-h-[35px] md:min-w-[60px] md:min-h-[50px]  flex justify-center items-center hover:bg-amber-400 hover:text-white border-amber-500 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
            disabled={currentPage == totalPages}
            onClick={() => onPageChange(Number(currentPage) + 1)}
          >
            <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
