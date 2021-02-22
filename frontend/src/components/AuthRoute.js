import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const userAuth = useSelector((state) => state.userAuth);
  const { isAuthenicated } = userAuth;

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
