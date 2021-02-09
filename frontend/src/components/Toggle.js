import { useContext, useState,useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Toggle = () => {
  const { darkmode,setDarkmode,setLightmode } = useContext
  (ThemeContext);

  const toggleTheme=(e)=>{
    console.log(e.target.checked)
    if(e.target.checked){
      setDarkmode()
    }else{
      setLightmode()
    }
  }

  const [value,setvalue]=useState()

  useEffect(() => {
   if(darkmode){
     setvalue(true)
   }else{
    setvalue(false)
   }
  }, [darkmode])

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in" aria-role="switch">
      <span className="sr-only">Toggle to enable  dark mode</span>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={value}
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
