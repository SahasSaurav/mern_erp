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

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload.userInfo,
        expiresAt: action.payload.expiresAt,
        token: action.payload.accessToken,
      };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, register: false };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        register: true,
        message: "you are successfully registered ",
      };
    case USER_REGISTER_FAIL:
      return { loading: false, register: false, error: action.payload };
    default:
      return state;
  }
};

export const userAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH_SUCCESS:
      return { isAuthenicated: true };
    case USER_AUTH_FAIL:
      return { isAuthenicated: false };
    default:
      return state;
  }
};

export const userForgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        message: "Successfully! reset password is sent to you",
      };
    case USER_FORGOT_PASSWORD_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const userResetPasswodReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASSWORD_REQUEST:
      return { loading: true, passwordChanged: false };
    case USER_RESET_PASSWORD_SUCCESS:
      return { loading: false, passwordChanged: true, message: "" };
    case USER_RESET_PASSWORD_FAIL:
      return { loading: false, passwordChanged: false, error: action.payload };
    default:
      return state;
  }
};