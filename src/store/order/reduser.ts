/* eslint-disable default-param-last */
import { OrderType } from "./actions";

const inintialState: any = {
  order: {
    name: null,
    phone: null,
    comment: null,
  },
};

const reducer = (state = inintialState, action: any) => {
  switch (action.type) {
    case OrderType.setOrder:
      // eslint-disable-next-line no-return-assign
      return { ...state, order: action.payload };

    default:
      return state;
  }
};

export default reducer;
