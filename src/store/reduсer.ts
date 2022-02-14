/* eslint-disable default-param-last */
import { ShopCounterType } from "./actions";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ShopCounterType.plusCount:
      return state;
    default:
      return state;
  }
};

export default reducer;
