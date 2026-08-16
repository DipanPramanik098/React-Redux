import { useState } from "react";

const Filter = ({ filterData, handleFiltered }) => {
  const [selected, setSelected] = useState("All");

  const handleClick = (title) => {
    setSelected(title);
    handleFiltered(title);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "16px",
        backgroundColor: "#f3f4f6",
      }}
    >
      {filterData.map((btn) => {
        const isSelected = selected === btn.title;

        return (
          <button
            key={btn.id}
            onClick={() => handleClick(btn.title)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: isSelected ? "#2563eb" : "#fff",
              color: isSelected ? "#fff" : "#374151",
              fontWeight: isSelected ? "600" : "500",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease",
            }}
          >
            {btn.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;