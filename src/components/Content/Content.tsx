import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import style from "./Content.module.scss";

import { API_URL, API_KEY } from "../config";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import { getCount } from "../../store/shop/selectors";

const Content = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const getGoods = () => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: API_KEY!,
        },
      })
      .then((response) => {
        setGoods(response.data.shop);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(getGoods, []);

  return (
    <div className={style.main}>
      <h1 className={style.title}>
        Пример интернет-магазина с внешним API {useSelector(getCount)}{" "}
      </h1>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </div>
  );
};

export default Content;
