import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterForm from "../components/RegisterForm";



const Register = () => {
  const theme = useSelector((state) => state.theme);
  const userRegister = useSelector((state) => state.userRegister);
  const { darkMode } = theme;
  const { register } = userRegister;
  const history = useHistory();

  useEffect(() => {
    if (register) {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, [register]);

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
            <div className="relative  max-w-lg w-full   bg-red-200 ">
              <img
                className="w-full h-full  object-cover "
                src="/assets/images/BIT.jpeg"
                alt=""
              />
              <span className="absolute top-0 left-0  w-full h-full  bg-indigo-400  opacity-20 z-10"></span>
              {darkMode && (
                <span className="absolute top-0 left-0  w-full h-full  bg-gray-700  opacity-10 z-10"></span>
              )}
            </div>
            <div className="flex flex-col justify-center items-center  max-w-sm w-full    bg-white dark:bg-blueGray-800 dark:text-white px-10 py-4 ">
              <img
                className="h-20 w-20 mx-auto object-contain mt-8"
                src="/assets/images/bitlogo.png"
                alt="logo"
              />
              <h1 className="text-3xl  mx-auto mt-4 mb-2 ">Welcome</h1>
              <h3 className="text-lg text-center font-medium mb-8">
                Birla Institute of Technology
              </h3>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
