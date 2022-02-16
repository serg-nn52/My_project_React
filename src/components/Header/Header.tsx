import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Header.module.scss";
import logo from "../../images/logo.png";
import darkLogo from "../../images/darkLogo.png";
import { getDarkTheme } from "../../store/darkTheme/selectors";
import { getgoodsInBasket } from "../../store/shop/selectors";
// import { getDarkTheme } from "../../store/darkTheme/selectors";

const Header: React.FC<any> = () => {
  const { header, logoHeader, oficial, contacts, phone, button, container } =
    style;
  const isWhite = useSelector(getDarkTheme).backgroundColor === ` white`;
  console.log(useSelector(getgoodsInBasket));
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
          <button type="button" className={button}>
            отправить сообщение
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
