/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum OrderType {
  setOrder = "SET_ORDER",
}

export const createSetOrderAction = (data: any) => {
  return {
    type: OrderType.setOrder,
    payload: data,
  };
};
