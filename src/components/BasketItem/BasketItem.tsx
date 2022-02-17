import React from "react";
import { useDispatch } from "react-redux";
import { createMinusCountAction } from "../../store/shop/actions";
import style from "./BasketItem.module.scss";
// import { useSelector } from "react-redux";
// import { getgoodsInBasket } from "../../store/shop/selectors";

const BasketItem = (props: any) => {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <ul className={style.basketItem}>
        <li>
          <img src={product.fullBackground} alt="Card" />
        </li>
        <li>{product.displayName}</li>
        <li>{product.price} руб.</li>
        <li>
          <a
            href="#!"
            onClick={() => dispatch(createMinusCountAction(product.mainID))}>
            <i className="fa fa-times-circle" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BasketItem;
