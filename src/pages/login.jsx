import React, { useState } from "react";
const Login = ()=>{
return(
    <div className="">
    <div className="bg-white  ml-[40%] absolute  w-[30%] mt-48 border-2 overflow-hidden shadow-2xl rounded-xl">
        <p className="text-4xl mt-10 ml-[10%]">E-V TRACK</p>
      <form className="flex flex-col mt-6 ml-2">
        <label className=" text-xl text-gray-color-100 mr-96">EMAIL</label>
        <input
          type="email"
          name="email"
          id="EmailId"
          className="border 
         border-black 
         ml-[10%] pl-4 h-7 w-80 rounded-r-sm  outline-none"
          required
        />
        <label className=" text-xl text-gray-color-100 mt-6 mr-[60%]">PASSWORD</label>
        <input
          type="password"
          name="password"
          id="PasswordId"
          className="border border-black 
         pl-4 h-7 w-80 rounded-r-sm 
         ml-[10%]
          outline-none 
          mb-4"
          required
        />
         Don't have an account? Create Account
        <button
          type="submit"
          className="bg-black text-white w-24 h-12 mt-10 rounded-md mb-10 ml-[10%]"
        >
          Sign In
        </button>
      </form>
      </div>
      </div>
);
}
export default Login;