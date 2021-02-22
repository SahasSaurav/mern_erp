import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import StudentService from "./pages/StudentService";
import Profile from "./pages/Profile";
import AuthRoute from "./components/AuthRoute";
import AdminRoute from "./components/AdminRoute";

import { peristTheme } from "./actions/themeAction";
import { authenicated } from "./actions/userAction";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const userLogin = useSelector((state) => state.userLogin);

  const { darkMode } = theme;
  const { token, expiresAt, userInfo } = userLogin;

  useEffect(() => {
    dispatch(peristTheme());
  }, [dispatch, darkMode]);

  useEffect(() => {
    dispatch(authenicated);
  }, [dispatch, token, expiresAt, userInfo]);

  return (
    <main className="flex">
      <Switch>
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/exams" component={StudentService} />
        <AuthRoute path="/profile" component={Profile} />
      </Switch>
    </main>
  );
}; 

export default App;
