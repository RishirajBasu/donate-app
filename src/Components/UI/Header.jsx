import React from "react";
import "./Header.css";
import profileimage from "../Assets/profile.png";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
const Header = () => {
  const profileInfo = {
    fname: "Shirsha",
    lname: "Basu",
    created_at: "12/03/2023 at 11:30",
  };
  const [response, setResponse] = useState(null);
  const location = useLocation();
  const user_id = location.state.user_id;
  console.log(user_id);
  const url = `http://127.0.0.1:8000/accounts/profile/${user_id}`;
  useEffect(() => {
    const fetchdata = async () => {
      try {
        let data = await axios.get(`${url}`);
        setResponse(data);
        console.log(data);
      } catch (error) {
        alert("Error fetching Data", error);
      }
    };
    fetchdata();
    console.log("data called");
  }, []);
  const jsdate = () => {
    const isodate = new Date(response.data.created_at);
    return isodate.toString().slice(0, 16);
  };
  return (
    <div className="headerContainer">
      <div className="profile">
        <img src={profileimage} alt="profile image" className="profileImage" />
        <div className="profileContent">
          <h2 className="name">
            {response && response.data.first_name && response.data.last_name
              ? response.data.first_name + " " + response.data.last_name
              : profileInfo.fname + " " + profileInfo.lname}
          </h2>
          <h4 className="date">
            Joined since : {response ? jsdate() : `Saturday, 12th june 2023`}
          </h4>
          <button className="editbutton">Edit Profile</button>
        </div>
      </div>
      <div className="lastUpdate">
        <div className="updateBox">
          <div className="updateText">
            <UpdateIcon />
            <h4>Location Last Updated:</h4>
          </div>
          <div className="data">
            <div className="updateDate">
              {response ? response.data.created_at : "12:30am "}
            </div>
            {/* <div className="updateTime">12:30pm</div> */}
          </div>
          <div className="updateButton"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
