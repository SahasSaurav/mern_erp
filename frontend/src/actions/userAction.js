import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REFRESHED_TOKEN,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
} from "../constants/userConstants";


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/auth/login",
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    dispatch({ type: USER_AUTH_SUCCESS });
    
    localStorage.setItem("accessExpiresAt", JSON.stringify(data.accessExpiresAt));
    localStorage.setItem('refreshExpiresAt',JSON.stringify(data.refreshExpiresAt))
    console.log({data})
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
    dispatch({ type: USER_AUTH_FAIL });
  }
};

export const register = (id, token, email, password, repeatPassword) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/register/${id}/${token}`,
      { email, password, repeatPassword },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const refreshTheToken= () => async (dispatch,getState) => {
  try{
    const {userLogin:{accessaccessExpiresAt}}=getState();
  dispatch({type:USER_TOKEN_REQUEST})
    
      const {data}=await axios.post('/auth/refresh')
      console.count({data})
      dispatch({type:USER_AUTH_SUCCESS})
      dispatch({type:USER_TOKEN_SUCCESS})
      dispatch({
        type: USER_REFRESHED_TOKEN,
        payload: data,
     })
  }catch(err){
    dispatch({type:USER_AUTH_FAIL})
    dispatch({type:USER_TOKEN_FAIL,
      payload:err.response && err.response.data.message
      ? err.response.data.message
      : err.message,})
      dispatch({type:USER_LOGOUT})
  }
}

export const authenticated = () => async (dispatch, getState) => {
  const {
    userLogin: {refreshExpiresAt, accessExpiresAt,userInfo},
  } = getState();
  if(refreshExpiresAt  && accessExpiresAt){
    dispatch({type:USER_AUTH_FAIL})
  }
  
  if(!refreshExpiresAt  || !accessExpiresAt){
    dispatch({type:USER_AUTH_FAIL})
  }


  const tokenExpired = new Date().getTime() / 1000 < refreshExpiresAt;
  if(tokenExpired){
    dispatch({type:USER_AUTH_SUCCESS})
  }else{
    dispatch({type:USER_AUTH_FAIL})
  }
}



export const logout = () => async (dispatch,getState) => {
  try {

    localStorage.removeItem("accessExpiresAt");
    localStorage.removeItem("refreshExpiresAt");
    
    const {userLogin:{accessToken}}=getState()

    const config={
      headers:{
        Authorization: `Bearer ${accessToken}`,
      }
    }
    const {data}= await axios.delete("/auth/logout",config);
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_AUTH_FAIL });
  } catch (err) {
    console.error(err);
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_FORGOT_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/forgot-password`,
      { email },
      config
    );
    dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS });
  } catch (err) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const resetPassword = (id, token, password, repeatPassword) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_RESET_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/reset-password/${id}/${token}`,
      { password, repeatPassword },
      config
    );
    dispatch({ type: USER_RESET_PASSWORD_SUCCESS });
  } catch (err) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
