/* eslint-disable default-param-last */
import { ShopCounterType } from "./actions";

const initialState = {
  count: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ShopCounterType.plusCount:
      return { ...state, count: +state.count + 1 };
    default:
      return state;
  }
};

export default reducer;
