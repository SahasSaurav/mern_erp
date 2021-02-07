import {Switch,Route} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import Overview from './pages/Overview';

const App = () => {
  return (
    <>
      
      <div className="flex">
        <Sidebar />
        <Overview />
        {/* <Switch>
          <Route exact to="" component={} />
        </Switch> */}
        {/* <div className="bg-blue-900  w-full h-screen "></div> */}
      </div>
    </>
  );
};

export default App;
