import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component:Component, ...rest }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const userLogin = useSelector((state) => state.userLogin);
  const { isAuthenicated } = userAuth;
  const { userInfo } = userLogin;

  const isAdmin=userInfo.role==='admin'

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenicated && isAdmin ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default AdminRoute;