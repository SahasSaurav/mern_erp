import {
  SET_DARK_MODE,
  SET_LIGHT_MODE,
  PERSIST_THEME,
} from "../constants/themeConstants";

// const darkMode = matchMedia("(prefers-color-scheme: dark)").matches ?? false;

export const themeReducer = (state = { }, action) => {
  const root = document.documentElement;
  switch (action.type) {
    case SET_DARK_MODE:
      root.classList.add("dark");
      return { darkMode: true };
    case SET_LIGHT_MODE:
      root.classList.remove("dark");
      return { darkMode: false };
    case PERSIST_THEME:
      const isDark = action.payload;
      if (isDark === true) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      return {darkMode:action.payload};
    default:
      return  state ;
  }
};
