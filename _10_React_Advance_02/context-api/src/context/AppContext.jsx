import { useState, createContext, useEffect } from "react";
import { url } from "../../constants/url";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  // Fetch blog data
  const fetchBlog = async (page = 1) => {
    setLoading(true);

    const apiurl = `${url}${page}`;

    try {
      const res = await fetch(apiurl);
      const data = await res.json();

      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching Data");

      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }

    setLoading(false);
  };

  // Fetch first page when Provider mounts
  useEffect(() => {
    fetchBlog();
  }, []);

  // Change page and fetch corresponding data
  const handlePageChange = (page) => {
    setPage(page);
    fetchBlog(page);
  };

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlog,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};