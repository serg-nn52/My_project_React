import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./PageWrapper.module.scss";
import {
  createDarkThemeAction,
  createWhiteThemeAction,
} from "../../store/darkTheme/actions";
import { getDarkTheme } from "../../store/darkTheme/selectors";

const PageWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const isWhite = useSelector(getDarkTheme).backgroundColor === ` white`;
  return (
    <>
      <Header />

      <main className={style.main}>
        <div className={style.subheader}>
          <a
            href="#!"
            onClick={() =>
              isWhite === true
                ? dispatch(createDarkThemeAction())
                : dispatch(createWhiteThemeAction())
            }>
            {isWhite === true ? "Темная тема" : "Светлая тема"}
          </a>
          <Link to="/registration">Регистрация</Link>
          <a href="#!" className={style.basket}>
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
