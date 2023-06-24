import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Cars from "./page/Cars";
import Contact from "./page/Contact";
import Home from "./page/Home";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Footer from "./components/Footer";
import NotFound from "./page/NotFound";
import Car from "./page/Car";
import CarsProvider from "./context/cars.context";

function App() {
  return (
    <CarsProvider>
      <div className="flex flex-col min-h-[100vh] justify-between">
        <Navbar />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<Car />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </CarsProvider>
  );
}

export default App;
