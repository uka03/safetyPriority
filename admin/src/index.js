import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/User.context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarsProvider from "./context/cars.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <CarsProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
        <ToastContainer />
      </CarsProvider>
    </UserProvider>
  </BrowserRouter>
);
