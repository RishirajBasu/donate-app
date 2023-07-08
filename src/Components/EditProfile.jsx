import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "./UI/LoadingButton";
import "./EditProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [prevData, setprevData] = useState({});
  const values = {
    fname: "",
    lname: "",
    date: "",
    number: "",
    address: "",
  };

  const fetchProfileData = async (user_id) => {
    try {
      let { data } = await axios.get(
        `http://127.0.0.1:8000/accounts/profile/${user_id}`
      );
      setprevData(data);
      console.log("Data", data);
    } catch (error) {
      if (error) {
        toast.error("Some error happened while retrieving your previous data");
      }
    }
  };
  const registerUser = async (values) => {
    try {
      setLoading(true);
      const user_id = localStorage.getItem("user_id");
      let { data } = await axios.put(
        `http://127.0.0.1:8000/accounts/profile/${user_id}/`,
        {
          first_name: prevData.first_name,
          last_name: prevData.last_name,
          phone: prevData.phone,
          address: prevData.address,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      toast.success("Profile updated successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const handleBlur = (e) => {};
  const handleChange = (e) => {
    values[e.target.name] = e.target.value;
  };
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    fetchProfileData(user_id);
    console.log("hye");
  }, []);
  return (
    <div className="editContainer">
      <div className="editContainerLeft">
        <h1>Donate</h1>
      </div>
      <div className="editContainerRight">
        <div className="form-container sign-up">
          <div className="edit_text">
            <h1>Edit your profile </h1>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            autoComplete="off"
          >
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
                  value={prevData.first_name}
                  onChange={(e) => {
                    setprevData({ ...prevData, first_name: e.target.value });
                  }}
                  onBlur={(e) => {
                    handleBlur(e);
                  }}
                  className="class_fname"
                />
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
                  value={prevData.last_name}
                  onChange={(e) => {
                    setprevData({ ...prevData, last_name: e.target.value });
                  }}
                  onBlur={(e) => {
                    handleBlur(e);
                  }}
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="input-label">
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={prevData.email}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                readOnly
              />
            </div>

            {/* address */}
            <div className="form-group">
              <label htmlFor="address" className="input-label">
                Address{" "}
              </label>
              <input
                type="address"
                name="address"
                id="address"
                autoComplete="off"
                value={prevData.address}
                onChange={(e) => {
                  setprevData({ ...prevData, address: e.target.value });
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
              />
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
                style={{ color: "black" }}
                value={prevData.date_of_birth}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                readOnly
              />
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
                value={prevData.phone}
                onChange={(e) => {
                  setprevData({ ...prevData, phone: e.target.value });
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
              />
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
                value={prevData.adhaar_number}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                readOnly
              />
            </div>

            {/* Submit button  */}
            <div className="buttons">
              <LoadingButton
                text={"Edit Profile"}
                loading={loading}
                onClick={() => {
                  registerUser(values);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
