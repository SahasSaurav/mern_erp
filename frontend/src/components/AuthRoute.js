import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ chilren, ...rest }) => {
  const isauthenicated=true,
  return (
    <Route
      {...rest}
      render={() => (isauthenicated ? { chilren } : <Redirect to="/login" />)}
    ></Route>
  );
};
