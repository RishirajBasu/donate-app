import { useState } from "react";
import "./App.css";
import Signin from "./Components/auth/Signin";
import Login from "./Components/auth/Login";
import Otp from "./Components/auth/Otp";
import Error from "./Components/error pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
