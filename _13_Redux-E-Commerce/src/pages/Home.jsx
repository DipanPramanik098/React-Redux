import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log("Error Occured While Fetching Products");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 miin-h-[80vh]">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p> No Data Found </p>
        </div>
      )}
    </div>
  );
};

export default Home;
