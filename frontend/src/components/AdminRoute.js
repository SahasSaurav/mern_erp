import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ chilren, ...rest }) => {
  const isauthenicated=true,
  const isAdmin=false;
  return (
    <Route
      {...rest}
      render={() => (isauthenicated && isAdmin ? { chilren } : <Redirect to="/login" />)}
    ></Route>
  );
};
