/* eslint-disable array-callback-return */
import React from "react";
import { useSelector } from "react-redux";
import { getgoodsInBasket } from "../../store/shop/selectors";
import BasketForm from "../BasketForm/BasketForm";
import BasketItem from "../BasketItem/BasketItem";
import style from "./BasketList.module.scss";

const BasketList = () => {
  const goodsInBasket = useSelector(getgoodsInBasket);
  const totalPrice = goodsInBasket
    .map((el: any) => el.price)
    .reduce((a: string, b: string) => +a + +b, 0);
  return goodsInBasket.length === 0 ? (
    <h2 className={style.title}>В корзине нет товаров!</h2>
  ) : (
    <>
      <ul>
        {goodsInBasket.map((item: any, i: number) => {
          return (
            <li key={item.mainID} className={style.list}>
              <BasketItem product={item} i={i} />
            </li>
          );
        })}
      </ul>
      <p className={style.price}>Общая стоимость товаров {totalPrice} рублей</p>
      <BasketForm />
    </>
  );
};

export default BasketList;
