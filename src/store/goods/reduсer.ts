/* eslint-disable default-param-last */

import { GoodsType } from "./actions";

const initialState: any = { goods: [], loading: true, search: "" };

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GoodsType.getGoods:
      // eslint-disable-next-line no-return-assign
      return { ...state, goods: action.payload };
    case GoodsType.loading:
      // eslint-disable-next-line no-return-assign
      return { ...state, loading: action.payload };
    case GoodsType.search:
      // eslint-disable-next-line no-return-assign
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default reducer;
