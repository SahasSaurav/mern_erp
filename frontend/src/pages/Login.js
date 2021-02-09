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
      <div className="conatiner mx-auto  max-w-md bg-red-300 px-6 py-4">
        <img className="h-24 w-24 mx-auto" src="/assets/images/bitlogo.png" alt="logo"/>
        <h1>Welcome</h1>
        <h3>Birla Institute of Technology</h3>
        <SignupForm />
      </div>
    </section>
  );
};

export default Login;
