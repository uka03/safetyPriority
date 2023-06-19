import React from "react";
import { useCars } from "../../context/cars.context";

const FilterSidebar = () => {
  const { carTypes, carBrand, addQueryHandler, queryObj } = useCars();

  return (
    <div className="flex  flex-col w-full bg-white top-24 border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl text-amber-500 font-bold">Filter Sidebar</h2>
      </div>
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium text-amber-500 mb-2">Type</h3>
        <ul className="space-y-2">
          {carTypes.map((type, index) => (
            <li key={index} onClick={() => addQueryHandler("type", type)}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  defaultChecked={
                    queryObj.type ? queryObj.type.indexOf(type) !== -1 : false
                  }
                />
                <span className="ml-2">{type}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-amber-500 mb-2">Brand</h3>
        <ul className="space-y-2">
          {carBrand.map((brand, index) => (
            <li key={index} onClick={() => addQueryHandler("brand", brand)}>
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
  );
};

export default FilterSidebar;
