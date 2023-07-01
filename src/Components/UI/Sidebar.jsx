import React from "react";
import "./Sidebar.css";
import PaymentIcon from "@mui/icons-material/Payment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HistoryIcon from "@mui/icons-material/History";
import RedeemIcon from "@mui/icons-material/Redeem";
import SettingsIcon from "@mui/icons-material/Settings";
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
            <PaymentIcon className="icon" />
            Payment
          </button>
          <button className="listItem">
            <HistoryIcon className="icon" />
            History
          </button>
          <button className="listItem">
            <RedeemIcon className="icon" />
            My Rewards
          </button>
          <button className="listItem">
            <SettingsIcon className="icon" />
            Settings
          </button>
          <button className="listItem signout">
            <ExitToAppIcon className="icon signoutIcon" />
            Sign out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
