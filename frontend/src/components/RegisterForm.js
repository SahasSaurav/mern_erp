import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerUser } from "../actions/userAction";
import BouncingLoader from "./BouncingLoader";
import { useParams } from "react-router-dom";

const RegisterForm = () => {
  const { register, handleSubmit, errors: formError, watch } = useForm();

  const { id, token } = useParams();
  console.log({ id, token });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userRegister);
  const onSubmitHandler = (data) => {
    dispatch(
      registerUser(id, token, data.email, data.password, data.repeatPassword)
    );
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmitHandler)}
      className="w-full"
    >
      <div className=" space-y-6 ">
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
      <div className="my-6">
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
            type="password"
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
        </div>
        {formError.password && (
          <small className="error">{formError.password?.message}</small>
        )}
      </div>
      <div className="my-6">
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
            type="password"
            placeholder="Confirm Password"
            name="repeatPassword"
            ref={register({
              required: "Please enter your Confirm password",
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
            className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2  ${
              formError.email ? "ring-red-400" : "ring-blue-400"
            } ${formError.email ? "ring-2" : ""}  w-full pl-10`}
          />
        </div>
        {formError.repeatPassword && (
          <small className="error">{formError.repeatPassword?.message}</small>
        )}
      </div>
      <button
        className={`w-full ${loading ? "bg-blue-300" : "bg-blue-500"} ${
          loading ? "bg-blue-300" : "hover:bg-blue-600"
        } text-white  font-semibold uppercase text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 transition duration-100`}
        type="submit"
        disabled={loading}
      >
        {loading ? <BouncingLoader /> : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
