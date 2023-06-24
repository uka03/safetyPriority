import React, { useState, useEffect } from "react";
import { SiStackedit } from "react-icons/si";
import { MdDashboard, MdCarRental, MdAdminPanelSettings } from "react-icons/md";

const Sidebar = () => {
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedItem") || "dashboard"
  );

  const handleItemClick = (item) => {
    setSelected(item);
    localStorage.setItem("selectedItem", item);
  };

  useEffect(() => {
    localStorage.setItem("selectedItem", selected);
  }, [selected]);

  return (
    <div className="flex min-h-[90vh]">
      <div className="flex-shrink-0 w-56 bg-white border-r">
        {/* Sidebar content */}
        <nav className="flex flex-col py-4 px-6 space-y-1 gap-5">
          <a
            href="/"
            className={`flex items-center py-2 px-4  gap-2 rounded-2xl ${
              selected === "dashboard"
                ? "bg-amber-500 text-white"
                : "hover:bg-gray-100 text-gray-700 border border-gray-500"
            }`}
            onClick={() => handleItemClick("dashboard")}
          >
            <span className="text-2xl">
              <MdDashboard />
            </span>
            Dashboard
          </a>
          <a
            href="/cars"
            className={`flex items-center py-2 px-4  gap-2 rounded-2xl ${
              selected === "cars"
                ? "bg-amber-500 text-white"
                : "hover:bg-gray-100 text-gray-700 border border-gray-500"
            }`}
            onClick={() => handleItemClick("cars")}
          >
            <span className="text-3xl">
              <MdCarRental />
            </span>
            Cars
          </a>
          <a
            href="/admins"
            className={`flex items-center py-2 px-4  gap-2 rounded-2xl ${
              selected === "admins"
                ? "bg-amber-500 text-white"
                : "hover:bg-gray-100 text-gray-700 border border-gray-500"
            }`}
            onClick={() => handleItemClick("admins")}
          >
            <span className="text-2xl">
              <MdAdminPanelSettings />
            </span>
            Admins
          </a>
          <a
            href="/webedit"
            className={`flex items-center py-2 px-4  gap-2 rounded-2xl ${
              selected === "webEdit"
                ? "bg-amber-500 text-white"
                : "hover:bg-gray-100 text-gray-700 border border-gray-500"
            }`}
            onClick={() => handleItemClick("webEdit")}
          >
            <span className="text-2xl">
              <SiStackedit />
            </span>
            Web Edit
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
