import React from "react";
import Template from "../components/Template";
import login from "../assets/login.png";

const LogIn = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      dsc1="Build skills for today, tomorrow, and beyond."
      dsc2="Education to future-proof your career."
      image={login}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default LogIn;