import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../../images/logo.png";

const Header = () => {
  const { header, logoHeader, oficial, contacts, phone, button, container } =
    style;
  return (
    <header className={header}>
      <div className={container}>
        <Link to="/" className={logoHeader}>
          <img src={logo} alt="logo" />
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
