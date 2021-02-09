import React from "react";
import SignupForm from "../components/SignupForm";

const Login = () => {
  return (
    <section
      className="w-full h-screen lg:overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/LoginBg.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto w-full h-screen">
        <div className="flex justify-center items-center w-full h-full ">
          <div className="flex rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col justify-center items-center  max-w-md  w-full bg-white  px-10 py-4 ">
              <img
                className="h-24 w-24 mx-auto object-contain mt-8"
                src="/assets/images/bitlogo.png"
                alt="logo"
              />
              <h1 className="text-4xl  mx-auto mt-4 mb-2 ">Welcome</h1>
              <h3 className="text-xl text-center mb-8">
                Birla Institute of Technology
              </h3>
              <SignupForm />
            </div>

            <div className=" relative  max-w-xl w-full bg-red-200 ">
              <img
                className="w-full h-full  object-cover "
                src="/assets/images/BIT.jpeg"
                alt=""
                style={{
                  maxHeight: "552px",
                  height: "100%",
                }}
              />
              <span className="absolute top-0 left-0  w-full h-full  bg-blue-400  opacity-50 z-10"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
