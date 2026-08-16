import React from "react";

const Card = ({ name, price, date }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default Card;