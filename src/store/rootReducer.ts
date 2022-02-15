import { combineReducers } from "redux";
import shopReducer from "./shop/reduсer";
import darkReduser from "./darkTheme/reduser";

const rootReducer = combineReducers({
  shop: shopReducer,
  darkTheme: darkReduser,
});

export default rootReducer;
