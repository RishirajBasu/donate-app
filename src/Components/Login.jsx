import React from "react";
import { styled } from "styled-components";
import "./Login.css";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
const Login = () => {
  const initialvalues = {
    email: "",
    password: "",
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
              Ain't verified yet? <a href="#">Sign up</a>
            </p>
          </div>
          <div className="signup_text">
            <p>Log in to Donate</p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
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

            <div className="buttons">
              <button className="input-button" type="submit">
                Log in
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

export default Login;
