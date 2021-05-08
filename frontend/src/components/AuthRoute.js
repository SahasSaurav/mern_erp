import { useSelector} from "react-redux";
import {Route} from "react-router-dom";
import Login from "../pages/Login";

const AuthRoute = ({ component: Component, ...rest }) => {
  const userAuth = useSelector((state) => state.userAuth);

  const {isAuthenticated}=userAuth  
  // const isAuthenticated=true;

  return (
    <Route
      {...rest}
      render={(props) =>(isAuthenticated ? <Component {...props} /> :<Login />) }/>
  );
};

export default AuthRoute;
