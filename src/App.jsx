import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import EmployeeManagement from "./Components/EmployeeManagement";
import OrderDashboard from "./Components/OrderDashboard";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route
          path="/employeeManagement"
          element={<EmployeeManagement /> }
        ></Route>
        <Route path="/orderdashboard" element={<OrderDashboard />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
}

export default App;
