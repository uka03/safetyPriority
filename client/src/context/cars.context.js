/* eslint-disable eqeqeq */
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
  const [results, setResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const query = useLocation();
  const limit = 20;

  const queryParams = new URLSearchParams(query.search);
  const queryObj = {};

  queryParams.forEach((value, key) => {
    queryObj[key] = value;
  });

  const queryString = new URLSearchParams({ ...queryObj, limit }).toString();

  function addQueryHandler(key, value) {
    if (queryObj[key]) {
      queryObj[key] = value;
      if (typeof queryObj[key] === "string") queryObj[key] = [queryObj[key]];
      console.log(queryObj[key], "f");
      if (queryObj[key] == "all") {
        delete queryObj[key];
      }
      queryObj.page = "1";
    } else {
      if (typeof queryObj[key] === "string") queryObj[key] = [queryObj[key]];
      console.log(queryObj[key], "d");
      if (queryObj[key] == "all") {
        delete queryObj[key];
      }
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
    axios.get(`https://safetypriority.onrender.com/carType`).then((res) => {
      setCarTypes(res.data);
    });
    axios.get(`https://safetypriority.onrender.com/carBrand`).then((res) => {
      setCarBrand(res.data);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://safetypriority.onrender.com/cars?${queryString}`)
      .then((res) => {
        setcars(res.data);
        setIsLoading(false);
      });
    axios
      .get(`https://safetypriority.onrender.com/carsTotalPage?${queryString}`)
      .then((res) => {
        console.log(res.data);
        setTotalPages(res.data.totalPage);
        setResults(res.data.count);
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
        results,
        isLoading,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
}
