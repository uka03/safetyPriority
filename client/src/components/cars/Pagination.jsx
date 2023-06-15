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
            className="border rounded-md p-2 text-2xl text-blue-900 min-w-[60px] min-h-[50px] flex justify-center items-center hover:bg-blue-800 hover:text-white border-blue-900 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <IoIosArrowBack />
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              className={`border rounded-md p-2 text-lg min-w-[60px]  min-h-[50px] border-blue-900 text-blue-900 hover:bg-blue-800 hover:text-white ${
                page === currentPage ? "bg-blue-800 text-white" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className="border rounded-md p-2 text-2xl text-blue-900 min-w-[60px] min-h-[50px] flex justify-center items-center hover:bg-blue-800 hover:text-white border-blue-900 disabled:border-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
