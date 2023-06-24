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
function App() {
  return (
    <div className="w-full relative">
      <Header />
      <div className="flex gap-5">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<Car />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
