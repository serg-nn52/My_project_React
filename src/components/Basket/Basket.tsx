import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCount } from "../../store/shop/selectors";
import style from "./Basket.module.scss";

const Basket = () => {
  const count: number = useSelector(getCount);
  return (
    <Link to="/basket" className={style.basket}>
      Корзина
      <i className="fas fa-shopping-basket" />
      {count === 0 ? "" : count}
    </Link>
  );
};

export default Basket;
