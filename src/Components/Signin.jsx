import React from "react";
import { styled } from "styled-components";
import "./Signin.css";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
const Signin = () => {
  const initialvalues = {
    fname: "",
    lname: "",
    email: "",
    date: "",
    number: "",
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
        <Container_right>
          <form onSubmit={handleSubmit}>
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
              />
            </div>
            {errors.fname && touched.fname ? (
              <div className="errors">
                <p>{errors.fname}</p>
              </div>
            ) : null}

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
            </div>
            {errors.lname && touched.lname ? (
              <div className="errors">
                <p>{errors.lname}</p>
              </div>
            ) : null}
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
  height: 690px;
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
  border: 1px solid black;
  border-radius: 10px;
  input {
    color: black;
  }
`;

export default Signin;
