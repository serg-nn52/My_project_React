import { combineReducers } from "redux";
import shopReducer from "./shop/reduсer";
import darkReduser from "./darkTheme/reduser";
import goodsReduser from "./goods/reduсer";
import orderReduser from "./order/reduser";

const rootReducer = combineReducers({
  shop: shopReducer,
  darkTheme: darkReduser,
  goods: goodsReduser,
  order: orderReduser,
});

export default rootReducer;
