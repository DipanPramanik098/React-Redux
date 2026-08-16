import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={submitHandler} className="space-y-5">

      {/* Email */}
      <label htmlFor="email" className="block">
        <p className="text-sm font-medium text-slate-300 mb-2">
          Email Address<sup className="text-pink-500">*</sup>
        </p>

        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email id"
          className="w-full h-12 px-3 rounded-md
                     bg-slate-900 border border-slate-700
                     text-white placeholder:text-slate-500
                     outline-none
                     focus:border-cyan-500
                     focus:ring-1 focus:ring-cyan-500
                     transition-all duration-200"
        />
      </label>

      {/* Password */}
      <label htmlFor="password" className="block">
        <p className="text-sm font-medium text-slate-300 mb-2">
          Password<sup className="text-pink-500">*</sup>
        </p>

        <div className="relative">
          <input
            name="password"
            id="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            required
            type={showPassword ? "text" : "password"}
            className="w-full h-12 px-3 pr-12 rounded-md
                       bg-slate-900 border border-slate-700
                       text-white placeholder:text-slate-500
                       outline-none
                       focus:border-cyan-500
                       focus:ring-1 focus:ring-cyan-500
                       transition-all duration-200"
          />

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2
                       text-slate-400 cursor-pointer
                       hover:text-white transition-colors"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
      </label>

      {/* Forgot Password */}
      <div className="flex justify-end -mt-2">
        <Link
          to="#"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Forgot Password
        </Link>
      </div>

      {/* Sign In */}
      <button
        className="w-full h-11 rounded-md
                   bg-yellow-400 text-slate-950
                   font-semibold
                   hover:bg-yellow-300
                   active:scale-[0.99]
                   transition-all duration-200"
      >
        Sign In
      </button>

    </form>
  );
};

export default LogInForm;