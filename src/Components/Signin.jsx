import React from "react";
import { styled } from "styled-components";
import "./Signin.css";
const Signin = () => {
  return (
    <div>
      <Wapper>
        <Container_left>
          <h1> Donate </h1>
        </Container_left>
        <Container_right>
          <form>
            {/* FirstName */}
            <div className="Fname">
              <label htmlFor="fname" className="input-label">
                FirstName :{" "}
              </label>
              <input
                type="text"
                name="fname"
                id="name"
                autoComplete="off"
                placeholder="Enter your First Name"
              />
            </div>
            {/* LastName */}
            <div className="Lname">
              <label htmlFor="lname" className="input-label">
                LastName :{" "}
              </label>
              <input
                type="text"
                name="lname"
                id="name"
                autoComplete="off"
                placeholder="Enter your Last Name"
              />
            </div>
            {/* Email */}
            <div className="email">
              <label htmlFor="email" className="input-label">
                Email :{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter your Email ID"
              />
            </div>
            {/* Date of Birth */}
            <div className="date">
              <label htmlFor="date" className="input-label">
                Date of Birth :{" "}
              </label>
              <input
                type="date"
                name="date"
                id="date"
                autoComplete="off"
                placeholder="Enter your Date of Birth"
                style={{ color: "black" }}
              />
            </div>
            {/* Phone Number */}
            <div className="number">
              <label htmlFor="number" className="input-label">
                Phone Number :{" "}
              </label>
              <input
                type="number"
                name="number"
                id="number"
                autoComplete="off"
                placeholder="Enter your Phone Number"
              />
            </div>
            {/* Password */}
            <div className="password">
              <label htmlFor="password" className="input-label">
                Password :{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Enter your Password"
              />
            </div>
            {/* Confirm Password */}
            <div className="confirm_password">
              <label htmlFor="confirm_password" className="input-label">
                Confirm Password :{" "}
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                autoComplete="off"
                placeholder="Confirm your Password"
              />
            </div>
            <div className="buttons">
              <button className="input-button" type="submit">
                Sign In
              </button>
            </div>
          </form>
          <p className="login">
            Already have an account? <a href="#">Log In</a>
          </p>
        </Container_right>
      </Wapper>
    </div>
  );
};
const Wapper = styled.div`
  margin: 0px;
  border: none;
`;

const Container_left = styled.div`
  background: #850000;
  color: White;
  border: 2px solid #850000;
  width: 550px;
  height: 1000px;
  h1 {
    background-color: #850000;
  }
`;

const Container_right = styled.div`
  width: 500px;
  height: 400px;
  padding: 30px;
  position: fixed;
  top: 100px;
  bottom: 100px;
  left: 700px;
  /* right: 200px; */
  margin-left: auto;
  margin-right: auto;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
`;

export default Signin;
