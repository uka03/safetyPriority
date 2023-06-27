import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Route, Routes } from "react-router";
import Login from "./page/Login.jsx";
import Home from "./page/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Cars from "./page/Cars";
import Car from "./page/Car";
import Admins from "./page/Admins";
import HeaderClient from "./components/webEdit/HeaderClient";
import Webedit from "./page/Webedit";
function App() {
  return (
    <div className="w-full relative">
      <Header />
      <div className="flex gap-5">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cars" element={<Cars />} />
          <Route path="admins" element={<Admins />} />
          <Route path="cars/:id" element={<Car />} />
          <Route path="webedit" element={<Webedit />}>
            <Route path="header" element={<HeaderClient />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
