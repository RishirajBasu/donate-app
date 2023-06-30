import React from "react";
import "./Header.css";
import profileimage from "../Assets/profile.png";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
const Header = () => {
  const [profileInfo, setprofileInfo] = useState({
    fname: "Rishiraj",
    lname: "Basu",
  });
  const url = "";
  return (
    <div className="headerContainer">
      <div className="profile">
        <img src={profileimage} alt="profile image" className="profileImage" />
        <div className="profileContent">
          <h2 className="name">
            {profileInfo.fname + " " + profileInfo.lname}
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
