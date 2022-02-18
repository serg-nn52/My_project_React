/* eslint-disable array-callback-return */
import React from "react";
import { useSelector } from "react-redux";
import { getgoodsInBasket } from "../../store/shop/selectors";
import BasketItem from "../BasketItem/BasketItem";

const BasketList = () => {
  const goodsInBasket = useSelector(getgoodsInBasket);
  const totalPrice = goodsInBasket
    .map((el: any) => el.price)
    .reduce((a: string, b: string) => +a + +b, 0);
  return goodsInBasket.length === 0 ? (
    <h2>В корзине нет товаров!</h2>
  ) : (
    <>
      <ul>
        {goodsInBasket.map((item: any, i: number) => {
          return (
            <li key={item.mainID}>
              <BasketItem product={item} i={i} />
            </li>
          );
        })}
      </ul>
      <p>Общая стоимость товаров {totalPrice} рублей</p>
    </>
  );
};

export default BasketList;
