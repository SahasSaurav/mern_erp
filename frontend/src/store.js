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
} from "./reducer/userReducer";

const reducer = combineReducers({
  theme: themeReducer,
  userAuth: userAuthReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswodReducer,
});

console.log(localStorage.getItem('theme'))

const initialState = {
  userLogin:{ 
    userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):{},
    expiresAt:localStorage.getItem('expiresAt')?JSON.parse(localStorage.getItem('expiresAt')):{},
    token: sessionStorage.getItem('token')?JSON.parse(sessionStorage.getItem('token')):''
  },
}

const middleware = [thunk];


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
