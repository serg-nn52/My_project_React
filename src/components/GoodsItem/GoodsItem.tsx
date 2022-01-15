import React from "react";
import style from "./GoodsItem.module.scss";

const GoodsItem = (props: any) => {
  // const { mainID, displayName, displayDescription, price, fullBackground } =
  //   props;
  const { mainID, displayName, displayDescription, fullBackground, price } =
    props;
  return (
    <div className={style.card} id={mainID}>
      <div className="card-image">
        <img src={fullBackground} alt={displayName} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{displayName}</h3>
        <p>{displayDescription}</p>
      </div>
      <div className={style.card_action}>
        <button type="button" className="btn left">
          Купить
        </button>
        <span className="right">{`${price} руб.`}</span>
      </div>
    </div>
  );
};

export default GoodsItem;
