import React from "react";
import style from "./Header.module.scss";
import logo from "../../images/logo.png";

const Header = () => {
  const { header, logoHeader, oficial, contacts, phone, button, container } =
    style;
  return (
    <header className={header}>
      <div className={container}>
        <a href="#id" className={logoHeader}>
          <img src={logo} alt="logo" />
        </a>
        <div className={oficial}>
          Создание под заказ
          <br />
          <span>сайтов, web-приложений</span>
        </div>
        <div className={contacts}>
          <a href="tel:+375333210267" className={phone}>
            +375 (33) 321-02-67
          </a>
          <button type="button" className={button}>
            заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
