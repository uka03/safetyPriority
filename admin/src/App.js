import { Route, Routes } from "react-router";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Home from "./page/Home";
// import Login from "./page/Login";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Cars from "./page/Cars";
import AddCar from "./page/AddCar";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center bg-mycolor">
        <div className="flex container justify-between">
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/test" element={<AddCar />} />
          </Routes>
          {/* login page harahiig husvel ene commentuudiig arilgahad l bolno hha */}
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Login />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
