import React from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Card = ({ card, nextHandle, prevHandle, surpriseHandle }) => {
  const prevHandler = () => {
    prevHandle(card.id - 1);
  };
  const nextHandler = () => {
    nextHandle(card.id - 1);
  };
  return (
    <div className="card">
      {/* Profile Image */}
      <div className="profile-container">
        <img src={card.image} alt={card.name} className="profile-image" />
      </div>

      {/* Name */}
      <h2 className="card-name">{card.name}</h2>

      {/* Job */}
      <p className="card-job">{card.job}</p>

      {/* Testimonial */}
      <p className="card-text">{card.text}</p>

      {/* Quote Icon */}
      <FaQuoteLeft className="quote-icon" />

      {/* Previous / Next */}
      <div className="navigation">
        <button className="nav-btn">
          <FaChevronLeft onClick={prevHandler} />
        </button>

        <button className="nav-btn">
          <FaChevronRight onClick={nextHandler} />
        </button>
      </div>

      {/* Surprise Button */}
      <button
        className="surprise-btn"
        onClick={() => {
          surpriseHandle();
        }}
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Card;
