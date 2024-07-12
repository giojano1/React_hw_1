import React from "react";
import style from "./card.module.scss";
import locImg from "/assets/loc.png";
const Card = (props) => {
  return (
    <section>
      {props.data.map((card) => (
        <div key={card.id} className={style.card}>
          <div className={style.card_img}>
            <img src={card.imageUrl} alt="" />
          </div>
          <div className={style.card_info}>
            <div className={style.location}>
              <img src={locImg} alt="" />
              <span>{card.location}</span>
              <a href={card.googleMapsUrl}>View on Google Map</a>
            </div>
            <div className={style.title}>
              <span>{card.title}</span>
            </div>
            <div className={style.desc}>
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
