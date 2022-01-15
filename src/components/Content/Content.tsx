import React, { useEffect, useState } from "react";
import style from "./Content.module.scss";
// eslint-disable-next-line
import { API_URL } from "../config";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";

const Content = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: "881e2f18-92d3f7c1-58e44fae-d0737147",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.main}>
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </div>
  );
};

export default Content;
