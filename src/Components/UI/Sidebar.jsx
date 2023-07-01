import React from "react";
import "./Sidebar.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
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
          <button className="signout">
            <ExitToAppIcon className="icon signoutIcon" />
            Sign out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
