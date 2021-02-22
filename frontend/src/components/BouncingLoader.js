import React from "react";

const BouncingLoader = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="h-3 w-3 rounded-full bg-gray-50 m-1 animate-bounce"></div>
      <div
        className="h-3 w-3 rounded-full bg-gray-50 m-1 animate-bounce"
        style={{
          animationDelay: ".2s",
        }}
      ></div>
      <div
        className="h-3 w-3 rounded-full bg-gray-50 m-1 animate-bounce"
        style={{
          animationDelay: ".4s",
        }}
      ></div>
    </div>
  );
};

export default BouncingLoader;
