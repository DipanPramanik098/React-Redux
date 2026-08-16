import React, { useContext } from "react";
import { AppContext } from "../src/context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No Post Found
        </p>
      ) : (
        posts.map((post) => {
          return (
            <div
              className="flex justify-between gap-8 py-6 border-b border-gray-200"
              key={post.id}
            >
              {/* Blog Content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-600 mb-1">
                  By{" "}
                  <span className="font-semibold text-gray-800">
                    {post.author}
                  </span>{" "}
                  on{" "}
                  <span className="font-semibold text-gray-800">
                    {post.category}
                  </span>
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  Posted On {post.date}
                </p>

                <p className="text-gray-700 leading-7 mb-4">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-blue-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blog Image */}
              <img
                src={post.img}
                alt={post.title}
                className="w-72 h-44 object-cover rounded-md shadow-sm"
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blogs;