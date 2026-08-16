import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WindowComponent from "./components/WindowComponent";

const App = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Dipan");

  function changeHandler(e) {
    setText(e.target.value);
  }

  // ? Type - 1  => har render mei chalega
  useEffect(() => {
    console.log("UI Rendering Done");
  });

  // ? Type - 2  => only first render mei chalega
  useEffect(() => {
    console.log("UI Rendering Done --< Type 2 > ");
  }, []);
  
  
  // ? Type - 3  => first time and then sirf name ki value change per chalega mei chalega
  useEffect(() => {
    console.log("UI Rendering Done --< Type 3 > ");
  }, [name]);


  // ? Type - 4  => to handle unmounting of a component
  useEffect(() => {
    console.log("Listner Added"); // then this line execute
    return () =>{
      console.log("Listner Removed");  // first this line execute
    }
  }, [text]);



  return (
    <>
      <div className="App">
        <input
          type="text"
          name=""
          id=""
          onChange={changeHandler}
          value={text}
        />

        <WindowComponent/>
      </div>
    </>
  );
};

export default App;
