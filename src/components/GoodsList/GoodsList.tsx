import React from "react";
import style from "./GoodsList.module.scss";
import GoodsItem from "../GoodsItem/GoodsItem";

type goodsType = {
  goods: never[];
};

const GoodsList: React.FC<goodsType> = (props) => {
  const { goods } = props;

  if (!goods.length) {
    return <h3>Что-то пошло не так... Попробуйте зайти позже!</h3>;
  }
  return (
    <div className={style.goods}>
      {goods.map((item: any) => {
        return (
          <GoodsItem
            key={item.mainId}
            mainId={item.mainId}
            displayName={item.displayName}
            displayDescription={item.displayDescription}
            fullBackground={item.displayAssets[0].full_background}
            price={item.price.regularPrice}
          />
        );
      })}
    </div>
  );
};

export default GoodsList;
