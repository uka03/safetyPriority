import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { navbar, socials } from "../util/util";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: `rgba(245, 158, 11, ${
      scrollY > 0.3 ? 1 : location.pathname === "/" ? 0.3 : 1
    })`,
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-2xl"
      style={navbarStyle}
    >
      <div className="container mx-auto p-2 sm:p-4 text-white flex flex-wrap justify-between items-center">
        <p className="text-xl sm:text-2xl font-medium  md:w-auto order-1">
          Safety Priority
        </p>
        <div className="flex flex-wrap gap-4 text-lg sm:text-xl justify-center w-full sm:w-auto order-3 sm:order-1">
          {navbar.map((nav, index) => (
            <div
              key={index}
              onClick={() => navigate(nav.path)}
              className="hover:cursor-pointer "
            >
              {nav.label}
            </div>
          ))}
        </div>
        <div className="flex text-xl sm:text-3xl gap-4 border-2 border-white rounded-xl py-1 px-2 sm:py-2 sm:px-3 order-2 sm:order-1 bg-amber-500 bg-opacity-60">
          {socials.map((social, index) => {
            return (
              <a href={social.path} key={index}>
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
