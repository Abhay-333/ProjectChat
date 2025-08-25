import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] p-20 flex items-center">
      <div className="leftSide w-full h-[90vh] rounded-2xl bg-[#FF823A]"></div>

      <div className="rightSide w-full h-[90vh] p-10">
        <div className="h-[80vh] p-10 flex flex-col items-center">
          <h1 className="text-4xl text-center mb-10">LOGIN</h1>
          <input
            className="bg-zinc-200 rounded-lg p-4 m-3 w-96"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="bg-zinc-200 rounded-lg p-4 m-3 w-96"
            type="text"
            placeholder="Password"
          />
          <p class="text-right w-full mr-42 font-semibold text-md text-[#FF823A]">
            Forgot Password?
          </p>

          <button className="bg-[#FF823A] mt-7 text-white py-2 font-semibold rounded-lg text-xl px-15">
            Login
          </button>

          <div class="flex items-center justify-center w-[25vw] gap-3">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="mx-4 text-zinc-400 text-[14px] mb-10 mt-10 font-medium">OR</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

          
          <h3>Don't have an account? <a className="text-[#FF823A] font-semibold">Sign up</a></h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
