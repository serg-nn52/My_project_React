import React from "react";
import { useSelector } from "react-redux";
import { getCount } from "../../store/shop/selectors";
import style from "./Basket.module.scss";

const Basket = () => {
  const count: number = useSelector(getCount);
  return (
    <a href="#!" className={style.basket}>
      Корзина
      <i className="fas fa-shopping-basket" />
      {count}
    </a>
  );
};

export default Basket;
