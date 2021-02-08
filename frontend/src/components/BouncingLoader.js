import React from "react";

const BouncingLoader = () => {
  return (
    <div class="loader flex justify-center items-center">
      <div class="h-4 w-4 rounded-full bg-gray-50 m-1 animate-bounce"></div>
      <div
        class="h-4 w-4 rounded-full bg-gray-50 m-1 animate-bounce"
        style={{
          animationDelay: ".2s",
        }}
      ></div>
      <div
        class="h-4 w-4 rounded-full bg-gray-50 m-1 animate-bounce"
        style={{
          animationDelay: ".4s",
        }}
      ></div>
    </div>
  );
};

export default BouncingLoader;
