import { combineReducers } from "redux";
import shopReducer from "./shop/reduсer";
import darkReduser from "./darkTheme/reduser";
import goodsReduser from "./goods/reduсer";

const rootReducer = combineReducers({
  shop: shopReducer,
  darkTheme: darkReduser,
  goods: goodsReduser,
});

export default rootReducer;
