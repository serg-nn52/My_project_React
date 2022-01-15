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
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button type="button" className="btn left">
          Купить
        </button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
};

export default GoodsItem;
