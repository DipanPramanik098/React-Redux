import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./utils/data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actual, setActual] = useState(null); 

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Object of arrays → single array of card objects
      const actualData = Object.values(output.data).flat();

      setCourses(actualData);
      setActual(actualData);
      console.log(actualData);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFiltered = (title) => {
    if (title === "All") {
      setCourses(actual);
    } else {
      const filteredData = actual.filter((card) =>
        card.image.url.includes(title),
      );

      setCourses(filteredData);
    }
  };

  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} handleFiltered={handleFiltered} />

      {loading ? <Spinner /> : <Cards courses={courses} />}
    </div>
  );
};

export default App;
