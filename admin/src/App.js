import { Route, Routes } from "react-router";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Home from "./page/Home";
import Login from "./page/Login";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center bg-mycolor">
        <div className="flex container justify-between">
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
