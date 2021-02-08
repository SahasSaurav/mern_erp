import {Switch,Route} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      
      <div className="flex">
        <Sidebar />
        <Dashboard />
        {/* <Switch>
          <Route exact to="" component={} />
        </Switch> */}
        {/* <div className="bg-blue-900  w-full h-screen "></div> */}
      </div>
    </>
  );
};

export default App;
