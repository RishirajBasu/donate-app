import React, { useState } from "react";
import { styled } from "styled-components";
import "./Request.css";
import { useFormik } from "formik";
import { signinSchema } from "./Schema";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login";
import "./Otp";
import LoadingButton from "../UI/LoadingButton";

const Request = () => {
  // this is used to navigate to different pages
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialvalues = {
    fname: "",
    lname: "",
    require_on: "",
    reson: "",
    number: "",
    unit: "",
    urgent: "",
   
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

  const URL = "http://localhost:8000";

  const registerUser = async (values) => {
    try {
      if (
        values.fname === "" ||
        values.lname === "" ||
        values.require_on === "" ||
        values.reason === "" ||
        values.number === "" ||
        values.unit === "" ||
        values.urgent === "" 

      ) {
        // alert("Kindly fill the Form properly");
        toast.warn("Kindly fill the form properly");
        return;
      }

      if (values.password !== values.confirm_password) {
        toast.error("Password and Confirm Password should be same");
        return;
      }

      setLoading(true);
      let { data } = await axios.post(
        `${URL}/accounts/register/`,
        {
          first_name: values.fname,
          last_name: values.lname,
          require_on: values.require_on,
          reason: values.reason,
          phone: values.number,
          unit: values.unit,
          urgent: values.urgent,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      toast.success("User registred successfully");

      navigate("/otp", {
        state: {
          email: values.email,
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
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
                <p>Request for Donner</p>
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
                    id="fname"
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
                    id="lname"
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

              {/* Required On On */}
              <div className="form-group">
                <label htmlFor="require_on" className="input-label">
                  Required On{" "}
                </label>
                <input
                  type="text"
                  name="require_on"
                  id="require_on"
                  autoComplete="off"
                  placeholder="Required On"
                  value={values.require_on}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.require_on && touched.require_on ? (
                  <div className="errors">
                    <p>{errors.require_on}</p>
                  </div>
                ) : null}
              </div>
              {/*Reason */}
              <div className="form-group">
                <label htmlFor="reason" className="input-label">
                Reason{" "}
                </label>
                <input
                  type="text"
                  name="reason"
                  id="reason"
                  autoComplete="off"
                  placeholder="Why you need it "
                  value={values.reason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.reason && touched.reason ? (
                  <div className="errors">
                    <p>{errors.reason}</p>
                  </div>
                ) : null}
              </div>

              
              {/* Number of Units */}
              <div className="form-group">
                <label htmlFor="unit" className="input-label">
                  Number of Units{" "}
                </label>
                <input
                  type="number"
                  name="unit"
                  id="unit"
                  autoComplete="off"
                  placeholder="Enter your Phone Number"
                  value={values.unit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.unit && touched.unit ? (
                  <div className="errors">
                    <p>{errors.unit}</p>
                  </div>
                ) : null}
              </div>

              {/* Phone Number  */}
              <div className="form-group">
                <label htmlFor="number" className="input-label">
                  Phone Number {" "}
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

              
              {/* Urgent Box */}
              <div className="form-group">
                <label htmlFor="urgent" className="input-label">
                  Is Uegent{" "}
                </label>
                <input
                  type="checkbox"
                  name="urgent"
                  id="urgent"
                  autoComplete="off"
                  // placeholder="Confirm your Password"
                  value={values.urgent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                
              </div>

              <div className="buttons">
                <LoadingButton
                  text={"Send Request"}
                  loading={loading}
                  onClick={() => {
                    registerUser(values);
                  }}
                />
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

export default  Request;
