import React from "react";
import cardData from "../../data.js";
import "./card.css";
import locImg from "/assets/loc.png";
const Card = () => {
  return (
    <section>
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <div className="card_img">
            <img src={card.imageUrl} alt="" />
          </div>
          <div className="card_info">
            <div className="location">
              <img src={locImg} alt="" />
              <span>{card.location}</span>
              <a href={card.googleMapsUrl}>View on Google Map</a>
            </div>
            <div className="title">
              <span>{card.title}</span>
            </div>
            <div className="desc">
              <span>
                {card.startDate} - {card.endDate}
              </span>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
