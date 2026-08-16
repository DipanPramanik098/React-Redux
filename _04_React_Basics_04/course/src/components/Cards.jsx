import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  if (!courses) return null;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {
        courses.map(card => {
            return <Card key={card.id} card={card}/>
        })
      }
    </div>
  );
};

export default Cards;