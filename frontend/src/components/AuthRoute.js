import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useLocation} from "react-router-dom";
import { authenticated} from "../actions/userAction";

const AuthRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.userAuth);
  const userLogin = useSelector((state) => state.userLogin);

  const { isAuthenticated } = userAuth;
  const { accessToken,expiresAt,refreshToken,} = userLogin;
  const location = useLocation()

  useEffect(()=>{
    dispatch(authenticated())
  },[dispatch,accessToken,refreshToken,expiresAt,location])

  return (
    <Route
      {...rest}
      render={(props) =>(isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />) }/>
  );
};

export default AuthRoute;
