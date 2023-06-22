import React from "react";
import { styled } from "styled-components";
import "./Signin.css";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
import { useNavigate } from "react-router-dom";
import "./Login";
const Signin = () => {
  // this is used to navigate to different pages
  const navigate = useNavigate();
  const goto = () => {
    navigate("/login");
  };
  const initialvalues = {
    fname: "",
    lname: "",
    email: "",
    date: "",
    number: "",
    adhaar_number: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: signinSchema,
      validateOnChange: signinSchema,
      validateOnBlur: signinSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div>
      <Wapper>
        <Container_left>
          <h1> Donate </h1>
        </Container_left>
        <Container_right className="container_right">
          <div className="login_container">
            <p className="login">
              Already have an account?{" "}
              <button
                onClick={() => {
                  goto();
                }}
              >
                Log In
              </button>
            </p>
          </div>
          <div className="signup_text">
            <p>Sign up to Donate</p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            {/* name */}
            <div className="name_container">
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
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="class_fname"
                />
                {errors.fname && touched.fname ? (
                  <div className="errors">
                    <p>{errors.fname}</p>
                  </div>
                ) : null}
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
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lname && touched.lname ? (
                  <div className="errors">
                    <p>{errors.lname}</p>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Email */}
            <div className="Email">
              <label htmlFor="email" className="input-label">
                Email :{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Enter your Email ID"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email ? (
              <div className="errors">
                <p>{errors.email}</p>
              </div>
            ) : null}

            {/* Date of Birth */}
            <div className="Date">
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
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.date && touched.date ? (
              <div className="errors">
                <p>{errors.date}</p>
              </div>
            ) : null}

            {/* Phone Number */}
            <div className="Number">
              <label htmlFor="number" className="input-label">
                Phone Number :{" "}
              </label>
              <input
                type="number"
                name="number"
                id="number"
                autoComplete="off"
                placeholder="Enter your Phone Number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.number && touched.number ? (
              <div className="errors">
                <p>{errors.number}</p>
              </div>
            ) : null}

            {/* Adhaar card number */}
            <div className="Number">
              <label htmlFor="adhaar_number" className="input-label">
                Adhaar Card Number :{" "}
              </label>
              <input
                type="number"
                name="adhaar_number"
                id="adhaar_number"
                autoComplete="off"
                placeholder="Enter your Adhaar Card Number"
                value={values.adhaar_number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.adhaar_number && touched.adhaar_number ? (
              <div className="errors">
                <p>{errors.adhaar_number}</p>
              </div>
            ) : null}

            {/* Password */}
            <div className="Password">
              <label htmlFor="password" className="input-label">
                Password :{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Enter your Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.password && touched.password ? (
              <div className="errors">
                <p>{errors.password}</p>
              </div>
            ) : null}

            {/* Confirm Password */}
            <div className="Confirm_password">
              <label htmlFor="confirm_password" className="input-label">
                Confirm Password :{" "}
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                autoComplete="off"
                placeholder="Confirm your Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.confirm_password && touched.confirm_password ? (
              <div className="errors">
                <p>{errors.confirm_password}</p>
              </div>
            ) : null}

            <div className="buttons">
              <button className="input-button" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </Container_right>
      </Wapper>
    </div>
  );
};
const Wapper = styled.div`
  margin: 0px;
  border: none;
  display: flex;
  flex-direction: row;
`;

const Container_left = styled.div`
  background: #850000;
  color: White;
  border: 2px solid #850000;
  width: 550px;
  height: 690px;
  h1 {
    background-color: #850000;
  }
`;

const Container_right = styled.div`
  /* width: 500px;
  height: 400px; */
  padding: 30px;
  position: fixed;
  top: 100px;
  bottom: 100px;
  left: 700px;
  /* right: 200px; */
  margin-left: 50px;
  margin-right: auto;
  color: black;
  /* border: 1px solid black; */
  border-radius: 10px;
  input {
    color: black;
  }
  overflow: auto;
`;

export default Signin;
