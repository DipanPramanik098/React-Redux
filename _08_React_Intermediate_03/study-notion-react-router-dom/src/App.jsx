import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col">
      <NavBar login={login} setIsLoggedIn={setLogin} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn setIsLoggedIn={setLogin}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setLogin} />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </div>
  );
};

export default App;
