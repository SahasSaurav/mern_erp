export const themeReducer = (state, action) => {
  const root = document.documentElement;
  switch (action.type) {
    case "SET-DARK":
      root.classList.add("dark");
      return { darkmode: true };
    case "SET-LIGHT":
      root.classList.remove("dark");
      return { darkmode: false };
    case "PERSIST-THEME":
      const isDark = state.darkmode;
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
