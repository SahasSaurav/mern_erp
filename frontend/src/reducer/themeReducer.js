export const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE-THEME":
      const darkmode = action.payload;
      const root = document.documentElement;
      if (darkmode === true) {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }
      return { darkmode: !action.payload };

    case "PERSIST-THEME":
      const isDark =state.darkmode
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
