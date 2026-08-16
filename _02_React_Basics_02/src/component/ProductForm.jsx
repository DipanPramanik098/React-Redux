import React, { useState } from "react";
import Card from "./Card";

const ProductForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const [products, setProduct] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      date,
    };
    setProduct((prev) => [...prev, newProduct]);
    props.printProd(products);
    setName("");
    setDate("");
    setPrice("");
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="name">ProductName : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="price">Price : </label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label htmlFor="date">Date : </label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <button className="btn">Submit</button>
      </form>

      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            name={product.name}
            price={product.price}
            date={product.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
