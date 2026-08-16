import React, { useState } from "react";
import Card from "./Card";

const CardContainer = () => {
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      price: "₹35,758",
      place: "Agra",
      about:
        "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historical attractions.",
      btnVal: "Not Interested",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      price: "₹42,500",
      place: "Jaipur",
      about:
        "Jaipur, the Pink City of India, is famous for its magnificent palaces, historic forts, colorful markets, and rich royal heritage. Popular attractions include Amber Fort, City Palace, and Hawa Mahal.",
      btnVal: "Not Interested",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      price: "₹38,999",
      place: "Delhi",
      about:
        "Delhi is the capital of India and a city where ancient history meets modern life. It is home to famous landmarks such as India Gate, Red Fort, Qutub Minar, and Humayun's Tomb.",
      btnVal: "Not Interested",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=800&q=80",
      price: "₹46,750",
      place: "Udaipur",
      about:
        "Udaipur is known as the City of Lakes and is famous for beautiful palaces, peaceful lakes, historic architecture, and scenic views. It is one of Rajasthan's most popular destinations.",
      btnVal: "Not Interested",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
      price: "₹51,200",
      place: "Varanasi",
      about:
        "Varanasi is one of India's oldest cities, situated on the banks of the sacred Ganges River. Visitors come to experience its historic ghats, temples, spiritual traditions, and vibrant culture.",
      btnVal: "Not Interested",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80",
      price: "₹44,850",
      place: "Mumbai",
      about:
        "Mumbai is a vibrant coastal city known as India's financial and entertainment capital. It offers attractions such as the Gateway of India, Marine Drive, historic architecture, and lively markets.",
      btnVal: "Not Interested",
    },
  ];

  const [cards, setCards] = useState(cardData);

  const removeCard = (place) => {
    setCards((prevCards) => {
      return prevCards.filter((card) => card.place !== place);
    });
  };
  return (
    <div>
      {cards.length > 0 ? (
        <>
          <h1 className="header">Plan With Love</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            {cards.map((card, index) => {
              console.log(card, index);
              return <Card key={index} {...card} removeCard={removeCard} />;
            })}
          </div>
        </>
      ) : (
        <>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button className="btn" onClick={()=> setCards(cardData)}>Refresh</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardContainer;
