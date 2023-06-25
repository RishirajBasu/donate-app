import React, { useState } from "react";
import "./Otp.css";
import axios from "axios";
import OTPInput from "otp-input-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router";
const Otp = () => {
  const [OTP, setOTP] = useState("");
  const location = useLocation();

  const verifyEmail = () => {
    if (location.state.email === null) {
      return <Otp />;
    } else {
      return location.state.email;
    }
  };
  // api integration

  const URL = "http://localhost:8000";

  const verifyOtp = async () => {
    try {
      if (OTP.length === 0 || OTP.length < 4) {
        // alert("Kindly fill the Form properly");
        toast.warn("Kindly enter a valid Otp");
      } else {
        let { data } = await axios.post(
          `${URL}/accounts/verify/`,
          {
            email: location.state.email,
            otp: OTP,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        toast.success("User registred successfully");
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error("Something went wrong");
      }
    }
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
              <p>Enter the OTP sent on {verifyEmail()}</p>
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
            <div className="verify-button">
              <button
                className="input-button"
                onClick={() => {
                  verifyOtp();
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
export default Otp;
