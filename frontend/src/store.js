import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { themeReducer } from "./reducer/themeReducer";
import {
  userLoginReducer,
  userAuthReducer,
  userRegisterReducer,
} from "./reducer/userReducer";

const reducer = combineReducers({
  theme: themeReducer,
  userAuth: userAuthReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
