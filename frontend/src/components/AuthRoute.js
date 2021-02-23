import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import { authenicated, logout } from "../actions/userAction";

const AuthRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const userLogin = useSelector((state) => state.userLogin);

  const { isAuthenicated } = userAuth;
  const { token, expiresAt, userInfo } = userLogin;
  const location = useLocation();

  useEffect(() => {
    dispatch(authenicated());
  }, [dispatch, token, expiresAt, userInfo, location]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenicated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
