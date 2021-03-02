const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.{js,jsx}", "./src/**/*.{js,jsx,html,htm}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "matt-black": "#111924",
        blueGray: colors.blueGray
      },
      fontFamily: {
        "sf-pro": ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
