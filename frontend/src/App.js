import {useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import {peristTheme} from './actions/themeAction';

const App = () => {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(peristTheme())
  }, [])
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
