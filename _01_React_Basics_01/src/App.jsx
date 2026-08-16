import React from "react";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

const App = () => {
  const data = [
    { n: "Dipan", d: 2, m: "September", y: 2004 },
    { n: "Rahul", d: 15, m: "January", y: 2003 },
    { n: "Amit", d: 28, m: "March", y: 2005 },
    { n: "Priya", d: 10, m: "June", y: 2004 },
    { n: "Ankit", d: 22, m: "August", y: 2003 },
    { n: "Sneha", d: 5, m: "December", y: 2005 },
    { n: "Rohit", d: 17, m: "February", y: 2004 },
    { n: "Neha", d: 30, m: "April", y: 2003 },
    { n: "Arjun", d: 8, m: "July", y: 2005 },
    { n: "Karan", d: 25, m: "November", y: 2004 },
  ];
  return (
    <div>
      <Item />
      <ItemDate n="Dipan" d={2} m="September" y={2004} />

      {
        data.map((D) => {
          return <ItemDate n={D.n} d={D.d} m={D.m} y={D.y}/>
        })
      }
    </div>
  );
};

export default App;
