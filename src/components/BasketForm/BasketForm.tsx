/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSetOrderAction } from "../../store/order/actions";
import { createResetAction } from "../../store/shop/actions";
import { getgoodsInBasket } from "../../store/shop/selectors";

const BasketForm = () => {
  const userName = React.useRef<HTMLInputElement>(null);
  const userPhone = React.useRef<HTMLInputElement>(null);
  const userComment = React.useRef<HTMLTextAreaElement>(null);
  const goodsInBasket = useSelector(getgoodsInBasket);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendBasket = (e: any) => {
    e.preventDefault();
    const order = {
      name: userName.current?.value,
      phone: userPhone.current?.value,
      comment: userComment.current?.value,
    };
    dispatch(createSetOrderAction(order));
    const orderFullData = { ...order, ...goodsInBasket };
    console.log(orderFullData); // вывожу всю сконсолидированную информацию по заказу!!! - могу отправить на сервер, почту и тп.
    dispatch(createResetAction());
    navigate("/orderok");
  };
  return (
    <>
      <h2>Оставьте данные для уточнения заказа</h2>
      <form action="#">
        <label htmlFor="userName">Введите имя</label>
        <input
          id="userName"
          ref={userName}
          type="text"
          placeholder="Иван Иванов"
        />
        <label htmlFor="userPhone">Введите телефон</label>
        <input
          id="userPhone"
          ref={userPhone}
          type="number"
          placeholder="+375332223311"
        />
        <label htmlFor="userComment">Введите комментарий к заказу</label>
        <textarea id="userComment" ref={userComment} />
        <button type="submit" onClick={sendBasket}>
          Отправить заказ
        </button>
      </form>
    </>
  );
};

export default BasketForm;
