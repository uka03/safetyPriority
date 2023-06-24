import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SelectFilter from "../components/SelectFilter";
import { useCars } from "../context/cars.context";
import { useUsers } from "../context/User.context";

export default function Cars(props) {
  const { cars, totalPage, queryObj, onChangePage } = useCars();
  const { isLogin } = useUsers();
  useEffect(() => {
    console.log(isLogin);
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, [isLogin]);
  const navigate = useNavigate();

  return (
    <div className="mt-5 p-5 flex flex-col gap-4">
      <div className="flex justify-around items-center">
        <div className="flex gap-2 items-center">
          <p>Type: </p>
          <SelectFilter />
        </div>

        <Pagination
          currentPage={queryObj.page ? queryObj.page : 1}
          totalPages={totalPage}
          onPageChange={onChangePage}
        />
        <button
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded self-end disabled:bg-slate-400"
          onClick={() => navigate("create")}
        >
          Create car
        </button>
      </div>
      <div className=" flex flex-wrap justify-between  gap-y-5">
        {cars.map((car) => (
          <Card car={car} />
        ))}
      </div>
    </div>
  );
}
