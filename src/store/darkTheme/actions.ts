/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum DarkThemeType {
  darkTheme = "SET_DARK_THEME",
  whiteTheme = "SET_WHITE_THEME",
}

export const createDarkThemeAction = () => {
  return {
    type: DarkThemeType.darkTheme,
    // payload: {
    //   style: {
    //     backgroundColor: "grey",
    //   },
    payload: {
      backgroundColor: ` gray`,
    },
  };
};
export const createWhiteThemeAction = () => {
  return {
    type: DarkThemeType.whiteTheme,
    payload: {
      backgroundColor: ` white`,
    },
  };
};
