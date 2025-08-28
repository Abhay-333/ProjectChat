import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import EmployeeManagement from "./Components/EmployeeManagement";
import OrderDashboard from "./Components/OrderDashboard";
import ForgotPassword from "./Components/ForgotPassword";
import PersonalInfo from "./Components/PersonalInfo";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <>
    {/* <Routes location={location} key={location.pathname}> */}
      
    {/* </Routes> */}

        {/* <Routes> */}
      

        {/* </Routes> */}

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/orderdashboard" element={<OrderDashboard />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        
        <Route path="/employee-management" element={<EmployeeManagement />} >
        </Route>
        
        <Route path="/employee-management/personalinfo" element={<PersonalInfo />} />
        
      </Routes>
    </>
  );
}

export default App