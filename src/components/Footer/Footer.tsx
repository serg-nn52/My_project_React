import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__top}>
          Лушкин Сергей, +375-33-321-02-67
        </div>
        <div className={style.footer__bottom}>
          <a href="tel:+375333210267">
            <i className="fas fa-phone-square-alt" />
          </a>
          <a href="viber://chat?number=%2B79047999980">
            <i className="fab fa-viber" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=79047999980">
            <i className="fab fa-whatsapp-square" />
          </a>
          <a href="tg://resolve?domain=sergnn1985">
            <i className="fab fa-telegram" />
          </a>
          <a href="mailto:ask@htmlbook.ru">
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://github.com/serg-nn52"
            target="_blank"
            rel="noreferrer">
            <i className="fab fa-github-square" />
          </a>
          <a
            href="https://vk.com/serega_nn1985"
            target="_blank"
            rel="noreferrer">
            <i className="fab fa-vk" />
          </a>
          <a
            href="https://www.instagram.com/snizhegorodskii/"
            target="_blank"
            rel="noreferrer">
            <i className="fab fa-instagram-square" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
