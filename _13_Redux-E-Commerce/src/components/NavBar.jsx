import React from "react";
import logo from "/logo.png";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo} alt="" className="h-14" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative inline-flex items-center justify-center text-2xl cursor-pointer">
              <IoMdCart className="text-2xl" />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
