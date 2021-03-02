import {useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { Route,} from "react-router-dom";
import Login from "../pages/Login";

const AuthRoute = ({ component: Component, ...rest }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const userLogin = useSelector((state) => state.userLogin);

  const {isAuthenticated}=userAuth  
  
  return (
    <Route
      {...rest}
      render={(props) =>(isAuthenticated ? <Component {...props} /> : <Login />) }/>
  );
};

export default AuthRoute;
