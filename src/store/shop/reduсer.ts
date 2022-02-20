/* eslint-disable default-param-last */

import { ShopCounterType } from "./actions";

const initialState: any[] = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ShopCounterType.plusCount:
      // eslint-disable-next-line no-return-assign
      return [...state, action.payload];
    case ShopCounterType.minusCount:
      // eslint-disable-next-line no-return-assign
      return state.filter((el) => el.mainID !== action.payload);
    case ShopCounterType.reset:
      // eslint-disable-next-line no-return-assign
      return [];
    default:
      return state;
  }
};

export default reducer;
