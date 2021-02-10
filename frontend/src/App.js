import {Switch,Route} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      
      <div className="flex">
        {/* <Login /> */}
        <Sidebar />
        <Switch>
          <Route exact to="/" component={Dashboard} />
          {/* <Route exact to="/login" component={Login} /> */}
        </Switch>
      </div>
    </>
  );
};

export default App;
