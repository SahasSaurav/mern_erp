import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducer/themeReducer";

const themeInitialState = {
  darkmode: matchMedia("(prefers-color-scheme: dark)").matches,
};

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState,
    () => {
      const isDark = JSON.parse(localStorage.getItem("theme"));
      return isDark;
    }
  );

  useEffect(() => {
    if (themeState) {
      window.localStorage.setItem("theme", JSON.stringify(themeState));
    }
  }, [themeState]);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      persistTheme();
    }
  }, []);

  const persistTheme = () => {
    themeDispatch({ type: "PERSIST-THEME" });
  };

  const setDarkmode = () => {
    themeDispatch({ type: "SET-DARK"});
  };
  const setLightmode = () => {
    themeDispatch({ type: "SET-LIGHT"});
  };

  return (
    <ThemeContext.Provider
      value={{
        ...themeState,
      setDarkmode,
      setLightmode
        // persistTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
