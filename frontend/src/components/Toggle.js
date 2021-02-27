import { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode} from "../actions/themeAction";

const Toggle = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const { darkMode } = theme;

  const toggleTheme = (e) => {
    if (e.target.checked) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  };

  const toggleRef= useRef()

  

  useEffect(() => {
    const theme=localStorage.getItem('theme')
    if(theme){
      const darkMode=JSON.parse(theme);
      toggleRef.current.checked=darkMode;
    }
  }, []);



  return (
    <div
      className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <span className="sr-only">Toggle to enable dark mode</span>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        value={darkMode}
        ref={toggleRef}
        onClick={toggleTheme}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-400 appearance-none cursor-pointer focus: outline-none"
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
      ></label>
    </div>
  );
};

export default Toggle;
