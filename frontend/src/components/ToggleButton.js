import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleButton = () => {
  const { darkmode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => toggleTheme(darkmode)}
      className=" flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 p-1 "
      aria-label="Enable dark mode"
    >
      <span className="sr-only">Enable dark mode</span>
      {/* moon */}
      {!darkmode && (
        <img src="/assets/images/icon-moon.svg" alt="dark mode"/>
      )}
      {/* sun */}
      {darkmode && (
        <img src="/assets/images/icon-sun.svg" alt="light-mode"/>
      )}
    </button>
  );
};

export default ToggleButton;
