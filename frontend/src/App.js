import { useEffect,Suspense,lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthRoute from "./components/AuthRoute";
// import AdminRoute from "./components/AdminRoute";

import { peristTheme } from "./actions/themeAction";
import {refreshTheToken} from './actions/userAction'

const Dashboard=lazy(()=>import("./pages/Dashboard")) 
const Login=lazy(()=>import ("./pages/Login")) 
const Register=lazy(()=>import("./pages/Register") ) 
const StudentService=lazy(()=>import ("./pages/StudentService")) 
const Profile=lazy(()=>import ("./pages/Profile")) 
const ForgotPassword=lazy(()=>import('./pages/ForgotPassword'))
const ResetPassword=lazy(()=>import('./pages/ResetPassword'))


const App = () => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.theme);  
  const {accessToken,accessExpiresAt,isAuthenicated}=useSelector((state)=>state.userLogin) 

  const currentTime =new Date().getTime()

  useEffect(() => {
    dispatch(peristTheme());
  }, [darkMode]);

  // useEffect(()=>{
  //   if((!accessToken || currentTime/1000> accessExpiresAt) && isAuthenicated){
  //     dispatch(refreshTheToken())
  //   }
  // },[accessToken,currentTime,accessExpiresAt])

  return (
    <main className="flex">
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/exams" component={StudentService} />
        <AuthRoute path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/auth/register/:id/:token" component={Register} />
        <Route exact path="/auth/reset-password/:id/:token" component={ResetPassword} />
      </Switch>
      </Suspense>
    </main>
  );
};

export default App;
