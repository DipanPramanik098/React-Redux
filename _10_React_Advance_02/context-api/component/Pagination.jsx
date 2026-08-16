import React, { useContext } from "react";
import { AppContext } from "../src/context/AppContext";

const Pagination = () => {
  const { page, totalPage, handlePageChange } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="flex flex-col items-center gap-2 py-4">
        
        <div className="flex items-center gap-4">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="px-5 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-700 transition"
            >
              Prev
            </button>
          )}

          {page < totalPage && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm text-gray-600">
          Page{" "}
          <span className="font-semibold text-gray-900">{page}</span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">{totalPage}</span>
        </p>

      </div>
    </div>
  );
};

export default Pagination;