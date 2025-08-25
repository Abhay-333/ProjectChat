import { useState } from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import EmployeeManagement from "./Components/EmployeeManagement";
import OrderDashboard from "./Components/OrderDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
      <EmployeeManagement />
      <OrderDashboard />
    </>
  );
}

export default App;
