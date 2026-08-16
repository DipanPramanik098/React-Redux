import React from "react";

const ItemDate = (props) => {
  // const d = 2;
  // const m = "Septembet";
  // const y = 2004;
  return (
    <div>
        <h1>{props.n}</h1>
      <span>{props.d + " "}</span>
      <span>{props.m + " "}</span>
      <span>{props.y}</span>
    </div>
  );
};

export default ItemDate;
