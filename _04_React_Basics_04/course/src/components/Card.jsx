import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Card = ({ card }) => {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
        cursor: "pointer",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "180px",
        }}
      >
        <img
          src={card.image.url}
          alt={card.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Heart Button */}
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          <FaRegHeart />
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "16px",
        }}
      >
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: "18px",
            color: "#1f2937",
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#6b7280",
            lineHeight: "1.5",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default Card;