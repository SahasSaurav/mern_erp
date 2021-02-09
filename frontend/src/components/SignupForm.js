import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [passwordVisibility, setPasswordVisiblity] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const toggleVisibility = () => {
    const visibility = passwordVisibility;
    setPasswordVisiblity(!visibility);
  };

  const onSubmitHandler = (data) => console.log(data);

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmitHandler)}
      className="w-full"
    >
      <div>
        <div className="relative flex w-full flex-wrap items-stretch mb-3 rounded-3xl">
          <span className="flex z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
            <svg
              className="w-6 h-6 fill-current text-gray-900 "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Please enter your e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
            className="px-3 py-4 placeholder-gray-400 text-gray-700 relative  bg-white rounded-3xl text-base border border-gray-400 outline-none focus:outline-none focus:ring-2 ring-blue-400  w-full pl-10"
          />
        </div>
        {errors.email && <small className="error">{errors.email?.message}</small>}
      </div>
      <div>
        <div className="relative flex w-full flex-wrap items-stretch mb-3 rounded-3xl">
          <span className="flex z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
            <svg
              className="w-6 h-6 fill-current text-gray-900 "
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
            })}
            className="px-3 py-4 placeholder-gray-400 text-gray-700 relative  bg-white rounded-3xl text-base border border-gray-400 outline-none focus:outline-none focus:ring-2 ring-blue-400  w-full pl-10"
          />
          <button
            type="button"
            onClick={toggleVisibility}
            className="z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current text-gray-900 "
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
        {errors.password && (<small className="error" >{errors.password?.message}</small>)}
      </div>
      <button
        className="w-full  bg-blue-500 text-white hover:bg-blue-600 font-semibold uppercase text-base px-8 py-4 rounded-3xl shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-100"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignupForm;
