/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./GoodsList.module.scss";
import GoodsItem from "../GoodsItem/GoodsItem";
import Search from "../Search/Search";
import { getSearch } from "../../store/goods/selectors";

type goodsType = {
  goods: any;
};

const GoodsList: React.FC<goodsType> = (props) => {
  const { goods } = props;
  const search = useSelector(getSearch);
  const navArr = [];
  let { id } = useParams();
  id === undefined ||
  +id >
    Math.ceil(
      goods.filter((el: any) => {
        // eslint-disable-next-line eqeqeq
        return (
          el.displayName
            .trim()
            .toLowerCase()
            .indexOf(search.trim().toLowerCase()) !== -1
        );
      }).length / 12
    )
    ? (id = "1")
    : id;
  for (
    let i = 0;
    i <
    Math.ceil(
      goods.filter((el: any) => {
        // eslint-disable-next-line eqeqeq
        return (
          el.displayName
            .trim()
            .toLowerCase()
            .indexOf(search.trim().toLowerCase()) !== -1
        );
      }).length / 12
    );
    i += 1
  ) {
    navArr[i] = i + 1;
  }

  if (!goods.length) {
    return <h3>Что-то пошло не так... Попробуйте зайти позже!</h3>;
  }
  return (
    <div className={style.page}>
      <Search />
      <div className={style.goods}>
        {goods
          .filter((el: any) => {
            // eslint-disable-next-line eqeqeq
            return (
              el.displayName
                .trim()
                .toLowerCase()
                .indexOf(search.trim().toLowerCase()) !== -1
            );
          })
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
