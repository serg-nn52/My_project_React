/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum ShopCounterType {
  plusCount = "SET_PLUS_COUNT",
  minusCount = "SET_MINUS_COUNT",
}

export const createPlusCountAction = (data: any) => {
  return {
    type: ShopCounterType.plusCount,
    payload: data,
  };
};
export const createMinusCountAction = (data: any) => {
  return {
    type: ShopCounterType.minusCount,
    payload: data,
  };
};
