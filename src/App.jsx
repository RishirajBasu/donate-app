import { useState } from "react";
import "./App.css";
import Signin from "./Components/auth/Signin";
import Login from "./Components/auth/Login";
import Otp from "./Components/auth/Otp";
import Home from "./Components/auth/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
