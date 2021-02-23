import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import BouncingLoader from "./BouncingLoader";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [passwordVisibility, setPasswordVisiblity] = useState(false);

  const { register, handleSubmit, errors: formError } = useForm();

  const toggleVisibility = () => {
    const visibility = passwordVisibility;
    setPasswordVisiblity(!visibility);
  };

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userLogin);
  const onSubmitHandler = (data) => {
    dispatch(login(data.email, data.password));
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmitHandler)}
      className="w-full"
    >
      <div className=" space-y-5 ">
        <div className="relative flex w-full flex-wrap items-stretch mb-1 rounded-lg">
          <span className="flex z-10 h-full leading-normal font-normal text-center text-gray-400 dark:text- absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
            <svg
              className="w-6 h-6 fill-current text-gray-900 dark:text-white "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Please enter your e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
            className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${
              formError.email ? "ring-red-400" : "ring-blue-400"
            } ${formError.email ? "ring-2" : ""}  w-full pl-10`}
          />
        </div>
        {formError.email && (
          <small className="error">{formError.email?.message}</small>
        )}
      </div>
      <div className="my-6 ">
        <div className="relative flex w-full flex-wrap items-stretch mb-1 rounded-lg">
          <span className="flex z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
            <svg
              className="w-6 h-6 fill-current text-gray-900 dark:text-white "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path>
            </svg>
          </span>
          <input
            type={passwordVisibility ? "text" : "password"}
            placeholder="Password"
            name="password"
            ref={register({
              required: "Please enter your password",
              minLength: 8,
            })}
            className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2  ${
              formError.email ? "ring-red-400" : "ring-blue-400"
            } ${formError.email ? "ring-2" : ""}  w-full pl-10`}
          />
          <button
            type="button"
            onClick={toggleVisibility}
            className="z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-100 "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {!passwordVisibility && (
                <path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z">
                  <path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"></path>
                </path>
              )}
              {/* visible */}
              {passwordVisibility && (
                <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
              )}
            </svg>
          </button>
        </div>
        {formError.password && (
          <small className="error">{formError.password?.message}</small>
        )}
        {error && (
          <Link
            className="mt-3  -mb-2 block text-right  hover:underline "
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        )}
      </div>
      <button
        className={`w-full ${loading ? "bg-blue-300" : "bg-blue-500"} ${
          loading ? "bg-blue-300" : "hover:bg-blue-600"
        } text-white  font-semibold uppercase text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 transition duration-100`}
        type="submit"
        disabled={loading}
      >
        {loading ? <BouncingLoader /> : "Sign In"}
      </button>
    </form>
  );
};

export default SignupForm;
