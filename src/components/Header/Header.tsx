import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Header.module.scss";
import logo from "../../images/logo.png";
import darkLogo from "../../images/darkLogo.png";
import { createPlusCountAction } from "../../store/shop/actions";
import { getCount } from "../../store/shop/selectors";
import { getDarkTheme } from "../../store/darkTheme/selectors";
// import { getDarkTheme } from "../../store/darkTheme/selectors";

const Header: React.FC<any> = () => {
  const { header, logoHeader, oficial, contacts, phone, button, container } =
    style;
  const dispatch = useDispatch();
  const isWhite = useSelector(getDarkTheme).backgroundColor === ` white`;
  // console.log(useSelector(getDarkTheme));

  return (
    <header className={header}>
      <div className={container}>
        <Link to="/" className={logoHeader}>
          <img
            // src={logo}
            alt="logo"
            src={isWhite === true ? logo : darkLogo}
          />
        </Link>
        <div className={oficial}>
          Создание под заказ
          <br />
          сайтов, web-приложений
        </div>
        <div className={contacts}>
          <a href="tel:+375333210267" className={phone}>
            +375 (33) 321-02-67
          </a>
          <button
            onClick={() => dispatch(createPlusCountAction())}
            type="button"
            className={button}>
            {`отправить сообщение ${useSelector(getCount)}`}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
