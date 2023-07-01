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
  }, []);
  return (
    <div className="headerContainer">
      <div className="profile">
        <img src={profileimage} alt="profile image" className="profileImage" />
        <div className="profileContent">
          <h2 className="name">
            {response
              ? response.data.first_name + " " + response.data.last_name
              : profileInfo.fname + " " + profileInfo.lname}
          </h2>
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
            <div className="updateDate">12/16/2020</div>
            <div className="updateTime">12:30pm</div>
          </div>
          <div className="updateButton"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
