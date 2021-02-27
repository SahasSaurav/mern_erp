import {
  SET_DARK_MODE,
  SET_LIGHT_MODE,
  PERSIST_THEME,
} from "../constants/themeConstants";

export const setDarkMode = () => async (dispatch) => {
  localStorage.setItem("theme", JSON.stringify({ darkMode: true }));
  dispatch({ type: SET_DARK_MODE });
};

export const setLightMode = () => async (dispatch) => {
  localStorage.setItem("theme", JSON.stringify({ darkMode: false }));
  dispatch({ type: SET_LIGHT_MODE });
};

export const peristTheme=()=>async(dispatch)=>{
  const theme=localStorage.getItem('theme')
  if(theme){
    const darkMode=JSON.parse(theme) 
    dispatch({type:PERSIST_THEME,payload:darkMode})
  }
}