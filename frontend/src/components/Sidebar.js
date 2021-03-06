import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/userAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <header className=" flex-col px-14  py-4 bg-white dark:bg-blueGray-800 dark:text-white min-h-screen max-w-full ">
      {/* photo */}
      <div>
        <div className="flex justify-center items-center mt-10 w-24 h-24  rounded-full bg-gray-300 dark:bg-gray-600 shadow-xl ">
          <div className="flex justify-center items-center text-white text-2xl tracking-widest font-medium w-20 h-20 rounded-full bg-gray-700 border-4 border-white shadow-md">
            EM
          </div>
        </div>
        <p className=" mt-2  text-lg tracking-wide font-semibold text-gray-600 dark:text-white">
          {userInfo?userInfo.name:''}
        </p>
      </div>
      <ul className=" flex flex-col  mt-32">
        <li className=" group py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
          <NavLink
            to="/"
            className="flex flex-row justify-start  items-end text-gray-500 dark:text-gray-50 group-hover:text-blue-400"
            activeClassName="text-blue-500 dark:text-blue-400 "
            isActive={(match) => {
              return match.isExact ? true : false;
            }}
          >
            <svg
              className="h-6 w-6 mr-4  fill-current "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
            </svg>
            <span>Overview</span>
          </NavLink>
        </li>
        <li className="group py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
          <NavLink
            to="/profile"
            className="flex flex-row justify-start items-end text-gray-500 dark:text-gray-50 group-hover:text-blue-400"
            activeClassName="text-blue-500 dark:text-blue-400"
          >
            <svg
              className="h-6 w-6 mr-4  fill-current "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
            <span>Profile</span>
          </NavLink>
        </li>
        <li className="group py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
          <NavLink
            to="/academics"
            className="flex flex-row justify-start items-end text-gray-500 dark:text-gray-50 group-hover:text-blue-400"
            activeClassName="text-blue-500 dark:text-blue-400"
          >
            <svg
              className="h-6 w-6 mr-4  fill-current "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
            </svg>
            <span>Academics</span>
          </NavLink>
        </li>
        <li className="group py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
          <NavLink
            to="/exams"
            className="flex flex-row justify-start items-end  text-gray-600 dark:text-gray-50 group-hover:text-blue-400"
            activeClassName="text-blue-500 dark:text-blue-400"
          >
            <svg
              className="h-6 w-6 mr-4  fill-current "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
            </svg>
            <span>Exams</span>
          </NavLink>
        </li>
        <li className="group py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
          <NavLink
            to="/fees"
            className="flex flex-row justify-start items-end text-gray-500 dark:text-gray-50 group-hover:text-blue-400"
            activeClassName="text-blue-500 dark:text-blue-400"
          >
            <svg
              className="h-6 w-6 mr-4  fill-current"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
            <span>Fees</span>
          </NavLink>
        </li>
        <li className=" group py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
        </li>
        <li className="py-3 text-base font-medium tracking-wide text-gray-600 dark:text-gray-50">
          <button
            className="flex flex-row justify-start  items-end text-gray-500 dark:text-gray-50 group hover:text-red-400 focus:outline-none"
            onClick={() => dispatch(logout())}
          >
            <svg
              className="h-6 w-6 mr-4  fill-current group-hover:text-red-400"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path>
            </svg>
            <span className="group-hover:text-red-400">Logout</span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Sidebar;
