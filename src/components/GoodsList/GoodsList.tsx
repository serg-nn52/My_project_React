/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import style from "./GoodsList.module.scss";
import GoodsItem from "../GoodsItem/GoodsItem";

type goodsType = {
  goods: never[];
};

const GoodsList: React.FC<goodsType> = (props) => {
  const { goods } = props;
  const navArr = [];
  let { id } = useParams();
  id === undefined || +id > Math.ceil(goods.length / 12) ? (id = "1") : id;
  for (let i = 0; i < Math.ceil(goods.length / 12); i += 1) {
    navArr[i] = i + 1;
  }

  if (!goods.length) {
    return <h3>Что-то пошло не так... Попробуйте зайти позже!</h3>;
  }
  return (
    <div className={style.page}>
      <div className={style.goods}>
        {goods
          .map((item: any) => {
            return (
              <GoodsItem
                key={item.mainId}
                mainID={item.mainId}
                displayName={item.displayName}
                displayDescription={item.displayDescription}
                fullBackground={item.displayAssets[0].full_background}
                price={item.price.regularPrice}
              />
            );
          })
          .filter((el: any, i: any) => {
            if (i <= +id! * 12 && i > (+id! - 1) * 12) return el;
          })}
      </div>
      <div className={style.navigate}>
        {navArr.map((el) => (
          <NavLink className={style.link} to={`/${el}`} key={el}>
            {" "}
            {el}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
