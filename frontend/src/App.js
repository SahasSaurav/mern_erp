import { useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthRoute from "./components/AuthRoute";
// import AdminRoute from "./components/AdminRoute";

import { peristTheme } from "./actions/themeAction";
import { refreshTheToken, authenticated } from './actions/userAction'

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const StudentService = lazy(() => import("./pages/StudentService"))
const Profile = lazy(() => import("./pages/Profile"))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const Fee = lazy(() => import('./pages/Fee'))
const Academics = lazy(() => import('./pages/Academics'))


const Loader = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-50 dark:bg-gray-800  text-gray-800 dark:text-gray-50 items-center ">
      <span className="text-4xl">Loading...</span>
    </div>
  )
}


const App = () => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.theme);
  const { accessToken, refreshToken, accessExpiresAt, refreshExpiresAt } = useSelector((state) => state.userLogin)

  const { isAuthenticated } = useSelector(state => state.userAuth)

  const currentTime = new Date().getTime()

  useEffect(() => {
    dispatch(peristTheme());
  }, [darkMode]);


  useEffect(() => {
    dispatch(authenticated())
  }, [accessExpiresAt, refreshExpiresAt])

  useEffect(() => {
    if (isAuthenticated) {
      // if( currentTime/1000>accessExpiresAt){
      //   dispatch(refreshTheToken())
      // }
      if (!accessToken || !refreshToken) {
        dispatch(refreshTheToken())
      }
    }

  }, [currentTime, accessExpiresAt, accessToken, refreshToken])

  return (
    <main className="flex">
      <Suspense fallback={<Loader />}>
        <Switch>
          <AuthRoute exact path="/" component={Dashboard} />
          <AuthRoute exact path="/exams" component={StudentService} />
          <AuthRoute path="/profile" component={Profile} />
          <AuthRoute path="/fees" component={Fee} />
          <AuthRoute path="/academics" component={Academics} />
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

