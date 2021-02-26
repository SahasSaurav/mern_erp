import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import BouncingLoader from "../components/BouncingLoader";
import { forgotPassword } from "../actions/userAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { loading } = useSelector((state) => state.userForgotPassword);

  const { register, handleSubmit, errors: formError } = useForm();

  const onSubmitHandler = (data) => {
    dispatch(forgotPassword(data.email));
  };

  return (
    <section
      className="w-full h-screen lg:overflow-hidden"
      style={{
        backgroundColor: `${darkMode ? "#111924" : "#fff"}`,
        backgroundImage: "url('/assets/images/BgTrans.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto w-full h-screen">
        <div className="flex justify-center items-center w-full h-full ">
          <div className="flex rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col justify-center items-center  max-w-md w-full    bg-white dark:bg-blueGray-800 dark:text-white  px-6 py-4 ">
              <form
                method="post"
                onSubmit={handleSubmit(onSubmitHandler)}
                className="w-full p-6"
              >
                <label htmlFor="email" className="mb-2 block">
                  Please enter your email
                </label>
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
                      className={`px-2 py-3 placeholder-gray-400 dark:placeholder-gray-200 text-gray-700 dark:text-gray-200 relative bg-white dark:bg-gray-700 rounded-lg text-base font-normal border border-gray-400 dark:border-gray-500 outline-none focus:outline-none focus:ring-2 ${
                        formError.email ? "ring-red-400" : "ring-blue-400"
                      } ${formError.email ? "ring-2" : ""}  w-full pl-10`}
                    />
                  </div>
                  {formError.email && (
                    <small className="error">{formError.email?.message}</small>
                  )}
                </div>
                <button
                  className={`w-full ${
                    loading ? "bg-blue-300" : "bg-blue-500"
                  } ${
                    loading ? "bg-blue-300" : "hover:bg-blue-600"
                  } text-white  font-semibold uppercase text-base px-8 py-4 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none mt-4 mr-1 transition duration-100`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <BouncingLoader /> : "Send Mail"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
