import React, { useState } from "react";
import ProductForm from "./component/ProductForm";

const App = () => {
  const clickHandler = () => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "black" ? "white" : "black";
  };

  let [count, setCount] = useState(0);

  // function define
  const print = (data) => {
    console.log(data);
  };
  return (
    <div>
      <button onClick={clickHandler} className="btn">
        Hello
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn"
      >
        Count : {count}
      </button>

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />

      <ProductForm printProd={print}/>
    </div>
  );
};

export default App;
