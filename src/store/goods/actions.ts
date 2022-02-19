/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import getGoods from "../../network";

export enum GoodsType {
  getGoods = "SET_GET_GOODS",
  loading = "SET_LOADING",
  search = "SET_SEARCH",
}

export const createGetGoodsAction = () => {
  return async (dispatch: any) => {
    const data = await getGoods();
    dispatch({
      type: GoodsType.getGoods,
      payload: data,
    });
  };
};
export const createLoadingAction = () => {
  return async (dispatch: any) => {
    const data = await getGoods();
    dispatch({
      type: GoodsType.loading,
      payload: false,
    });
  };
};
export const createSearchAction = (data: string | undefined) => {
  return {
    type: GoodsType.search,
    payload: data,
  };
};
