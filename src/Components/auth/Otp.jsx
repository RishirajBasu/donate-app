import React from "react";
import "./Otp.css";
import { useState } from "react";
import OTPInput from "otp-input-react";
const Login = () => {
  const [OTP, setOTP] = useState("");
  const goto_home = () => {
    alert("Otp Submitted");
    console.log(OTP);
  };
  return (
    <div>
      <div className="wrapper_otp">
        <div className="container_left_otp">
          <h1> Donate </h1>
        </div>
        <div className="container_right_otp">
          <div className="form_container">
            <div className="auth_heading">
              <p>Enter Otp</p>
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
            <div className="auth_submit">
              <button
                onClick={() => {
                  goto_home();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
