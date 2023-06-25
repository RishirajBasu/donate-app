import React, { useState } from "react";
import "./Otp.css";
import OTPInput from "otp-input-react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const goto_home = () => {
    if (OTP.length < 4) {
      alert("Please Enter Valid OTP");
      return;
    }
    toast.success("Otp Submitted");
  };
  return (
    <>
      <div className="wrapper_otp">
        <div className="container_left_otp">
          <h1> Donate </h1>
        </div>
        <div className="container_right_otp">
          <div className="form_container">
            <div className="auth-heading otp">
              <h2>Verify your account</h2>
              <p>Enter the OTP sent on {location.state.email}</p>
            </div>
            <div className="auth_body">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure={false}
              />
            </div>
            <div className="">
              <button
                className="input-button"
                onClick={() => {
                  goto_home();
                }}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
