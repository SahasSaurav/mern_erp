import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
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
    console.log({ data });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    dispatch({ type: USER_AUTH_SUCCESS });
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
    localStorage.setItem("expiresAt", JSON.stringify(data.expiresAt));
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

export const authenicated = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo, token, expiresAt },
  } = getState();
  if(!token){
    dispatch({ type: USER_AUTH_FAIL });
    dispatch({ type: USER_LOGOUT });
  }
  if (!userInfo || !token || !expiresAt) {
    dispatch({ type: USER_AUTH_FAIL });
    dispatch({ type: USER_LOGOUT });
  }
  const tokenExpired = new Date().getTime() / 1000 < expiresAt;
  if (tokenExpired) {
    dispatch({ type: USER_AUTH_SUCCESS });
  } else {
    dispatch({ type: USER_AUTH_FAIL });
    dispatch({ type: USER_LOGOUT });
  }
};



export const logout = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");

    const a = await axios.delete("/auth/logout");
    console.log({ a });
    dispatch({ type: USER_AUTH_FAIL });
    dispatch({ type: USER_LOGOUT });
    console.log("hell");
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
