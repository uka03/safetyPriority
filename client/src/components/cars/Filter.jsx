import React from "react";
import { getCarBrand, getCarType } from "../../util/util";

const FilterSidebar = () => {
  const types = getCarType();
  const brands = getCarBrand();
  console.log(types);
  return (
    <div className="flex  flex-col w-64 bg-white top-24 border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl text-blue-900 font-bold">Filter Sidebar</h2>
      </div>
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Type</h3>
        <ul className="space-y-2">
          {types.map((type, index) => (
            <li key={index}>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">{type}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-blue-900 mb-2">Brand</h3>
        <ul className="space-y-2">
          {brands.map((brand, index) => (
            <li key={index}>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
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
