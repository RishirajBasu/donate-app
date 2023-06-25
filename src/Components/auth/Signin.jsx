import React from "react";
import { styled } from "styled-components";
import "./Signin.css";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
import { useNavigate } from "react-router-dom";
import "./Login";
import "./Otp";
const Signin = () => {
  // this is used to navigate to different pages
  const navigate = useNavigate();

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
  const goto_otp = () => {
    errors ? alert("Kindly fill the Form properly") : navigate("/otp");
  };
  return (
    <div>
      <Wapper>
        <Container_left>
          <h1> Donate </h1>
        </Container_left>
        <Container_right className="container_right sign-up">
          <div className="form-container sign-up">
            <div className="signup_text">
              <div className="auth-heading">
                <p>Sign up to Donate</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* name */}
              <div className="name_container">
                {/* FirstName */}
                <div className="form-group">
                  <label htmlFor="fname" className="input-label">
                    First Name{" "}
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
                <div className="form-group">
                  <label htmlFor="lname" className="input-label">
                    Last Name{" "}
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
              <div className="form-group">
                <label htmlFor="email" className="input-label">
                  Email{" "}
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
                {errors.email && touched.email ? (
                  <div className="errors">
                    <p>{errors.email}</p>
                  </div>
                ) : null}
              </div>

              {/* Date of Birth */}
              <div className="form-group">
                <label htmlFor="date" className="input-label">
                  Date of Birth{" "}
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
                {errors.date && touched.date ? (
                  <div className="errors">
                    <p>{errors.date}</p>
                  </div>
                ) : null}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="number" className="input-label">
                  Phone Number{" "}
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
                {errors.number && touched.number ? (
                  <div className="errors">
                    <p>{errors.number}</p>
                  </div>
                ) : null}
              </div>

              {/* Adhaar card number */}
              <div className="form-group">
                <label htmlFor="adhaar_number" className="input-label">
                  Adhaar Card Number{" "}
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
                {errors.adhaar_number && touched.adhaar_number ? (
                  <div className="errors">
                    <p>{errors.adhaar_number}</p>
                  </div>
                ) : null}
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password" className="input-label">
                  Password{" "}
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
                {errors.password && touched.password ? (
                  <div className="errors">
                    <p>{errors.password}</p>
                  </div>
                ) : null}
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="confirm_password" className="input-label">
                  Confirm Password{" "}
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
                {errors.confirm_password && touched.confirm_password ? (
                  <div className="errors">
                    <p>{errors.confirm_password}</p>
                  </div>
                ) : null}
              </div>

              <div className="buttons">
                <button
                  className="input-button"
                  type="submit"
                  onClick={() => {
                    goto_otp();
                  }}
                >
                  Create Account
                </button>
              </div>

              <div className="form-bottom">
                Already have an account? <a href="/login">Log in</a>
              </div>
            </form>
          </div>
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
  height: 100vh;
  scroll-behavior: smooth;
`;

const Container_left = styled.div`
  background: #850000;
  color: White;
  border: 2px solid #850000;
  width: 35vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    background-color: #850000;
  }
`;

const Container_right = styled.div``;

export default Signin;