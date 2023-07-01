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
        <Container_right className="container_right request-form">
          <div className="form-container request-form">
            <div className="signup_text request-form">
              <div className="auth-heading">
                <p>Request for Donor</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* Type of Donation */}
              <div className="form-group">
                <label htmlFor="type_of_donation" className="input-label">
                  Type of Donation{" "}
                </label>
                <select
                  type="date"
                  name="type_of_donation"
                  id="type_of_donation"
                  autoComplete="off"
                  placeholder="Required On"
                  value={values.require_on}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="blood">Blood</option>
                  <option value="plasma">Plasma</option>
                </select>
                {errors.require_on && touched.require_on ? (
                  <div className="errors">
                    <p>{errors.require_on}</p>
                  </div>
                ) : null}
              </div>
              {/* Blood Group */}
              <div className="form-group">
                <label htmlFor="blood_group" className="input-label">
                  Blood Group{" "}
                </label>
                <select
                  type="date"
                  name="blood_group"
                  id="blood_group"
                  autoComplete="off"
                  placeholder="Required On"
                  value={values.require_on}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="AB+">AB+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="AB-">AB-</option>
                </select>
                {errors.require_on && touched.require_on ? (
                  <div className="errors">
                    <p>{errors.require_on}</p>
                  </div>
                ) : null}
              </div>
              {/* Required On */}
              <div className="form-group">
                <label htmlFor="require_on" className="input-label">
                  Required On{" "}
                </label>
                <input
                  type="date"
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
                  placeholder="Enter Number of Units"
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
              {/*Reason */}
              <div className="form-group">
                <label htmlFor="reason" className="input-label">
                  Reason (Optional)
                </label>
                <textarea
                  type="text"
                  name="reason"
                  id="reason"
                  autoComplete="off"
                  placeholder="Why you need it?"
                  value={values.reason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={6}
                />
                {errors.reason && touched.reason ? (
                  <div className="errors">
                    <p>{errors.reason}</p>
                  </div>
                ) : null}
              </div>

              {/* Urgent Box */}
              <div className="checkbox-group">
                <label htmlFor="urgent" className="input-label">
                  Emergency Requirement{" "}
                </label>
                <input
                  type="checkbox"
                  name="urgent"
                  id="urgent"
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

export default Request;
