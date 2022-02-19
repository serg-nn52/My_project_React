import React from "react";
import { useDispatch } from "react-redux";
import { createSearchAction } from "../../store/goods/actions";
import style from "./Search.module.scss";

const Search = () => {
  const search = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const searchGoods = () => {
    const searchValue = search === null ? "" : search.current?.value;
    dispatch(createSearchAction(searchValue));
  };
  return (
    <form action="#!" className={style.form}>
      <input
        type="text"
        ref={search}
        placeholder="Введите название товара"
        className={style.inputSearch}
      />
      <button
        type="submit"
        onClick={searchGoods}
        className={style.buttonSearch}>
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

export default Search;
