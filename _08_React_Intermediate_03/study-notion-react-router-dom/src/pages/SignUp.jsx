import React from "react";
import Template from "../components/Template";
import signup from '../assets/signup.png';

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with studynotion for free"
      dsc1="Build skills for today, tomorrow, and beyond."
      dsc2="Education to future-proof your career."
      image={signup}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default SignUp;
