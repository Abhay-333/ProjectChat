import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("absasd@gmail.com");
  const [password, setPassword] = useState("password@522D");
  const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let isLogin = true;
  passwordRegex.test(password);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setEmail("");
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert("Please enter valid email");
      isLogin = false;
      setEmail(email);
    }

    if (!passwordRegex.test(password)) {
      alert("Please enter valid password");
      isLogin = false;
      setPassword(password);
    }

    if (isLogin) {
      navigate("/orderdashboard");
    }
  };

  return (
    <div className="w-full h-[100vh] p-20 flex items-center">
      <div className="leftSide w-full h-[90vh] rounded-2xl bg-[#FF823A]"></div>

      <div className="rightSide w-full h-[90vh] p-10">
        <div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="h-[80vh] p-10 flex flex-col items-center"
          >
            <h1 className="text-4xl text-center mb-10">LOGIN</h1>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="bg-zinc-200 rounded-lg p-4 m-3 w-96"
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              value={password}
              className="bg-zinc-200 rounded-lg p-4 m-3 w-96"
              type="text"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <a href="/forgotpassword" className="cursor-pointer text-right w-full mr-42 font-semibold text-md text-[#FF823A]">
              Forgot Password?
            </a>

            <button className="bg-[#FF823A] mt-7 text-white py-2 font-semibold rounded-lg text-xl px-15">
              Login
            </button>

            <div className="flex items-center justify-center w-[25vw] gap-3">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-zinc-400 text-[14px] mb-10 mt-10 font-medium">
                OR
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <h3>
              Don't have an account? 
              <a
                href="/employee-management"
                className="text-[#FF823A] cursor-pointer font-semibold"
              >
                Sign up
              </a>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
