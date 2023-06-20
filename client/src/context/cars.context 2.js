import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export const CarsContext = createContext();

export const useCars = () => useContext(CarsContext);

export default function CarsProvider({ children }) {
  const [cars, setcars] = useState([]);
  const [totalPage, setTotalPages] = useState(0);
  const [carTypes, setCarTypes] = useState([]);
  const [carBrand, setCarBrand] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = useLocation();
  const limit = 15;

  const queryParams = new URLSearchParams(query.search);
  const queryObj = {};

  queryParams.forEach((value, key) => {
    queryObj[key] = value;
  });

  const queryString = new URLSearchParams({ ...queryObj, limit }).toString();

  function addQueryHandler(key, value) {
    if (queryObj[key]) {
      if (typeof queryObj[key] === "string")
        queryObj[key] = queryObj[key].split(",");

      if (queryObj[key].some((n) => n === value)) {
        queryObj[key].splice(queryObj[key].indexOf(value), 1);
        if (queryObj[key].length == 0) {
          delete queryObj[key];
        }
      } else {
        const newarr = [...queryObj[key], value];
        queryObj[key] = newarr;
      }
      queryObj.page = "1";
    } else {
      queryObj.page = "1";
      queryObj[key] = value;
    }

    const queryString = new URLSearchParams({ ...queryObj }).toString();
    const url = `/cars?${queryString}`;

    window.location.href = url;
  }

  function onChangePage(page) {
    queryObj.page = page;
    const queryString = new URLSearchParams({ ...queryObj }).toString();
    const url = `/cars?${queryString}`;
    window.location.href = url;
  }
  useEffect(() => {
    axios.get(`http://localhost:3030/carType`).then((res) => {
      setCarTypes(res.data);
    });
    axios.get(`http://localhost:3030/carBrand`).then((res) => {
      setCarBrand(res.data);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3030/cars?${queryString}`).then((res) => {
      setcars(res.data);
      setIsLoading(false);
    });
    axios
      .get(`http://localhost:3030/carsTotalPage?${queryString}`)
      .then((res) => {
        setTotalPages(res.data.totalPage);
      });
  }, [queryString]);

  return (
    <CarsContext.Provider
      value={{
        cars,
        totalPage,
        carTypes,
        carBrand,
        queryObj,
        addQueryHandler,
        onChangePage,
        isLoading,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
}
