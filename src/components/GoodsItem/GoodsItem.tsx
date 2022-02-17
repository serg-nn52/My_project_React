import React from "react";
import { useDispatch } from "react-redux";
import { createPlusCountAction } from "../../store/shop/actions";
import style from "./GoodsItem.module.scss";

type GoodsItemType = {
  mainID: string;
  displayName: string;
  displayDescription: string;
  fullBackground: string;
  price: number;
};

const GoodsItem: React.FC<GoodsItemType> = (props) => {
  const { mainID, displayName, displayDescription, fullBackground, price } =
    props;

  const dispatch = useDispatch();

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
        <button
          type="button"
          className="btn left"
          onClick={() => dispatch(createPlusCountAction(props))}>
          Купить
        </button>
        <span className="right">{`${price} руб.`}</span>
      </div>
    </div>
  );
};

export default GoodsItem;
