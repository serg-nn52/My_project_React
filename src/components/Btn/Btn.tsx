import React from "react";
import style from "./Btn.module.scss";

type BtnType = {
  btnName: string;
  onClick?: any;
};

const Btn: React.FC<BtnType> = (props) => {
  const { btnName, onClick } = props;
  return (
    <button type="submit" className={style.btn} onClick={onClick}>
      {btnName}
    </button>
  );
};

export default Btn;
