import React from "react";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <p className="footer-block__title">© 2001-2020 Рубльбанк</p>
          <p className="footer-block__content">
            Генеральная лицензия на осуществление банковских операций от 11
            августа 2015 года. Регистрационный номер - 1234.
          </p>
        </div>
        <div className="footer-block">
          <p className="footer-block__title">
            <span>Обратная связь</span>
          </p>
          <p className="footer-block__content">
            Россия, Москва, 113337, ул. Советская, д. 42
          </p>
        </div>
        <div className="footer-block">
          <p className="footer-block__content">
            Информация о процентных ставках по договорам банковского вклада с
            физическими лицами
          </p>
          <p className="footer-block__content">
            Информация, обязательная к размещению
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
