/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum ShopCounterType {
  plusCount = "SET_PLUS_COUNT",
}

export const createPlusCountAction = () => {
  return {
    type: ShopCounterType.plusCount,
  };
};
