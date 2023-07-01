import React from "react";
import "./Sidebar.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Sidebar = () => {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  // const [loading, setLoading] = useState(false);
  // setLoading(false);
  const url = "http://127.0.0.1:8000/accounts/logout/";
  const signOut = async () => {
    try {
      let data = await axios.post(
        `${url}`,
        {
          refresh_token: refresh,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        }
      );
      toast.success("Signed out successfully");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("something went wrong");
      }
    }
  };
  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <h1>Donate</h1>
          <button className="beDonor">Be a Donor!</button>
        </div>
        <ul className="list">
          <button className="listItem">
            <HomeIcon className="icon" disabled />
            Home
          </button>
          <button className="listItem">
            <HistoryIcon className="icon" />
            History
          </button>
          <button className="signout" onClick={signOut}>
            <ExitToAppIcon className="icon signoutIcon" />
            Sign out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
