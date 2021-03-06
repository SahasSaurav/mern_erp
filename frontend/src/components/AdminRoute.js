import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";

const AdminRoute = ({ component:Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const userAuth = useSelector((state) => state.userAuth);
  
  const { userInfo} = userLogin;
  const {isAuthenticated} = userAuth;
  
  const isAdmin=userInfo.role==='admin'

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated && isAdmin ? <Component {...props} /> : <Login />)}
    />
  );
};

export default AdminRoute;