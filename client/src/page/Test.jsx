import React, { useState } from "react";
import { useCars } from "../context/cars.context";

const OffCanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { carTypes, carBrand, addQueryHandler, queryObj } = useCars();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="fixed top-28 left-0 z-50 m-4">
        Toggle Menu
      </button>
      <div
        className={` absolute top-32 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full p-4">
          <div className="flex  flex-col w-full bg-white top-24 border-r">
            <div className="p-4 border-b">
              <h2 className="text-xl text-blue-900 font-bold">
                Filter Sidebar
              </h2>
            </div>
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-blue-900 mb-2">Type</h3>
              <ul className="space-y-2">
                {carTypes.map((type, index) => (
                  <li key={index} onClick={() => addQueryHandler("type", type)}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        defaultChecked={
                          queryObj.type
                            ? queryObj.type.indexOf(type) !== -1
                            : false
                        }
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-blue-900 mb-2">Brand</h3>
              <ul className="space-y-2">
                {carBrand.map((brand, index) => (
                  <li
                    key={index}
                    onClick={() => addQueryHandler("brand", brand)}
                  >
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        defaultChecked={
                          queryObj.brand
                            ? queryObj.brand.indexOf(brand) !== -1
                            : false
                        }
                      />
                      <span className="ml-2">{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
