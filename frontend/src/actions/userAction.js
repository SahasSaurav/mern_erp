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
    dispatch({type:USER_AUTH_SUCCESS})
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
    dispatch({type:USER_AUTH_FAIL})
  }
};

export const authenicated = () => (dispatch, getState) => {
  const {
    userLogin: { userInfo, token, expiresAt },
  } = getState();
  if (!userInfo || !token || !expiresAt) {
    dispatch({ type: USER_AUTH_FAIL });
  }
  const tokenExpired = new Date().getTime / 1000 < expiresAt;
  if (tokenExpired) {
    dispatch({ type: USER_AUTH_SUCCESS });
  } else {
    dispatch({ type: USER_AUTH_FAIL });
  }
};

// const logout=()=>{

// }
