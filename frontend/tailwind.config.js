  
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [ 
  "./src/**/*.{jsx",
  "./src/**/*.js",
  "./src/*.html",
  "./src/*.jsx",
  "./src/*.js",
  "./src/styles/*.css"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "sf-pro": ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
