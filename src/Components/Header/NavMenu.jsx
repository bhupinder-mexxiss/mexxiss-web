import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <ul className="flex items-center justify-between gap-16 bg-white border-r-8 border-l-8 border-red-600 px-10">
        <li className="px-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary border-b-[3px] border-transparent duration-300 ${
                isActive && "border-primary"
              }`
            }
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary border-b-[3px] border-transparent duration-300 ${
                isActive && "border-primary"
              }`
            }
          >
            <span>About Us</span>
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary border-b-[3px] border-transparent duration-300 ${
                isActive && "border-primary"
              }`
            }
          >
            <span>Products</span>
          </NavLink>
        </li>
        <li className="px-3">
          <NavLink
            to="/contact-us"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary border-b-[3px] border-transparent duration-300 ${
                isActive && "border-primary"
              }`
            }
          >
            <span>Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
