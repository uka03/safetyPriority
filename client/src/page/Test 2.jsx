import React, { useState } from "react";

const OffCanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="fixed top-32 left-0 z-50 m-4">
        Toggle Menu
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          {/* Menu items */}g
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        b{/* Content */}
      </div>
    </div>
  );
};

export default OffCanvasMenu;
