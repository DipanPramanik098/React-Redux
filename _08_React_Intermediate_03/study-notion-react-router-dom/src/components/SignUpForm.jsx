import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accountType: "Student",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const accountTypeHandler = (type) => {
    setFormData((prev) => ({
      ...prev,
      accountType: type,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Did Not Match");
      return;
    }

    navigate("/");
    setIsLoggedIn(true);
    toast.success("Account Created");
  };

  return (
    <form onSubmit={submitHandler} className="w-full">
      {/* Student / Instructor */}
      <div className="mb-6 inline-flex rounded-full bg-slate-900 p-1">
        <button
          type="button"
          onClick={() => accountTypeHandler("Student")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            formData.accountType === "Student"
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Student
        </button>

        <button
          type="button"
          onClick={() => accountTypeHandler("Instructor")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            formData.accountType === "Instructor"
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Instructor
        </button>
      </div>

      <div className="space-y-5">
        {/* First Name + Last Name */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* First Name */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-200">
              First Name <sup className="text-pink-400">*</sup>
            </span>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              required
              className="
                h-11 w-full rounded-md
                border border-slate-700
                bg-slate-900
                px-4
                text-sm text-white
                outline-none
                placeholder:text-slate-500
                transition-all duration-200
                focus:border-cyan-400
                focus:ring-1 focus:ring-cyan-400/30
              "
            />
          </label>

          {/* Last Name */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-200">
              Last Name <sup className="text-pink-400">*</sup>
            </span>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
              required
              className="
                h-11 w-full rounded-md
                border border-slate-700
                bg-slate-900
                px-4
                text-sm text-white
                outline-none
                placeholder:text-slate-500
                transition-all duration-200
                focus:border-cyan-400
                focus:ring-1 focus:ring-cyan-400/30
              "
            />
          </label>
        </div>

        {/* Email */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">
            Email Address <sup className="text-pink-400">*</sup>
          </span>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            required
            className="
              h-11 w-full rounded-md
              border border-slate-700
              bg-slate-900
              px-4
              text-sm text-white
              outline-none
              placeholder:text-slate-500
              transition-all duration-200
              focus:border-cyan-400
              focus:ring-1 focus:ring-cyan-400/30
            "
          />
        </label>

        {/* Phone Number */}
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-200">
            Phone Number <sup className="text-pink-400">*</sup>
          </span>

          <div className="flex gap-3">
            {/* Country Code */}
            <div
              className="
                flex h-11 w-[72px] shrink-0
                items-center justify-center
                rounded-md
                border border-slate-700
                bg-slate-900
                text-sm text-slate-300
              "
            >
              +91
            </div>

            {/* Phone */}
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
              placeholder="12345 67890"
              required
              className="
                h-11 w-full rounded-md
                border border-slate-700
                bg-slate-900
                px-4
                text-sm text-white
                outline-none
                placeholder:text-slate-500
                transition-all duration-200
                focus:border-cyan-400
                focus:ring-1 focus:ring-cyan-400/30
              "
            />
          </div>
        </label>

        {/* Password + Confirm Password */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Password */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-200">
              Create Password <sup className="text-pink-400">*</sup>
            </span>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                required
                className="
                  h-11 w-full rounded-md
                  border border-slate-700
                  bg-slate-900
                  px-4 pr-11
                  text-sm text-white
                  outline-none
                  placeholder:text-slate-500
                  transition-all duration-200
                  focus:border-cyan-400
                  focus:ring-1 focus:ring-cyan-400/30
                "
              />

              <button
                type="button"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                onClick={() => setShowPassword((prev) => !prev)}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>

          {/* Confirm Password */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-200">
              Confirm Password <sup className="text-pink-400">*</sup>
            </span>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder="Confirm Password"
                required
                className="
                  h-11 w-full rounded-md
                  border border-slate-700
                  bg-slate-900
                  px-4 pr-11
                  text-sm text-white
                  outline-none
                  placeholder:text-slate-500
                  transition-all duration-200
                  focus:border-cyan-400
                  focus:ring-1 focus:ring-cyan-400/30
                "
              />

              <button
                type="button"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>
        </div>

        {/* Create Account */}
        <button
          type="submit"
          className="
            mt-2 h-11 w-full
            rounded-md
            bg-yellow-400
            px-6
            text-sm font-semibold
            text-slate-950
            transition-all duration-200
            hover:bg-yellow-300
            active:scale-[0.99]
            focus:outline-none
            focus:ring-2
            focus:ring-yellow-400/40
          "
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;