/* eslint-disable default-param-last */

import { ShopCounterType } from "./actions";

const initialState: any[] = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ShopCounterType.plusCount:
      return [...state, action.payload];
    default:
      return state;
  }
};

// console.log(reducer);

export default reducer;
