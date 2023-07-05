import { useState } from "react";
import "./App.css";
import Signin from "./Components/auth/Signin";
import Login from "./Components/auth/Login";
import Otp from "./Components/auth/Otp";
import Error from "./Components/errorpages/Error";
import Home from "./Components/Home";
import HistoryDonor from "./Components/HistoryDonor";
import HistoryReciever from "./Components/HistoryReciever";
import Rewards from "./Components/Rewards";
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
            <Route path="/" element={<Home />} />
            <Route path="/history-donor" element={<HistoryDonor />} />
            <Route path="/history-reciever" element={<HistoryReciever />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
