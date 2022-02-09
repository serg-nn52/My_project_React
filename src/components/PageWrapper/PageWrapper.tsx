import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./PageWrapper.module.scss";

const PageWrapper: React.FC = () => {
  return (
    <>
      <Header />

      <main className={style.main}>
        <div className={style.basket}>
          <Link to="/registration">Регистрация</Link>
          <a href="#!">
            Корзина
            <i className="fas fa-shopping-basket" />
          </a>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageWrapper;
