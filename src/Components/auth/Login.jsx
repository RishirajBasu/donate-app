import React from "react";
import { styled } from "styled-components";
import "./Login.css";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from  "react-router-dom";
const Login = () => {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: signinSchema,
      onSubmit:(values,action) => {
        console.log(values);
        action.resetForm();
      },
    });
  const URL = "http://localhost:8000";

  const loginUser = async(values) => {
    try {
      // if (

      //   values.email === "" ||
      //   values.password === ""

      // ) {console.log("hi")}

      let { data } = await axios.post(
        `${URL}/accounts/register/`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  
};
console.log(errors);
return (
  <div>
    <Wapper>
      <Container_left>
        <h1> Donate </h1>
      </Container_left>
      <Container_right className="container_right login">
        <div className="form-container">
          <div className="auth-heading">
            <p>Log in to Donate</p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="Email">
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
            </div>
            {errors.email && touched.email ? (
              <div className="errors">
                <p>{errors.email}</p>
              </div>
            ) : null}
            <div className="Password">
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
            </div>
            {errors.password && touched.password ? (
              <div className="errors">
                <p>{errors.password}</p>
              </div>
            ) : null}

            <div className="buttons">
              <button
                className="input-button"
                type="submit"
                onClick={() => {
                  loginUser(values);
                }}
              >
                Log in
              </button>
            </div>

            <div className="form-bottom">
              Have not registered yet? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>
      </Container_right>
    </Wapper>
  </div>
)
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

const Container_right = styled.div`
  padding: 30px;
  position: fixed;
  top: 100px;
  bottom: 100px;
  left: 700px;
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
