import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const NavBar = ({ login, setLogin }) => {
  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src={Logo}
            alt="StudyNotion Logo"
            width={160}
            height={32}
            loading="lazy"
            className="w-40 h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-lg text-slate-300">
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition-colors duration-200 hover:text-white"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition-colors duration-200 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Authentication */}
        <div className="flex items-center gap-3">

          {!login && (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md border border-slate-700 
                         bg-slate-900 text-slate-200
                         hover:bg-slate-800 hover:text-white
                         transition-all duration-200"
            >
              Log in
            </Link>
          )}

          {!login && (
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md border border-slate-700
                         bg-slate-800 text-slate-200
                         hover:bg-slate-700 hover:text-white
                         transition-all duration-200"
            >
              Sign up
            </Link>
          )}

          {login && (
            <Link
              to="/"
              onClick={() => {
                setLogin(false);
                toast.success("Logged Out");
              }}
              className="px-4 py-2 rounded-md
                         text-slate-300
                         hover:bg-red-500/10 hover:text-red-400
                         transition-all duration-200"
            >
              Log Out
            </Link>
          )}

          {login && (
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-md
                         bg-blue-600 text-white
                         hover:bg-blue-700
                         transition-all duration-200"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;