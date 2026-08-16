import React, { useState } from "react";
import Card from "./Card";

const Testimonials = ({ reviews }) => {
  let [index, setIndex] = useState(0);
  const nextHandle = (idx) => {
    let n = reviews.length;
    setIndex((idx - 1 + n) % n);
  };
  const prevHandle = (idx) => {
    let n = reviews.length;
    setIndex((idx + 1) % n);
  };
  const surpriseHandle = () => {
    const random = Math.floor(Math.random() * 5);
    setIndex(random);
  }
  return (
    <div>
      <Card
        card={reviews[index]}
        nextHandle={nextHandle}
        prevHandle={prevHandle}
        surpriseHandle={surpriseHandle}
      />
    </div>
  );
};

export default Testimonials;
