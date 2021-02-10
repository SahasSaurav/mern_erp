import {
  SET_DARK_MODE,
  SET_LIGHT_MODE,
  PERSIST_THEME,
} from "../constants/themeConstants";

const darkMode = matchMedia("(prefers-color-scheme: dark)").matches ?? false;

export const themeReducer = (state = { darkMode }, action) => {
  const root = document.documentElement;
  switch (action.type) {
    case SET_DARK_MODE:
      root.classList.add("dark");
      return { darkMode: true };
    case SET_LIGHT_MODE:
      root.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify({ darkmode: true }));
      return { darkMode: false };
    case PERSIST_THEME:
      const isDark = action.payload;
      const html = document.documentElement;
      if (isDark === true) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
      return state;
    default:
      return { state };
  }
};
