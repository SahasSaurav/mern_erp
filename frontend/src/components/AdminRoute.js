import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component:Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const isAdmin=userInfo.role==='admin'

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated && isAdmin ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default AdminRoute;