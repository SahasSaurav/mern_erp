import { useDispatch, useSelector } from "react-redux";
import { Route,} from "react-router-dom";
import Login from "../pages/Login";
import {authenticated} from '../actions/userAction'

const AuthRoute = ({ component: Component, ...rest }) => {
  // const userAuth = useSelector((state) => state.userAuth);
  const userLogin = useSelector((state) => state.userLogin);

  // const {isAuthenticated}=userAuth
  const { accessToken,accessExpiresAt,refreshToken,isAuthenticated} = userLogin;



  return (
    <Route
      {...rest}
      render={(props) =>(isAuthenticated ? <Component {...props} /> : <Login />) }/>
  );
};

export default AuthRoute;
