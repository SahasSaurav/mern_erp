import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { themeReducer } from "./reducer/themeReducer";
import {
  userLoginReducer,
  userAuthReducer,
  userRegisterReducer,
  userForgotPasswordReducer,
  userResetPasswodReducer,
  userRefreshTokenReducer,
} from "./reducer/userReducer";

const reducer = combineReducers({
  theme: themeReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswodReducer,
  userRefreshToken:userRefreshTokenReducer,
});

const initialState = {}

const middleware = [thunk];


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
