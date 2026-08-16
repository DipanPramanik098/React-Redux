import React from "react";
import Header from "../component/Header";
import Blogs from "../component/Blogs";
import Pagination from "../component/Pagination";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-28 pb-32">
        <Blogs />
      </div>
      <Pagination />
    </div>
  );
};

export default App;
