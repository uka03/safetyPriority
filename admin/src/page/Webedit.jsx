import React from "react";
import { Outlet } from "react-router-dom";
export default function Webedit(props) {
  return (
    <div className="w-full py-5 pe-5">
      <Outlet />
    </div>
  );
}
