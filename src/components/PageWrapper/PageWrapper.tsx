import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Basket from "../Basket/Basket";
import style from "./PageWrapper.module.scss";
import {
  createDarkThemeAction,
  createWhiteThemeAction,
} from "../../store/darkTheme/actions";
import { getDarkTheme } from "../../store/darkTheme/selectors";

const PageWrapper: React.FC = () => {
  const dispatch = useDispatch();
  const isWhite = useSelector(getDarkTheme).backgroundColor === ` white`;
  const navigate = useNavigate();
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
          <a href="#!" onClick={() => navigate(-1)}>
            Назад
          </a>
          <Link to="/registration">Регистрация</Link>
          <Basket />
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageWrapper;
