import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import StudentService from "./pages/StudentService";
import Profile from "./pages/Profile";

import { peristTheme } from "./actions/themeAction";
import Sidebar from "./components/Sidebar";

const App = () => {
  const dispatch = useDispatch();

  let history = useHistory();
  const isAuthenticated = true;

  useEffect(() => {
    dispatch(peristTheme());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <main className="flex">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/exams" component={StudentService} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </main>
  );
};

export default App;
