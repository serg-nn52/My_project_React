/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import getGoods from "../../network";

export enum GoodsType {
  getGoods = "SET_GET_GOODS",
  loading = "SET_LOADING",
}

export const createGetGoods = () => {
  return async (dispatch: any) => {
    const data = await getGoods();
    dispatch({
      type: GoodsType.getGoods,
      payload: data,
    });
  };
};
export const createLoading = () => {
  return async (dispatch: any) => {
    const data = await getGoods();
    dispatch({
      type: GoodsType.loading,
      payload: false,
    });
  };
};
