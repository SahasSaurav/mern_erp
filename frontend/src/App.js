import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentService from "./pages/StudentService";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import AuthRoute from "./components/AuthRoute";
import AdminRoute from "./components/AdminRoute";

import { peristTheme } from "./actions/themeAction";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { darkMode } = theme;

  useEffect(() => {
    dispatch(peristTheme());
  }, [dispatch, darkMode]);

  return (
    <main className="flex">
      <Switch>
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/exams" component={StudentService} />
        <AuthRoute path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/auth/register/:id/:token" component={Register} />
        {/* <Route exact path="/auth/reset-password/:id/:token" component={} /> */}
      </Switch>
    </main>
  );
};

export default App;
