import React from "react";
import "./DonorDashboard.css";
import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
const DonorDashboard = () => {
  const sidebarProp = {
    home: false,
    historyReciever: false,
    rewards: false,
    donor: true,
    active: {
      padding: "20px",
      border: "none",
      textAlign: "center",
      color: "white",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.383)",
      cursor: "pointer",
    },
  };
  return (
    <div className="donorPageConatiner">
      <div className="donorPageConatinerLeft">
        <Sidebar {...sidebarProp} />
      </div>
      <div className="donorPageConatinerRight">
        <div className="donorHeader">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
