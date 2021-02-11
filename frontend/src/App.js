import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { peristTheme } from "./actions/themeAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peristTheme());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <div className="flex">
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
