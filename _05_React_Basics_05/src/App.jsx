import React from "react";
import Testimonials from "./component/Testimonials";
import reviews from "./utils/data";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Our Testimonials</h1>
      <div
        style={{
          height: "2px",
          width: "150px",
          backgroundColor: "black",
          margin: "10px auto",
        }}
      />
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
