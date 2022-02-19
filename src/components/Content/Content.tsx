import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Content.module.scss";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import {
  createGetGoodsAction,
  createLoadingAction,
} from "../../store/goods/actions";
import { getAllGoods, getLoading } from "../../store/goods/selectors";

const Content = () => {
  const dispatch = useDispatch();
  const goods = useSelector(getAllGoods);
  const loading = useSelector(getLoading);

  // console.log(search);

  useEffect(() => {
    dispatch(createGetGoodsAction());
    dispatch(createLoadingAction());
  }, []);

  return (
    <div className={style.main}>
      <h1 className={style.title}>Пример интернет-магазина с внешним API</h1>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </div>
  );
};

export default Content;
