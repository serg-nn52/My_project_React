/* eslint-disable default-param-last */
import { DarkThemeType } from "./actions";

const initialState = {
  style: {
    backgroundColor: ` white`,
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DarkThemeType.darkTheme:
      return { ...state, style: action.payload };
    case DarkThemeType.whiteTheme:
      return { ...state, style: action.payload };
    default:
      return state;
  }
};

export default reducer;
