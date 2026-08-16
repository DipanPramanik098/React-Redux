import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Dipan Blogs
        </h1>
      </div>
    </header>
  );
};

export default Header;