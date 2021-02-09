import React from "react";

const Input = () => {
  const error=true;
  return (
    <>
      <div className="m-4 flex flex-col">
        <label htmlFor="name" className="ml-4  text-lg" >Name</label>
        <input
          type="text"
          className={` ${error?'ring-red-400 focus-ring-400':'focus:ring-blue-400'}`}
          name=""
          id=""
        />
        <small className="text-sm text-red-400 font-semibold tracking-wider  mt-1" >This is required field</small>
      </div>
    </>
  );
};

export default Input;