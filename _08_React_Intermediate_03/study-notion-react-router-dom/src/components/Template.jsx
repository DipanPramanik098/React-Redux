import React from "react";
import frame from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>

          <p className="mb-7 space-y-1">
            <span className="block text-slate-400 text-base">{desc1}</span>

            <span className="block text-cyan-400 italic text-base">
              {desc2}
            </span>
          </p>

          {formtype === "signup" ? (
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LogInForm setIsLoggedIn={setIsLoggedIn} />
          )}

          {/* OR */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-slate-700 flex-1"></div>

            <p className="text-sm text-slate-500">OR</p>

            <div className="h-px bg-slate-700 flex-1"></div>
          </div>

          {/* Google */}
          <button
            className="w-full h-11 rounded-md border border-slate-700
                       bg-slate-950 text-slate-300
                       hover:bg-slate-900 hover:border-slate-600
                       transition-all duration-200"
          >
            <p className="text-sm font-medium">Sign Up With Google</p>
          </button>
        </div>

        {/* Right Section */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Frame */}
          <img
            src={frame}
            alt="pattern"
            width={558}
            height={504}
            loading="lazy"
            className="absolute w-[500px] h-[450px] object-cover translate-x-3 translate-y-3"
          />

          {/* Main Image */}
          <img
            src={image}
            alt="students"
            width={558}
            height={490}
            loading="lazy"
            className="relative w-[500px] h-[440px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
